import React from "react";
import { useParams } from "react-router-dom";

function BoardContent() {

  let {num} = useParams();

  return (
    <div>
      <h3>글 상세페이지</h3>
      {num}번 글입니다.
    </div>
  );

}

export default BoardContent;