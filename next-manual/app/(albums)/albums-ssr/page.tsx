export const metadata = {
  title: "albums-ssr",
}

export const API_URL = "https://jsonplaceholder.typicode.com/";  //const 내보내기... 

// 통신 처리하는 함수... 
async function getAlbums() {
  // 지연 발생
  await new Promise((resolve)=> setTimeout(resolve, 5000));
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
  // const photos = await getPhotos();
  return(
    <div>
      <h2>Albums</h2>
      {JSON.stringify(albums)}
      <hr />
      {/* <h2>Photos</h2>
      {JSON.stringify(photos)} */}
    </div>
  );
}