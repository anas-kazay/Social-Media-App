import { KeyboardBackspace } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";
import TweetCard from "../HomeSection/TweetCard";
import { Divider } from "@mui/material";

const PostDetails = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  return (
    <React.Fragment>
      <section
        className={` bg-white z-50 flex items-center sticky top-0 bg-opacity-95`}
      >
        <KeyboardBackspace className="cursor-pointer" onClick={handleBack} />
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">Post</h1>
      </section>
      <section>
        <TweetCard />
        <Divider sx={{ margin: "2rem 0rem" }} />
      </section>
      <section>
        {[1, 1, 1, 1].map((item) => (
          <TweetCard />
        ))}
      </section>
    </React.Fragment>
  );
};

export default PostDetails;
