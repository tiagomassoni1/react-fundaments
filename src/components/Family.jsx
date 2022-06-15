import React from "react";
import { cloneElement } from "react";
import FamilyMember from "./FamilyMember";

export default (props) => {
    return (
        <div>
            {props.childre.map((child) => {
                return cloneElement(child, props);
            })}
        </div>
    )
};