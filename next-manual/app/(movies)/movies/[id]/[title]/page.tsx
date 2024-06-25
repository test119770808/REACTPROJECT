export default function MovieTitle({
  params: {id,title}
}: {
  params: {id: string, title: string};
}) {
  
  return (
    <div>
      <h1>Movie number: {id}</h1>
      <h1>Movie Title: {title}</h1>
    </div>
  );
}