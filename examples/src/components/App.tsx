import { createBrowserRouter, RouterProvider, redirect } from "react-router-dom";

import { ThemeProvider } from "@components/ThemeProvider"
import HomePage from "@pages/HomePage";
import formElements, { FormElement } from "./forms";

/* Routing configuration */
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/forms",
    children: formElements.map((el: FormElement) => {
      return {
        path: el.id,
        element: el.element,
      }
    }),
  },
  {
    path: "*",
    loader: async () => redirect('/'),
  },
]);
 
function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
 
export default App