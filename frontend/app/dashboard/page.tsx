'use client';
import { useEffect, useState } from 'react';
export default function Dashboard() {
  const [me, setMe] = useState(null);
  async function fetchMe() {
    let r = await fetch('/api/me', { credentials: 'include' });
    if (r.status === 401) {
      await fetch('/api/auth/refresh', { method: 'POST', credentials: 'include' });
      r = await fetch('/api/me', { credentials: 'include' });
    }
    if (r.ok) setMe(await r.json());
  }
  useEffect(() => { fetchMe(); }, []);
  const logout = async () => {
    await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' });
    window.location.href = '/login';
  };
  if (!me) return <p>Loading...</p>;
  return (
    <div>
      <h1>Dashboard</h1>
      <img src={me.picture} width={60} height={60} style={{ borderRadius: 30 }} />
      <p>{me.name}</p>
      <p>{me.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
