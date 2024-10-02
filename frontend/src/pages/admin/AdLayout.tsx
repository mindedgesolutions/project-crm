import { AdPageWrapper, Footer, Sidebar, Topnav } from "@/components";
import { Outlet } from "react-router-dom";

const AdLayout = () => {
  return (
    <>
      <Sidebar />
      <AdPageWrapper>
        <Topnav />
        <Outlet />
        <Footer />
      </AdPageWrapper>
    </>
  );
};
export default AdLayout;
