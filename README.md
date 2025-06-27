# 💬 Gossi — Cute Gossip-Based Social MVP

**Gossi** is a soft-styled, girl-centric social app where users can post, react, comment, and gossip freely.  
It’s the **second app** in my journey to build **100 Emotionally Designed MVPs** — real products that feel personal and expressive.

🎬 [Watch Demo on YouTube](https://youtu.be/nRhW5lHNpD4?feature=shared)  
📱 [Watch Insta Reel](https://www.instagram.com/reel/DKw2ay-JO0K/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==)

---

## 💡 Features

- 📸 Post videos/images with preview before uploading
- ♻️ Infinite scroll feed with `useInfiniteQuery` (TanStack)
- ❤️ React to posts with emojis (Optimistic UI)
- 💾 Save/Favorite posts (stored in user profile)
- 💬 Comment system for every post
- 🚩 Flag/Report abusive content
- 🚫 Block users to instantly filter their posts from feed
- 🧑‍💼 View other users' profiles and media-specific posts

---

## 🖼️ Banner Preview

![Gossi Banner](./media/Gossii%20Banner.png)

---

## 🧠 Tech Stack

- **React Native (Expo)**
- **Firebase** (Auth, Firestore, Storage)
- **TanStack Query** – Infinite scroll & optimistic mutations
- **Expo Image Picker**, **Expo Video**
- **Reanimated**, **React Native Paper**, **Tab View**

---

## 🛠️ Setup Instructions

1. Clone the repo
```
git clone https://github.com/bharat2005/gossii-app.git
cd gossii-app
```
2. Install dependencies
```
npm install
```
3. Rename the file example.env to .env
4. Update .env with your own configuration, e.g.:
```
# Rename this file to ".env" before use
# Replace XXXX's with your own Firebase config keys 
API_KEY=XXXX
AUTH_DOMAIN=XXXX
PROJECT_ID=XXXX
STORAGE_BUCKET=XXXX
MESSAGING_SENDER_ID=XXXX
APP_ID=XXXX
MEASURMENT_ID=XXXX
```
 5. Run the app 
```
npx expo start
```

---

### ⚠️ Note on Firestore Data

This app uses Firestore to fetch catalog and product feed data.
If you're running the app locally with your own Firebase project, you'll need to manually seed your Firestore with product/category documents — otherwise, the feed may appear empty.

---

## 📄 License  
This project is licensed under the [MIT License](./LICENSE).
