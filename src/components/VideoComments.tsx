import { getComments } from "@/lib/comments";

export default async function VideoComments({ id }: { id: string }) {
  const data = await getComments(id);
  return (
    <div>
      <h2 className="text-3xl">Comments</h2>
      <ul>
        {data.map((comment) => (
          <li
            key={comment.id}
            className="flex gap-4 my-4 bg-neutral-900 p-4 rounded"
          >
            <img
              src={
                comment.snippet.topLevelComment.snippet.authorProfileImageUrl
              }
              alt={comment.snippet.topLevelComment.snippet.authorDisplayName}
              className="w-10 h-10 rounded-full"
            />
            <p>{comment.snippet.topLevelComment.snippet.textDisplay}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
