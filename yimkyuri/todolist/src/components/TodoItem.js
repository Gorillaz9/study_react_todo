import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import "./TodoItem.css";


const TodoItem = ({todo, onCheckToggle}) => {
    const {id, text, checked} = todo;
    return (
        <div className="TodoItem">
            <div className={`content ${checked ? "checked" : ""}`}>
                {checked ? <MdCheckBox onClick={() => {
                    onCheckToggle(id);
                }} /> : <MdCheckBoxOutlineBlank onClick={() => {
                    onCheckToggle(id);
                }} />}
                <p className="text">{text}</p>
            </div>
        </div>
    )
}

export default TodoItem;