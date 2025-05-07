import React from "react";
import { X, Menu } from "lucide-react";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <nav className="flex font-bold text-2xl justify-center border py-2">
        <button onClick = {() => setSidebarOpen(!sidebarOpen)} className = "text-xl md:hidden">
          {sidebarOpen? <X size={28} /> : <Menu size={28}/>}
        </button>
        <h1 className="mx-auto md:mx-0">Finance Tracker</h1>
        Finance tracker
        <div className="hidden md:flex gap-4 text-base font-normal">
          <a href="#" className="">Dashboard</a>
          <a href="#" className="">Logout</a>
        </div>
      </nav>

      {/* For mobile sidebar */}
      <div className={}
    </>
  );
};

export default Navbar;
