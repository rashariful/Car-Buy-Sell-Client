
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router";
function App() {

  return (
    <div className="bg-[#F0F2F5]">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
