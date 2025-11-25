import Logo from "../assets/Logo.tsx";
import Button from "../Button.tsx";
import {Link} from "react-router";
import {memo} from "react";

const Header = memo(() => {

    return (
        <header>
            <nav
                className={"flex flex-row justify-between py-5 px-4"}
                aria-label="Barre de navigation principale"
            >
                <div className="flex flex-row space-y-3">
                    <Link to={"/"} aria-label="Retour à l'accueil">
                        <Logo/>
                    </Link>
                </div>
                <ul className="flex flex-row space-x-3">
                    <li>
                        <Link to="/scoreboard" aria-label="Voir le classement">
                            <Button color="lightGrey">Classement</Button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
});

export default Header;