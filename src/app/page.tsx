import { getVideos } from "@/lib/youtube";

export default async function Home() {
  const videos = await getVideos();
  return (
    <div className="p-10">
      <h1 className="text-4xl mb-10 text-center">
        Most Popular YouTube Videos
      </h1>
      <ul className="flex flex-wrap gap-4 justify-center cursor-pointer">
        {videos.map((video) => (
          <li className="w-sm" key={video.id}>
            {/* <p>{video.snippet.description}</p> */}
            <img
              className="w-full max-h-48 object-center object-cover mb-4"
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
            />
            <h2>{video.snippet.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
