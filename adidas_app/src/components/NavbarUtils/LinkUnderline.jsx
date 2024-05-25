import { Link } from "react-router-dom";

const LinkUnderline = (props) => {
    return (
        <Link className="link__black" to={props.link}>
            {props.children}
        </Link>
    )
}

export default LinkUnderline;
