import { Outlet } from "react-router-dom";
import Nav from "../Nav";
import Footer from "../Footer";


const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow mt-[1rem]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default MainLayout;
