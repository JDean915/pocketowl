import React from "react";

import AboutUsCard1 from "../partials/aboutus/AboutUsCard1";
import AboutUsCard2 from "../partials/aboutus/AboutUsCard2";
import Disclaimer from "../components/Disclaimer";

function Aboutus() {
  return (

    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      {/* Cards */}
      <div className="grid grid-cols-12 gap-6">
        <Disclaimer />
        <AboutUsCard1 />
        <AboutUsCard2 />
      </div>
    </div>
  );
}

export default Aboutus;