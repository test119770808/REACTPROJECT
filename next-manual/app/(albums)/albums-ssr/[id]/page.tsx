// id값을 전달 받아서..... 
// 해당 id에 속하는 Album과 photos를 출력하는 컴포넌트를 만들어 보세요~!

import { Suspense } from "react";
import AlbumInfo from "../../../components/Album-info";
import AlbumPhotos from "../../../components/AlbumPhotos";

// import { API_URL } from "../page";

// async function getAlbum(id:string) {
//   console.log(`Fetching Albums : ${Date.now()}`);
//   await new Promise((resolve) => setTimeout(resolve, 5000 ));
//   const response = await fetch(`${API_URL}albums/${id}`);
//   return response.json();  
// }

// async function getPhotos(albumId:string) {
//   console.log(`Fetching Photos : ${Date.now()}`);
//   await new Promise((resolve) => setTimeout(resolve, 5000 ));
//   const response = await fetch(`${API_URL}photos?albumId=${albumId}`);
//   return response.json();  
// }

export default async function AlbumDetail({
  params: {id},
}:{params : {id: string}}) {
  // 위에 전달 받은 id를 이용하여 해당 id에 속하는 Album과 photos를 출력하세요... 
  // const start = Date.now();
  // const album = await getAlbum(id);
  // const photos = await getPhotos(id);

  // 병렬 요청(Parallel Request) -> Promise.all()
  // Promise.all()
  // const [album, photos] = await Promise.all([getAlbum(id), getPhotos(id)]);
  // const end = Date.now()
  // console.log(`총 소요 시간 ${end - start}`);


  return(
    <div>
      {/* <h1>Album Title : {album.title}</h1>
      <div>
        <h3>Photos : </h3>
        {JSON.stringify(photos)}
      </div> */}
      <h2>Album detail page</h2>
      <Suspense fallback={<h1>Loading Album info.... </h1>}>
        <AlbumInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading Photos.... </h1>} >
        <AlbumPhotos id={id} />
      </Suspense>

    </div>
  )

}