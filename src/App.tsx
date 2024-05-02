import "./App.css";
import PostList from "./components/features/Posts/components/PostList";
import { usePostList } from "./services/hooks/Posts/usePostList";
import { useQueryInterface } from "./services/hooks/QueryInterfaces/useQueryInterface";

import type { Post } from "./components/features/Posts/types/postTypes";

function App() {
  const { data, isLoading, isError } = useQueryInterface({
    key: "posts",
    fn: usePostList,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>We have some error fetching data...</div>;
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-4xl text-red-600 mb-3">
          Example of React Query plus Axios
        </h1>
        <PostList posts={data as Post[]} />
      </header>
    </div>
  );
}

export default App;
