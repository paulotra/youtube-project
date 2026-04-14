import VideoGrid from '@/components/VideoGrid'
import { getVideos } from '@/lib/videos'

export default async function Home() {
  const videos = await getVideos()
  return (
    <div className="p-10">
      <h1 className="text-4xl mb-10 text-center">
        Most Popular YouTube Videos
      </h1>
      <VideoGrid
        initialVideos={videos.items}
        initialNextPageToken={videos.nextPageToken}
      />
    </div>
  )
}
