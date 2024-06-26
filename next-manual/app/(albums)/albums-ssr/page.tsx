export const metadata = {
  title: "albums-ssr",
}

const URL = "https://jsonplaceholder.typicode.com/";

// 통신 처리하는 함수... 
async function getAlbums() {
  // 지연 발생
  
  const response = await fetch(URL+'albums');
  const json = await response.json();
  console.log("getAlbums");
  return json;
}

async function getPhotos() {
  
  const response = await fetch(URL+'photos');
  const json = await response.json();
  console.log("getPhotos");
  return json;
}

export default async function Page2() {
  await new Promise((resolve)=> setTimeout(resolve, 5000));
  const albums = await getAlbums();
  await new Promise((resolve)=> setTimeout(resolve, 5000));
  const photos = await getPhotos();
  return(
    <div>
      <h2>Albums</h2>
      {JSON.stringify(albums)}
      <hr />
      <h2>Photos</h2>
      {JSON.stringify(photos)}
    </div>
  );
}