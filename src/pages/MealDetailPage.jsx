import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchMealDetail } from "../util/https";
import MealDetail from "../components/Mealdetail";

export default function MealDetailPage() {
  const { mealId } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["meal", mealId],
    queryFn: () => fetchMealDetail(mealId),
  });

  return <MealDetail meal={data} isLoading={isLoading} isError={isError} />;
}
