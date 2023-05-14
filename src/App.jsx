import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="text-red-900 font-poppins mx-24">
      <Outlet />
    </div>
  );
}

export default App;
