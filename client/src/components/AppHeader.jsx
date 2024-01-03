import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function AppHeader() {
  const context = useContext(UserContext);
  console.log(context);
  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <h2>สวัสดีคุณ ({context.username})</h2>
    </div>
  );
}

export default AppHeader;
