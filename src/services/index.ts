import axios from "axios";
import { BASE_URL } from "@/constants/url";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const useGetItems = () => {
  const { data, isLoading, error } = useQuery(["items"], async () => {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  });
  return { data: data ?? [], isLoading, error };
};
export const useGetItem = (id: string) => {
  return useQuery(["item", id], async () => {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
  });
};

export const useCreateItem = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (item: ProductValues) => {
      const response = await axios.put(`${BASE_URL}/products`, item);
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("items");
      },
    }
  );
};

export const useDeleteItem = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (id: string) => {
      const response = await axios.delete(`${BASE_URL}/products/${id}`);
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("items");
      },
    }
  );
};
