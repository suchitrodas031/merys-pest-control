import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

function MainLayout() {
  return (
    <>
      <TopBar />
      <Navbar />

      <Outlet />

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default MainLayout;