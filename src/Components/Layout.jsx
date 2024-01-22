import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Progress } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense callback={<Progress mb="50px" size="xs" isIndeterminate />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default Layout;
