import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="font-poppins justify-center items-center   flex flex-col w-screen h-full">
      <Outlet />
    </div>
  );
}

export default App;
