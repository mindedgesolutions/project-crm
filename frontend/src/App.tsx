import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as Crm from "@/pages";

const router = createBrowserRouter([
  // Super admin routes starts ------
  { path: `/admin/login`, element: <Crm.AdLogin /> },
  { path: `/admin/forgot-password`, element: <Crm.AdForgotPassword /> },
  { path: `/admin/reset-password`, element: <Crm.AdResetPassword /> },
  {
    path: `/admin`,
    element: <Crm.AdLayout />,
    children: [{ index: true, element: <Crm.AdDashboard /> }],
  },
  // Super admin routes ends ------
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
