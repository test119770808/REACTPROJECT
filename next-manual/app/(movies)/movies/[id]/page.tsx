import React from "react";

export default function MovieDetail({
  params : {id}
}:{
  params:{id:string}}
) {
  // console.log(props);
  return (
    <div>
      <h1>Movie {id}</h1>
    </div>
  );
}