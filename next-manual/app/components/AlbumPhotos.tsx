import { API_URL } from "../(albums)/albums-ssr/page";

async function getPhotos(id:string) {
  console.log(`Fetching Photos : ${Date.now()}`);
  // await new Promise((resolve) => setTimeout(resolve, 5000 ));
  const response = await fetch(`${API_URL}photos?albumId=${id}`);
  return response.json();  
}

export default async function AlbumPhotos({id}:{id: string}) {

  const photos = await getPhotos(id);  

  return (
    <div>
      <h3>Album Photos : </h3>
      {JSON.stringify(photos)}
    </div>
  );
  
}

