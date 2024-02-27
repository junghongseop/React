import React from "react";
import Bookd from "./book";

function Library(props) {
    return (
        <div>
            <Book name = "처음만난 파이썬" bookPage = {30} />
            <Book name = "처음만난 파이썬" bookPage = {30} />
            <Book name = "처음만난 파이썬" bookPage = {30} />
        </div>
    )
}

export default Library;