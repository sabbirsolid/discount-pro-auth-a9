# Discount Pro 

## Description
This project implements user authentication for a discount and coupon management platform. It provides secure user login, registration, and Google-based social sign-in. The app is built with React, Firebase Authentication, and Tailwind CSS, ensuring a seamless user experience with modern authentication practices.

## Technologies Used
- **React:** For creating reusable components and managing the user interface.
- **Firebase Authentication:** Secure and robust user authentication system.
- **React Router:** Enables smooth navigation between authentication pages (login, register, etc.).
- **React Toastify:** Provides user feedback for authentication actions (e.g., login success, errors).
- **Tailwind CSS:** For clean, responsive, and user-friendly styling.
- **Context API:** Global state management for authentication status and user information.
- **JavaScript:** Handles form validation, error handling, and interactivity.

## Key Features

### User Registration
- Create an account with email and password.
- Option to set a display name and profile photo during registration.

### Secure Login
- Login with email and password.
- Includes password visibility toggle and error feedback for incorrect credentials.

### Google Sign-In
- Login using Google for a quick and secure experience.
- Automatically retrieves and stores user details like name and photo.

### Error Handling
- Comprehensive error messages for invalid input, authentication errors, and network issues.
- Uses Toastify to display feedback messages to users.

### Password Reset
- Forgot password functionality allows users to reset their password via email.

### Global State Management
- Authentication status and user data (name, photo, email) are globally accessible using Context API.

### Loading States
- Displays a centered spinner during asynchronous operations like login, registration, and Google sign-in.

### Responsive Design
- Authentication pages are fully responsive, ensuring usability on various screen sizes.

## Code Overview

### Authentication Flow

#### AuthProvider
- Provides `createUser`, `logIn`, `signInWithGoogle`, and `updateProfile` methods.
- Manages global user state and observes authentication state changes.

#### Login Component
- Handles email/password login and Google sign-in.
- Includes form validation and feedback for errors or successful login.

#### Register Component
- Enables users to register with validation for password strength.
- Updates user profile with a display name and photo URL after registration.

#### Protected Routes
- Ensures that only authenticated users can access certain pages.
- Redirects unauthenticated users to the login page.

## Future Enhancements

- **Multi-Factor Authentication:** Add an extra layer of security for user accounts.
- **Social Login Options:** Extend support for Facebook and Twitter sign-in.
- **Account Management:** Allow users to update email and password from a dedicated profile settings page.

## Live Links

- https://discounts-pro.web.app/
- Alternative Link: https://discounts-pro.firebaseapp.com/