// id값을 전달 받아서..... 
// 해당 id에 속하는 Album과 photos를 출력하는 컴포넌트를 만들어 보세요~!

import { API_URL } from "../page";

async function getAlbum(id:string) {
  const response = await fetch(`${API_URL}albums/${id}`);
  return response.json();  
}

async function getPhotos(albumId:string) {
  const response = await fetch(`${API_URL}photos?albumId=${albumId}`);
  return response.json();  
}

export default async function AlbumDetail({
  params: {id},
}:{params : {id: string}}) {
  // 위에 전달 받은 id를 이용하여 해당 id에 속하는 Album과 photos를 출력하세요... 
  const album = await getAlbum(id);
  const photos = await getPhotos(id);  

  return(
    <div>
      <h1>Album Title : {album.title}</h1>
      <div>
        <h3>Photos : </h3>
        {JSON.stringify(photos)}
      </div>
    </div>
  )

}