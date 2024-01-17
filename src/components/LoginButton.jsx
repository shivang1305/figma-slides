import React, { useState } from "react";
import PPTemplateDailog from "./PPTTemplateDailog";

const LoginButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="h-screen flex justify-center items-center">
      {isDialogOpen && (
        <PPTemplateDailog
          isOpen={isDialogOpen}
          onClose={() => {
            setIsDialogOpen(false);
          }}
        />
      )}
      <button
        className="border border-black rounded-lg text-2xl bg-gray-300 p-2 m-2"
        onClick={() => setIsDialogOpen(true)}
      >
        Sign in with google
      </button>
    </div>
  );
};

export default LoginButton;
