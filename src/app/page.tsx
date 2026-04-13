import { getVideos } from "@/lib/youtube";

export default async function Home() {
  const videos = await getVideos();
  console.log(videos);
  return <div>Hello World</div>;
}
