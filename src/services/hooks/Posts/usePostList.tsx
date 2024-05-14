import { useClientConfiguration } from "../useClientConfiguration";

export const usePostList = async () => {
  const { client } = useClientConfiguration();
  return await client.get(`/posts`);
}
