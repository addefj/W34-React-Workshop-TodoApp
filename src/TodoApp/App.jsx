import React from "react";
import SidebarVertical from './SidebarVertical';
import MainContent from "./MainContent";

const App = () => {

  return (
    <div className="bg-light">
      <div className="container-fluid">
        <div className="row">
          <SidebarVertical />
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default App;
