import type { Post } from "../types/postTypes";
interface PostItemProps {
  post: Post;
}
const PostItem = ({ post }: PostItemProps) => {
  return (
    <div
      key={post.id}
      className="my-2 p-4 border border-gray-200 rounded-md shadow-md"
    >
      <h3 className="text-xl mb-3">{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};
export default PostItem;
