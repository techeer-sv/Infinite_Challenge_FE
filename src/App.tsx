import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { getClient } from "./queryClient";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";

function App() {
  return (
    <QueryClientProvider client={getClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
