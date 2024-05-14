import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

interface UseQueryInterfaceProps {
  key: string;
  fn: () => Promise<AxiosResponse<unknown, unknown>>;
}

const useQueryInterface = ({ key, fn }: UseQueryInterfaceProps) => {
  const response = useQuery({
    queryKey: [key],
    queryFn: async () => {
      const { data } = await fn();
      return data;
    },
  });
  return response;
};
export { useQueryInterface };
