import React from "react";
import "./style.css";


export const Container = (props) => {
    return (
        <div {...props} className="container">
            {props.children}
        </div>
    );
};
