import { Button } from "@/components/ui/button";
import React from "react";

const Header = () => {
  return (
    <div className="h-[80px] w-full bg-white border-b border-gray-100">
      <div className="container flex items-center justify-between h-full">
        <div className="">Akompta</div>
        <div className="">
          <Button>Se connecter</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
