import { Outlet } from "react-router-dom";

export default function AuthPage() {
  return (
    <div>
      <h2 style={{ textAlign: "center", fontSize: "30px", fontWeight: "bold" }}>
        Welcome to Auth
      </h2>
      <Outlet />
    </div>
  );
}
