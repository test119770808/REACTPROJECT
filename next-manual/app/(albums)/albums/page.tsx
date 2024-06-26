"use client";
// Client Side에서 데이터 처리... 
// useState, useEffect, 동기화 처리... 

import { useEffect, useState } from "react";

export default function Page() {

  // useState -> albums
  const [albums, setAlbums] = useState();
  const [isLoading, setIsLoading] = useState(true);  // 기본값으로 로딩중... true

  // async와 await를 사용... 
  const getAlbums = async () => {
    const response =  await fetch("https://jsonplaceholder.typicode.com/albums");
    const json = await response.json();
    console.log(json);
    setAlbums(json);
    setIsLoading(false);  // 상태 변경... 
  }

  // 컴포넌트 실행시 동작하는 기능... 
  useEffect(() => {
    // 통신... "https://jsonplaceholder.typicode.com/ablums"
    // 결과는 setAlbums()에 저장하는 function을 구현... 
    getAlbums();
  }, [])
 
  return (
    <div>
      {isLoading? "Loading.... ":JSON.stringify(albums)}
    </div>
  );
}

