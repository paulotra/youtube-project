import { Video } from "@/types/video";
import Link from "next/link";

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <li className="w-sm" key={video.id}>
      <Link href={`/video/${video.id}`}>
        <img
          className="w-full max-h-48 object-center object-cover mb-4"
          src={video?.snippet?.thumbnails?.medium?.url}
          alt={video?.snippet?.title}
        />
        <h2>{video?.snippet?.title}</h2>
      </Link>
    </li>
  );
}
