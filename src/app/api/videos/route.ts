import { NextResponse } from "next/server";
import axios from "@/lib/axios";

export async function GET(_request: Request) {
  const { searchParams } = new URL(_request.url);

  try {
    const response = await axios.get("/videos", {
      params: {
        part: searchParams.get("part"),
        chart: searchParams.get("chart"),
        maxResults: searchParams.get("maxResults"),
        ...(searchParams.get("categoryId") && {
          videoCategoryId: searchParams.get("categoryId"),
        }),
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
