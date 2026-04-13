import { Comment, CommentsResponse } from "@/types/comments";

export async function getComments(id: string): Promise<Comment[]> {
  const response = await fetch(
    `${process.env.BASE_URL}/api/videos/${id}/comments`,
  );
  const data: CommentsResponse = await response.json();
  return data.items;
}
