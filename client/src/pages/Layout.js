import React from "react";
import Avetar from "../components/Avetar";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <div>
      <div className="hedder"><Navbar /></div>
      <div className="body">

      </div>
      <div className="lower-container row">
      <a href="/addtext"><h6 className="text-1 col-4">Add</h6></a>
      <a href="/addtext"><h6 className="text-1 col-4">read</h6></a>
      <a href="/addtext"><h6 className="text-1 col-4">edit</h6></a> 
      </div>
      <div className="footer">this is footer</div>
    </div>
  );
}

export default Layout;
