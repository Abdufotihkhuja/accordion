import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
    const [open, isOpen] = useState(false);
    return (
        <article className="question">
            <header>
                <h4>{title}</h4>
                <button className="btn" onClick={() => isOpen(!open)}>
                    {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>
            {open ? <p>{info}</p> : null}
        </article>
    );
};

export default Question;
