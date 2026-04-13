import { Video } from "@/types/video";

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <li className="w-sm" key={video.id}>
      {/* <p>{video.snippet.description}</p> */}
      <img
        className="w-full max-h-48 object-center object-cover mb-4"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <h2>{video.snippet.title}</h2>
    </li>
  );
}
