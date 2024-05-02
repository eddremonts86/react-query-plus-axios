import type { Post } from "../types/postTypes";
import PostItem from "./PostItem";

interface PostListProps {
  posts: Post[];
}
const PostList = ({ posts }: PostListProps) => {
  return (
    <div>
      <h2 className="text-4xl">My Posts</h2>
      {posts?.map((post: Post) => (
        <PostItem
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
};

export default PostList;
