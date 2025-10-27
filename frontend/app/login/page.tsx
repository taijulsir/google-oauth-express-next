'use client';
export default function LoginPage() {
  const handleGoogle = () => {
    window.location.href = '/api/auth/google';
  };
  return <div><h1>Login</h1><button onClick={handleGoogle}>Sign in with Google</button></div>;
}
