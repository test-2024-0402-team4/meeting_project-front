/** @jsxImportSource @emotion/react */
import { useMutation, useQuery } from "react-query";
import * as s from "./style";
import React, { useState } from 'react';
import { Link, useParams } from "react-router-dom";
import StudentComment from "../../components/StudentComment/StudentComment";
import { deleteTeacherBoardRequest, getSingleTeacherBoardReqeust } from "../../apis/api/teacherBoardApi";

function TeacherBoardPage(props) {
    const params = useParams();
    const [singleBoard , setSingleBoard] = useState("");
    
    const getBoardQuery = useQuery(
        ["getBoardQuery"],
        async() => await getSingleTeacherBoardReqeust(params.teacherBoardId),
        {
            refetchOnWindowFocus : false,
            onSuccess: response => {
               setSingleBoard(() => response.data)
                console.log(response.data);
            }
        }
    );

    const deleteBoardMutation = useMutation({
        mutationKey:"deleteBoardMutation",
        mutationFn: deleteTeacherBoardRequest,
        onSuccess: response => {
            alert("삭제 완료")
            window.location.replace("/teacher/boards?page=1");

        }
    });
    
    const handleDeleteClick = () => {
        deleteBoardMutation.mutate(params.teacherBoardId);
    }
    

    return (
    <div css={s.layout}>
        <div css={s.authority}>
            <button css={s.authorityButton}>선생님용</button>
            <button css={s.authorityButton}>공부방</button>
        </div>
        <div css={s.boardPageTitle}>
            {singleBoard.title}
        </div>
        <div css={s.showDate}> {singleBoard.createDate} </div>
        <div css={s.boardListLayout}>
           
            <div> author </div>
            <code dangerouslySetInnerHTML ={{__html: singleBoard.content}}></code>
            <div>{singleBoard.viewCount}</div>
            
        </div>
        <div>
            <Link to={`/teacher/board/update/${singleBoard.teacherBoardId}`}>
                <button>수정</button>
            </Link>
            <button onClick={handleDeleteClick}>삭제</button>
        </div>
        <div>
            
        </div>
            <StudentComment />
    </div>
    );
}

export default TeacherBoardPage;