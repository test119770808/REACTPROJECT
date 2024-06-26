import Link from "next/link";

export const metadata = {
  title: "albums-ssr",
}

export const API_URL = "https://jsonplaceholder.typicode.com/";  //const 내보내기... 

// 통신 처리하는 함수... 
async function getAlbums() {
  // 지연 발생
  // await new Promise((resolve)=> setTimeout(resolve, 5000));
  const response = await fetch(API_URL+'albums');
  const json = await response.json();
  // console.log("getAlbums");
  return json;
}

// async function getPhotos() {
//   await new Promise((resolve)=> setTimeout(resolve, 5000));
//   const response = await fetch(URL+'photos');
//   const json = await response.json();
//   console.log("getPhotos");
//   return json;
// }

export default async function Page2() {
  const albums = await getAlbums();
  const albums20 = albums.slice(0, 20);  // 100 -> 20
  // console.log(albums20); 
  // const photos = await getPhotos();
  return(
    <div>
      <h2>Albums</h2>
      <ul>
        {albums20.map((album, index) => ( // () 묶인 부분이 return... 
          <li key={album.id}>
            <b style={{marginRight:5}}>{index+1}</b><Link href={"/albums-ssr/"+album.id}>{album.title}</Link>
          </li>
        ))}
      </ul>
      <hr />
      {/* <h2>Photos</h2>
      {JSON.stringify(photos)} */}
    </div>
  );
}