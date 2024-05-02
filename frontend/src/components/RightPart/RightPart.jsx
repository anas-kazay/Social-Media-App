import { Brightness4, MoreHoriz, Search } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const RightPart = () => {
  const handleChangeTheme = () => {
    console.log("handle change theme");
  };
  return (
    <div className="py-5 sticky top">
      <div className="relative flex items-center">
        <input
          type="text"
          className="py-3 rounded-full text-gray-500 w-full pl-12"
        />
        <div className="absolute top-0 left-0 pl-3 pt-3">
          <Search className="text-gray-500" />
        </div>
        <Brightness4
          className="ml-3 cursor-pointer"
          onClick={handleChangeTheme}
        />
      </div>
      <section className="my-5">
        <h1 className="text-xl font-bold">Get Verified</h1>
        <h1 className="font-bold my-2">Subscribe to unlock new Feature</h1>
        <Button
          variant="contained"
          sx={{ padding: "10px", paddingX: "20px", borderRadius: "25px" }}
        >
          Get Verified
        </Button>
      </section>

      <section className="mt-7 space-y-5">
        <h1 className="font-bold text-xl py-1">What's happening</h1>
        <div>
          <p className="text-sm">Entertainment . Trending</p>
          <p className="font-bold">Morroco vs France</p>
        </div>
        {[1, 1, 1].map((item) => (
          <div className="flex justify-between w-full">
            <div>
              <p>Entairenment . Trending</p>
              <p className="font-bold">#SpiderMan</p>
              <p>34.4k Posts</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default RightPart;
