import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="font-poppins bg-teal justify-center items-center   flex flex-col w-screen h-screen">
      <Outlet />
    </div>
  );
}

export default App;
