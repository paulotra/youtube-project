import VideoCard from "@/components/VideoCard";
import { getVideos } from "@/lib/videos";

export default async function Home() {
  const videos = await getVideos();
  return (
    <div className="p-10">
      <h1 className="text-4xl mb-10 text-center">
        Most Popular YouTube Videos
      </h1>
      <ul className="flex flex-wrap gap-4 justify-center cursor-pointer">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </ul>
    </div>
  );
}
