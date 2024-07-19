// src/services/AuthService.tsx
import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'; // Import jwtDecode chính xác từ jwt-decode

const googleAuthKey: string = import.meta.env.VITE_GOOGLE_LOG_IN_CLIENT_ID as string;

export const GoogleLoginButton = (): JSX.Element => {
    const navigate = useNavigate();

    const handleLoginSuccess = (credentialResponse: CredentialResponse): void => {
        try {
            console.log('Logged in successfully', credentialResponse);
            const credential = credentialResponse.credential;
            if (typeof credential === 'string') {
                const decodedToken: string = jwtDecode(credential);
                console.log('Decoded token:', decodedToken);
                localStorage.setItem('user', JSON.stringify(decodedToken));
                navigate('/');
            } else {
                throw new Error('Invalid credential format');
            }
        } catch (error) {
            console.error('Error handling login success:', error);
            // Handle error or fallback behavior
        }
    };

    return (
        <GoogleOAuthProvider clientId={googleAuthKey}>
            <GoogleLogin onSuccess={handleLoginSuccess} />
        </GoogleOAuthProvider>
    );
};
