import Link from "next/link";
import { getVideoById } from "@/lib/youtube";
import VideoPlayer from "@/components/VideoPlayer";

export default async function VideoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const video = await getVideoById(id);
  console.log(video);
  return (
    <div className="p-10 flex flex-col">
      <Link href="/" className="mb-6">
        Go back to home
      </Link>
      <div className="flex gap-6">
        {id ? <VideoPlayer id={id} /> : <p>Video not found</p>}
        <div className="w-md">
          <h2 className="text-2xl">Related Video</h2>
        </div>
      </div>
    </div>
  );
}
