import { Link } from "react-router-dom";
import { IoSend } from "react-icons/io5";
export const Footer = () => {
    return (
        <footer className="bg-black text-white ">
            <div className="flex flex-row justify-around text-white pt-5 pb-5">
                <ul className="flex flex-col">
                    <p className="text-2xl font-bold">Hira E-Commerce</p>
                    <p>Subscribe</p>
                    <p>Get 10% off your first order</p>
                    <form className="w-72 mt-4">
                        <div className="w-72">
                            <div className="relative w-full min-w-[200px] h-10">
                                <div className="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
                                    <button className="cursor-pointer" type="submit">
                                        <IoSend className="cursor-pointer" />
                                    </button>
                                </div>
                                <input
                                    className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] !pr-9 border-blue-gray-200 focus:border-white-900"
                                    placeholder=" " /><label
                                        className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500  before:border-white peer-focus:before:!border-white after:border-blue-white peer-focus:after:!border-white">Send your email
                                </label>
                            </div>
                        </div>
                    </form>
                </ul>
                <ul className="flex flex-col">
                    <p className="text-xl">Support</p>
                    <p>Hai Ba Trung, Hanoi</p>
                    <p>hirakuminamoto@gmail.com</p>
                    <p>+84888888888</p>
                </ul>
                <ul className="flex flex-col">
                    <p className="text-xl">Account</p>
                    <Link to="/account">My Account</Link>
                    <Link to="/login">Login/ Register</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="/wishlist">Wishlist</Link>
                    <Link to="/shop">Shop</Link>
                </ul>
                <ul className="flex flex-col">
                    <p className="text-xl">Quick Link</p>
                    <p>Privacy Policy</p>
                    <p>Terms Of Use</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </ul>
                <ul>
                    <p className="text-xl">Download App</p>
                    <p>Save $3 with App New User Only</p>
                    <span className="flex flex-row h-24 mt-4">
                        <img src="./app_install_qrcode.png" alt="qr_code" />
                        <div className="flex justify-around flex-col ml-4">
                            <Link to=""> <img className="h-10" src="./GetItOnGooglePlay.png" alt="ch-play" /> </Link>
                            <Link to=""> <img className="h-10" src="./DownloadOnAppStore.png" alt="app-store" /> </Link>
                        </div>

                    </span>

                </ul>
            </div>
            <p className="text-gray-500 border-gray-500 text-center pt-8 pb-8 border-solid border-2">&copy; 2022 Hira E-Commerce. All rights reserved.</p>
        </footer>
    );
}
