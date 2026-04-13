export interface Video {
  id: string;
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      default: { url: string };
      medium: { url: string };
      high: { url: string };
    };
    channelTitle: string;
    publishedAt: string;
  };
  contentDetails: {
    duration: string;
  };
  statistics: {
    viewCount: string;
    likeCount: string;
    commentCount: string;
  };
}

interface YouTubeResponse {
  items: Video[];
}

export async function getVideos(): Promise<Video[]> {
  const response = await fetch(`${process.env.BASE_URL}/api/videos`);
  const data: YouTubeResponse = await response.json();
  return data.items;
}
