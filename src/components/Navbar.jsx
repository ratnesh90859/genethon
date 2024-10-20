import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

const Navbar = ({ className }) => {
  const [active, setActive] = useState(null);

  return (
    <div className={cn("fixed top-2 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      {/* Navbar at the top with circular corners */}
      <nav
        onMouseLeave={() => setActive(null)}
        className="relative bg-white dark:bg-black shadow-input flex justify-center space-x-4 px-8 py-6 rounded-full"
      >
        <div onMouseEnter={() => setActive('Dashboard')} className="relative">
          <Link to="/" className="cursor-pointer text-black dark:text-white hover:opacity-90">Dashboard</Link>
        </div>

        <div onMouseEnter={() => setActive('Call Log')} className="relative">
          <Link to="/call-log" className="cursor-pointer text-black dark:text-white hover:opacity-90">Call Log</Link>
        </div>

        <div onMouseEnter={() => setActive('Call Playback')} className="relative">
          <Link to="/call-playback" className="cursor-pointer text-black dark:text-white hover:opacity-90">Call Playback</Link>
        </div>

        <div onMouseEnter={() => setActive('Export')} className="relative">
          <Link to="/export" className="cursor-pointer text-black dark:text-white hover:opacity-90">Export</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
