import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="font-poppins w-full h-screen relative">
      <Outlet />
    </div>
  );
}

export default App;
