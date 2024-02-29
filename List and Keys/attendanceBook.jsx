import React from "react";

const students = [
    {
        id: 1,
        name: "hongsub",
    },
    {
        id: 2,
        name: "steve",
    },
    {
        id: 3,
        name: "bill",
    },
    {
        id: 4,
        name: "jeff",
    },
]

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) =>{
                // key값이 없으면 콘솔에서 에러가 발생하므로 학생마다 id를 줘서 key로 설정
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    );
}