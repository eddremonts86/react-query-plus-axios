import axios from "axios";
const base = "https://jsonplaceholder.typicode.com/";

const client = axios.create({
  baseURL: base,
});

const useClientConfiguration = () => {
    return {
      baseURL: base,
      client,
    };
  };

export { useClientConfiguration };
