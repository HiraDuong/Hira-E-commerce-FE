// src/services/AuthService.tsx
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const googleAuthKey: string = import.meta.env.VITE_GOOGLE_LOG_IN_CLIENT_ID as string;

const handleLoginSuccess = (res: unknown): void => {
    console.log('Logged in successfully', res);
    // TODO: Save user info to the database
    localStorage.setItem('user', JSON.stringify(res));
    // Redirect to home page
    window.location.href = '/';
};



export const GoogleLoginButton = (): JSX.Element => {
    return (
        <GoogleOAuthProvider clientId={googleAuthKey}>
            <GoogleLogin
                onSuccess={handleLoginSuccess}
            />
        </GoogleOAuthProvider>
    );
};
