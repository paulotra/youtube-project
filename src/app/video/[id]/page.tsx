import Link from "next/link";
import { getVideoById } from "@/lib/videos";
import VideoPlayer from "@/components/VideoPlayer";
import VideoComments from "@/components/VideoComments";

export default async function VideoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const video = await getVideoById(id);
  return (
    <div className="p-10 flex flex-col">
      <Link href="/" className="mb-6">
        Go back to home
      </Link>
      <div className="flex gap-6">
        {id ? (
          <div className="w-full flex flex-col gap-6">
            <h1 className="text-2xl">{video.snippet.title}</h1>
            <VideoPlayer id={id} />
            <VideoComments id={id} />
          </div>
        ) : (
          <p>Video not found</p>
        )}
        <div className="w-md sticky top-[20px] self-start">
          <h2 className="text-2xl">Related Video</h2>
        </div>
      </div>
    </div>
  );
}
