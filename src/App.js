import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'



function App() {
  return (
    <div>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
