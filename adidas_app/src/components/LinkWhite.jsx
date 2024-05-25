import { Link } from "react-router-dom";

const LinkWhite = (props) => {
    return (
        <Link className="link__white" to={props.link}>
            {props.children}
        </Link>
    )
}

export default LinkWhite;
