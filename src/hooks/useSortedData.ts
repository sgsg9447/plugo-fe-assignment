import { useMemo } from "react";

export const useSortedData = (data: ProductValues[], sortBy: SortByType) => {
  return useMemo(() => {
    let sortedData = [...data]; // Avoid mutating the original data

    switch (sortBy) {
      case "highestPrice":
        sortedData.sort((a, b) => b.price - a.price);
        break;
      case "lowestPrice":
        sortedData.sort((a, b) => a.price - b.price);
        break;
      case "newest":
        sortedData.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      case "oldest":
        sortedData.sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
        break;
      default:
        break;
    }

    return sortedData;
  }, [data, sortBy]);
};
