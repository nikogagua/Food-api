import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/Root";
import MealDetailPage from "./pages/MealDetailPage";
import RandomMealPage from "./pages/RandomMealPage";
import AuthPage from "./pages/AuthPage";
import Signup from "./pages/SignUp";
import Login from "./pages/LogIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ":mealId", element: <MealDetailPage /> },
      { path: "random", element: <RandomMealPage /> },
      {
        path: "auth",
        element: <AuthPage />,
        children: [
          { path: "login", element: <Login /> },
          { path: "signup", element: <Signup /> },
        ],
      },
    ],
  },
]);

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
