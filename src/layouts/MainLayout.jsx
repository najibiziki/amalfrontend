import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import DonationModal from "../components/common/DonationModal";

const MainLayout = () => {
  const [isDonationOpen, setIsDonationOpen] = useState(false);

  const openDonationModal = () => {
    setIsDonationOpen(true);
  };

  const closeDonationModal = () => {
    setIsDonationOpen(false);
  };

  return (
    <>
      <Navbar onSupport={openDonationModal} />

      <main>
        <Outlet context={{ onSupport: openDonationModal }} />
      </main>

      <Footer onSupport={openDonationModal} />

      <DonationModal isOpen={isDonationOpen} onClose={closeDonationModal} />
    </>
  );
};

export default MainLayout;
