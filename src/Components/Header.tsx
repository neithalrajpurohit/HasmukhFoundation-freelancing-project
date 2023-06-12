import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/images/logo.jpg";

const Header = () => {
    return (
        <div className="flex items-center gap-3 bg-[#9cc0e5] px-[160px]">
            <div className="flex-[.5]">
                <img src={logo} className="w-[200px]  rounded-full" />
            </div>
            <div className="flex gap-6 text-[30px]">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
            </div>
            <button>Donate</button>
        </div>
    );
};

export default Header;
