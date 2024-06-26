import Link from "next/link";
import { API_URL } from "../(albums)/albums-ssr/page";

async function getPhotos(id:string) {
  console.log(`Fetching Photos : ${Date.now()}`);
  // await new Promise((resolve) => setTimeout(resolve, 5000 ));
  // const response = await fetch(`${API_URL}photos?albumId=${id}`);
  // return response.json();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  throw new Error("Something else... break... !");
}

export default async function AlbumPhotos({id}:{id: string}) {

  const photos = await getPhotos(id);  

  return (
    <div>
      <h3>Album Photos : </h3>
      {/* {photos.map((photo, index) => ( // () 묶인 부분이 return... 
          <li key={photo.id}>
            <b style={{marginRight:5}}>{index+1}</b><Link href={photo.url}>{photo.title}</Link>
          </li>
        ))} */}
    </div>
  );
  
}

