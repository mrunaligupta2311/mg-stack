 import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-['Plus_Jakarta_Sans'] text-neutral-900 antialiased">

      <Navbar />

      <main className=" pt-[110px]">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
};

export default MainLayout;