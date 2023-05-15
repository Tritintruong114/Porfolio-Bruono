import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="text-white font-poppins w-full h-screen">
      <Outlet />
    </div>
  );
}

export default App;
