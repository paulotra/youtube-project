import { NextResponse } from "next/server";
import axios from "axios";

const key = process.env.YOUTUBE_API_KEY;
const baseURL = "https://www.googleapis.com/youtube/v3";

if (!key) {
  throw new Error("YOUTUBE_API_KEY environment variable is not set");
}

const youtube = axios.create({
  baseURL,
  params: {
    key,
  },
});

export async function GET() {
  try {
    const response = await youtube.get("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        maxResults: 12,
      },
    });
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching videos:", error);
    return NextResponse.json(
      { error: "Failed to fetch videos" },
      { status: 500 },
    );
  }
}
