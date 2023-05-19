import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="font-poppins relative no-scrollbar overflow-scroll bg-black flex items-center flex-col w-full h-screen">
      <Outlet />
    </div>
  );
}

export default App;
