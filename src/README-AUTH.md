# Authentication System

This document explains how the authentication system is set up in the Detrinox Book Store user frontend.

## Overview

The authentication system uses JWT tokens for authentication and supports:
- Email/password registration and login
- Google OAuth login
- Protected routes for authenticated users
- Persistent authentication state

## Key Components

1. **AuthService** (`src/api/authService.jsx`)
   - Handles API calls to the backend for login, registration, and logout
   - Stores and retrieves JWT tokens from localStorage
   - Includes utility functions for checking authentication status

2. **AuthContext** (`src/context/AuthContext.jsx`)
   - Provides authentication state across the application
   - Exposes the current user, authentication status, and utility functions
   - Persists state across page refreshes

3. **ProtectedRoute** (`src/components/ProtectedRoute.jsx`)
   - Redirects unauthenticated users to the login page
   - Shows loading state while checking authentication status

4. **Login Component** (`src/pages/Login.jsx`)
   - Handles both login and registration
   - Implements Google OAuth login
   - Updates auth context on successful authentication

5. **LogoutButton** (`src/components/LogoutButton.jsx`)
   - Handles user logout and redirects to home page

## Environment Variables

The authentication system uses these environment variables:
- `VITE_API_URL`: The backend API URL (e.g., `http://localhost:5000/api`)
- `VITE_GOOGLE_CLIENT_ID`: Your Google OAuth client ID

## Setting Up Google OAuth

1. Create a project in the [Google Cloud Console](https://console.cloud.google.com/)
2. Configure the OAuth consent screen
3. Create OAuth 2.0 credentials
4. Add your application's domain to the authorized JavaScript origins
5. Add the client ID to your environment variables

## Backend API Requirements

The backend should implement these endpoints:
- `POST /api/users/register`: Register a new user
- `POST /api/users/login`: Authenticate a user
- `POST /api/users/google-login`: Handle Google OAuth authentication

Each successful authentication should return a JWT token that is then stored in localStorage. 