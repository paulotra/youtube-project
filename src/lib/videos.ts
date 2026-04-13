import { Video, YouTubeResponse } from "@/types/videos";

export async function getVideos(): Promise<Video[]> {
  const params = new URLSearchParams({
    part: "snippet,contentDetails,statistics",
    chart: "mostPopular",
    maxResults: "12",
  });
  const response = await fetch(`${process.env.BASE_URL}/api/videos?${params}`);
  const data: YouTubeResponse = await response.json();
  return data?.items;
}

export async function getRelatedVideos(categoryId: string): Promise<Video[]> {
  const params = new URLSearchParams({
    part: "snippet,contentDetails,statistics",
    chart: "mostPopular",
    maxResults: "12",
    categoryId,
  });
  const response = await fetch(`${process.env.BASE_URL}/api/videos?${params}`);
  const data: YouTubeResponse = await response.json();
  return data?.items;
}

export async function getVideoById(id: string): Promise<Video | null> {
  const response = await fetch(`${process.env.BASE_URL}/api/videos/${id}`);
  const data: YouTubeResponse = await response.json();
  return data?.items[0] ?? null;
}
