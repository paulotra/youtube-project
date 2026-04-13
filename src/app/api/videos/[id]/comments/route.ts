import { NextResponse } from "next/server";
import axios from "@/lib/axios";

type VideoParams = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: Request, { params }: VideoParams) {
  const { id } = await params;
  try {
    const response = await axios.get("/commentThreads", {
      params: {
        part: "snippet",
        videoId: id,
        maxResults: 20,
        order: "relevance",
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
