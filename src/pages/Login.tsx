import Content from "../components/Content";
import side_img from "../assets/images/SideImage.png";
import { GoogleLoginButton } from "../services/AuthService";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    const [emailOrPhone, setEmailOrPhone] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeEmailOrPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailOrPhone(e.target.value);
    };

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Your login logic here
        console.log("Logging in with:", { emailOrPhone, password });

        // Clearing fields after submission (optional)
        setEmailOrPhone("");
        setPassword("");
    };

    return (
        <Content>
            <div className="flex flex-row mb-20 justify-center items-center gap-10">
                <img src={side_img} alt="side-img" className="w-1/3" />
                <form className="w-1/3 flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div>
                        <h1 className="font-bold text-2xl mb-10">Login to Hira E-commerce</h1>
                        <p>Enter your details below</p>
                    </div>
                    <div className="w-72">
                        <div className="relative w-full min-w-[200px] h-10">
                            <input
                                required={true}
                                type="text"
                                value={emailOrPhone}
                                onChange={handleChangeEmailOrPhone}
                                className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                                placeholder=" "
                            />
                            <label
                                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900"
                            >
                                Enter your email or phone number
                            </label>
                        </div>
                    </div>
                    <div className="w-72">
                        <div className="relative w-full min-w-[200px] h-10">
                            <input
                                required={true}
                                type="password"
                                value={password}
                                onChange={handleChangePassword}
                                className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                                placeholder=" "
                            />
                            <label
                                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900"
                            >
                                Password
                            </label>
                        </div>
                    </div>
                    <div className="flex items-center justify-start gap-4 text-orange-500">
                        <button type="submit" className="h-12 w-32 bg-orange-600 text-white rounded-lg">
                            Login
                        </button>
                        <Link to="#" className="text-blue-gray-500 hover:text-blue-gray-700">Forgot Password?</Link>
                    </div>
                    
                    <label>Or</label>
                    <GoogleLoginButton />
                    
                    <div>
                        <p className="text-gray-500">Don't have an account? <Link to="/register" className="text-blue-gray-500 hover:text-blue-gray-700">Sign up now</Link></p>
                    </div>
                </form>
            </div>
        </Content>
    );
};

export default Login;
