import React from 'react'
import { Link } from 'react-router-dom';

const Social = (props) => {
    return (
        <Link to={props.path} className="bg-black w-fit p-1 rounded-full">
            {props.children}
        </Link>
    )
}

export default Social
