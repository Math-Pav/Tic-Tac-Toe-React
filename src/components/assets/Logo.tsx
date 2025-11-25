import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import {memo} from "react";

const Logo = memo(() => {
    return (
        <div className={"flex flex-row space-x-2 items-center"}>
            <FaArrowAltCircleLeft className={"text-primary w-8 h-8"} />
            <FaArrowAltCircleRight className={"text-secondary w-8 h-8"} />
        </div>
    );
});

export default Logo;
