import { useQuery } from "@tanstack/react-query";

import MealDetail from "./Mealdetail";
import { fetchRandomMeal } from "../util/https";

export default function RandomMeal() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["randomMeal"],
    queryFn: () => fetchRandomMeal(),
  });

  return <MealDetail meal={data} isLoading={isLoading} isError={isError} />;
}
