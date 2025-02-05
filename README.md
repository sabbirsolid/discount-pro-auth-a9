
# 💰 Discounts Pro  

**Discounts Pro** is a **coupon and discount management platform** that helps users discover and collect discount coupons from various **Bangladeshi e-commerce sites**. The platform ensures **secure user authentication**, including **email/password login, registration, and Google-based sign-in**, using **Firebase Authentication**.  

Built with **React, Firebase, and Tailwind CSS**, this project provides a seamless and modern user experience for finding the best deals online.  

🔗 **Live Demo:** [Discounts Pro](https://discounts-pro.web.app/)  

![Discounts Pro Screenshot](https://i.ibb.co.com/WW1kTptd/Screenshot-174.png)  

## 📖 Table of Contents  
- [Features](#features)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Configuration](#configuration)  
- [Dependencies](#dependencies)  
- [Development](#development)  
- [Troubleshooting](#troubleshooting)  
- [Contributing](#contributing)  
- [License](#license)  

## ✨ Features  
✅ **User Authentication** – Secure login, registration, and Google sign-in with Firebase.  
🎟 **Coupon Collection** – Browse and collect discount coupons from Bangladeshi e-commerce sites.  
📢 **Live Discount Updates** – Stay informed about the latest discounts and offers.  
📌 **Save Coupons** – Easily copy and save coupon codes for later use.  
📱 **Responsive Design** – Fully optimized for both desktop and mobile users.  
🎨 **Modern UI** – Built with Tailwind CSS and DaisyUI for a clean and interactive experience.  

## 🚀 Installation  

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/yourusername/discounts-pro.git
   cd discounts-pro
   ```  

2. **Install Dependencies**  
   ```bash
   npm install
   ```  

3. **Set Up Environment Variables**  
   Create a `.env` file in the root directory and add your Firebase credentials:  
   ```env
   VITE_apiKey=your-api-key
   VITE_authDomain=your-auth-domain
   VITE_projectId=your-project-id
   VITE_storageBucket=your-storage-bucket
   VITE_messagingSenderId=your-messaging-sender-id
   VITE_appId=your-app-id
   ```

4. **Start the Development Server**  
   ```bash
   npm run dev
   ```  

## 🛠 Configuration  
- The project uses **Vite** for fast development.  
- **Firebase Authentication** is used for secure user login and registration.  
- **Tailwind CSS & DaisyUI** provide a sleek and modern UI.  

## 📦 Dependencies  

### **Main Dependencies**  
- [React](https://react.dev/) `^18.3.1` – Frontend library.  
- [React Router DOM](https://reactrouter.com/) `^6.28.0` – Navigation and routing.  
- [Firebase](https://firebase.google.com/) `^11.0.2` – Authentication and database.  
- [React Toastify](https://fkhadra.github.io/react-toastify/) `^10.0.6` – Notifications.  
- [React Fast Marquee](https://www.npmjs.com/package/react-fast-marquee) `^1.6.5` – Animated scrolling.  
- [React Copy to Clipboard](https://www.npmjs.com/package/react-copy-to-clipboard) `^5.1.0` – Easily copy coupon codes.  
- [SweetAlert2](https://sweetalert2.github.io/) `^11.14.5` – Custom alerts.  

### **Development Dependencies**  
- [Vite](https://vitejs.dev/) `^5.4.10` – Fast build tool.  
- [Tailwind CSS](https://tailwindcss.com/) `^3.4.15` – Utility-first CSS framework.  
- [DaisyUI](https://daisyui.com/) `^4.12.14` – Pre-built UI components.  
- [ESLint](https://eslint.org/) `^9.13.0` – Linting for better code quality.  

## 🏗 Development  

### **Run Development Server**  
```bash
npm run dev
```  

### **Build for Production**  
```bash
npm run build
```  

### **Run ESLint**  
```bash
npm run lint
```  

## ❓ Troubleshooting  
- Ensure **Node.js v16+** is installed.  
- Verify that your **Firebase credentials** in `.env` are correct.  
- Restart the development server if changes are not reflecting.  
- If styles are not applying, run:  
  ```bash
  npm run postcss
  ```  

## 🤝 Contributing  
Contributions are welcome! Feel free to open an issue or submit a pull request.  

## 📜 License  
This project is licensed under the **MIT License**.  

---

This README provides a **detailed**, **organized**, and **professional** overview of your project. Let me know if you need any modifications! 🚀
