import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="font-poppins overflow-scroll justify-center items-center bg-background   flex flex-col w-screen h-screen">
      <Outlet />
    </div>
  );
}

export default App;
