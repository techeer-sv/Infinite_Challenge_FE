import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { getClient } from "./queryClient";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";
import { Suspense } from "react";
import Loading from "./common/Loading";

function App() {
  return (
    <QueryClientProvider client={getClient}>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
