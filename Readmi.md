

```md
# 🚀 Google OAuth Login System — Express + Next.js

A **complete production-grade Google login system** built with:
- 🧠 **Backend:** Node.js + Express + MongoDB + JWT (Access & Refresh tokens)
- ⚛️ **Frontend:** Next.js (App Router) with cookie-based session handling
- 🔐 **Auth Flow:** Secure OAuth2 + Google Identity + Auto user creation
- 🍪 **Cookies:** HTTP-only + SameSite-aware for production safety

---

## 🏗️ Features
✅ Secure Google OAuth2 login (server-side handled)  
✅ Auto-register or find user on first login  
✅ JWT Access & Refresh tokens stored in HTTP-only cookies  
✅ Protected routes (`/me`) with token validation  
✅ Full stack separation — Express API + Next.js frontend  
✅ Ready for production deployment (Render / Vercel / Railway)  

---

## ⚙️ Tech Stack
**Backend:** Node.js · Express · MongoDB · Mongoose · JWT · Google APIs  
**Frontend:** Next.js · React · TypeScript (optional)  

---

## 📁 Folder Structure
```

google-oauth-express-next/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   └── utils/
│   ├── .env
│   └── package.json
│
└── frontend/
├── app/
│   ├── login/
│   └── dashboard/
├── next.config.js
└── package.json

````

---

## 🚀 Setup & Run Locally

### 🧩 1. Clone the repo
```bash
git clone https://github.com/<your-username>/google-oauth-express-next.git
cd google-oauth-express-next
````

### 🧠 2. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

### ⚛️ 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

### 🌐 4. Visit:

```
http://localhost:3000/login
```

Click **Sign in with Google** → backend handles OAuth flow → redirected to dashboard with your profile.

---

## 🔑 Environment Variables

In `/backend/.env`

```
PORT=4000
MONGO_URI=mongodb://127.0.0.1:27017/google_oauth_demo
GOOGLE_CLIENT_ID=your_client_id_here
GOOGLE_CLIENT_SECRET=your_secret_here
GOOGLE_REDIRECT_URI=http://localhost:4000/auth/google/callback
JWT_ACCESS_SECRET=super_access_secret
JWT_REFRESH_SECRET=super_refresh_secret
FRONTEND_SUCCESS_URL=http://localhost:3000/dashboard
FRONTEND_FAILURE_URL=http://localhost:3000/login?error=oauth_failed
```

---

## 🧠 Notes

* Keep app in **Testing Mode** on Google Console until you go live.
* Add your Gmail under **Test Users**.
* Don’t publish until you have a verified privacy policy.
* Works on localhost with no SSL required.

---

## 🧩 Deployment (Optional)

| Service                             | Usage                   |
| ----------------------------------- | ----------------------- |
| **Backend:** Render / Railway / VPS | Deploy Express API      |
| **Frontend:** Vercel                | Deploy Next.js frontend |
| **MongoDB:** Atlas                  | Free cloud database     |

---

## 🧑‍💻 Author

**Your Name**
Backend · Full-Stack Developer
💼 [LinkedIn](https://linkedin.com/in/yourname) | 🌐 [Portfolio](https://yourdomain.com)

---

## ⭐ Show Support

If this helped you, give it a ⭐ on GitHub and share with others!

````

---

When you create your GitHub repo:

```bash
git init
git remote add origin https://github.com/<your-username>/google-oauth-express-next.git
git add .
git commit -m "Initial commit: full Google OAuth system"
git push -u origin main
````

