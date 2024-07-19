import axios from "axios";
import { BeError, LoginData, RegisterData, UserContextData } from '../types/types';
import { useNavigate } from 'react-router-dom';

const apiUrl = import.meta.env.VITE_BE_API_URL;

export const useAuthService = () => {
  const navigate = useNavigate();

  const loginService = async (loginData: LoginData, login: (userContextData: UserContextData) => void, setError:(error:BeError)=>void): Promise<void> => {
    const body = {
      user_email_or_phone: loginData.user_email_or_phone,
      user_password: loginData.user_password
    };

    try {
      const response = await axios.post(`${apiUrl}/auth/login`, body);
      
      if (response.status === 200) {
        console.log("Đăng nhập thành công:", response.data);
        const userContextData = {
          user: response.data.user,
          token: response.data.token
        };
        login(userContextData);
        navigate('/'); // Hoặc trang khác sau khi đăng nhập thành công
      } else {
        console.error("Đăng nhập thất bại:", response.data);
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error("Có lỗi xảy ra khi đăng nhập:", error.response?.data);
        setError(error.response?.data);
      } else {
        console.error("Có lỗi không xác định xảy ra khi đăng nhập:", error);
      }
    }
  };

  const registerService = async (registerData: RegisterData, setBeError:(error:BeError)=>void): Promise<void> => {
    const body = {
      username: registerData.username,
      user_email: registerData.user_email,
      user_telephone: registerData.user_telephone,
      user_password: registerData.user_password
    };
    try {
      const response = await axios.post(`${apiUrl}/auth/register`, body);
      if (response.status === 201) {
        console.log("Đăng ký thành công:", response.data);
        navigate('/login');  // Chuyển đến trang đăng nhập sau khi đăng ký thành công
      } else {
        console.error("Đăng ký thất bại:", response.data);
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error("Có lỗi xảy ra khi đăng ký:", error.response?.data);
        setBeError(error.response?.data);
      } else {
        console.error("Có lỗi không xác định xảy ra khi đăng ký:", error);
      }
    }
  };

  return { loginService, registerService };
};
