import { createBrowserRouter } from "react-router"; 
import MainLayout from "../mainLayout/MainLayout";
import Home from "../pages/Home";
import VisaServices from "../components/VisaServices";
import MyApplication from "../components/MyApplication";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,        
        element: <Home />   
      },
      {
        path:"visaService",
        element:<VisaServices></VisaServices>
      },
      {
        path:"my-application",
        element:<MyApplication></MyApplication>
      }
    ]
  }
]);
