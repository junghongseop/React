import React from "react";
import Comment from "./comment";

commentValue = [
    {
        name: "정홍섭",
        comment: "안녕하세요",
    },
    {
        name: "정홍섭",
        comment: "안녕하세요",
    },
    {
        name: "정홍섭",
        comment: "안녕하세요",
    },
]

function CommentList(props) {
    return (
        <div>
            <Comment name={"정홍섭"} Comment={"안녕하세요."}/>
        </div>
    )
}

export default CommentList;