import Logo from "../assets/Logo.tsx";
import {Link} from "react-router";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {memo} from "react";

const Footer = memo(() => {
    return (
        <footer className={"flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:justify-between py-5 px-4"}>
            <div className="flex flex-row space-y-3">
                <Link to={"/"}>
                    <Logo />
                </Link>
            </div>
            <div>
                <p className={"text-white"}>TicTacToe - Développé par Mathias Pavie</p>
            </div>
            <div className="flex flex-row space-x-3">
                <a href={"https://github.com/Math-Pav"} target="_blank" className="text-white" aria-label={"Mon profil Github"}>
                    <FaGithub />
                </a>
                <a href={"https://linkedin.com/in/mathias-pavie"} target="_blank" className="text-white" aria-label={"Mon profil Linkedin"}>
                    <FaLinkedin />
                </a>
            </div>
        </footer>
    );
});

export default Footer;