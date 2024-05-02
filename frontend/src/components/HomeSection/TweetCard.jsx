import {
  BarChart,
  ChatBubbleOutline,
  Favorite,
  FavoriteOutlined,
  FileUpload,
  MoreHoriz,
  Repeat,
} from "@mui/icons-material";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Verified } from "@mui/icons-material";
import ReplyModal from "./ReplyModal";

const TweetCard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [openReplyModal, setOpenReplyModal] = React.useState(false);
  const handleOpenReplyModal = () => setOpenReplyModal(true);
  const handleCloseReplyModal = () => setOpenReplyModal(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeletePost = () => {
    console.log("delete post");
    handleClose();
  };

  const handleCreateRepost = () => {
    console.log("handle create repost");
  };

  const handleLikePost = () => {
    console.log("handle like post");
  };

  const navigate = useNavigate();
  return (
    <React.Fragment>
      {/* <div className="flex items-center font-semibold text-gray-700 py-2">
        <Repeat/>
        <p>You Repost</p>
      </div> */}
      <div className="flex space-x-5">
        <Avatar
          onClick={() => navigate(`/profile/${6}`)}
          alt="username"
          src=""
          className="cursor-pointer"
        />
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex cursor-pointer items-center space-x-2">
              <span className="font-semibold">Code With Anas</span>
              <span className="text-gray-600">@anaskazay . 2m</span>
              <Verified className="text-blue-400" />
            </div>
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreHoriz />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleDeletePost}>Delete</MenuItem>
                <MenuItem onClick={handleDeletePost}>Edit</MenuItem>
              </Menu>
            </div>
          </div>
          <div className="mt-2">
            <div
              className="cursor-pointer"
              onClick={() => navigate(`/post/${3}`)}
            >
              <p className="mb-2 p-0">full stack web app</p>
              <img
                className="w-[29rem] border border-gray-400 p-5 rounded-md"
                src="https://images.pexels.com/photos/12266761/pexels-photo-12266761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </div>
            <div className="py-5 flex flex-wrap justify-between items-center">
              <div className="space-x-3 flex items-center text-gray-600">
                <ChatBubbleOutline
                  className="cursor-pointer"
                  onClick={handleOpenReplyModal}
                />
                <p>43</p>
              </div>
              <div
                className={`${
                  true ? "text-pink-600" : "text-gray-600"
                } space-x-3 flex items-center`}
              >
                <Repeat
                  onClick={handleCreateRepost}
                  className="cursor-pointer"
                />
                <p>54</p>
              </div>
              <div
                className={`${
                  true ? "text-pink-600" : "text-gray-600"
                } space-x-3 flex items-center`}
              >
                {true ? (
                  <Favorite
                    onClick={handleLikePost}
                    className="cursor-pointer"
                  />
                ) : (
                  <FavoriteOutlined
                    onClick={handleLikePost}
                    className="cursor-pointer"
                  />
                )}
                <p>54</p>
              </div>
              <div className="space-x-3 flex items-center text-gray-600">
                <BarChart
                  className="cursor-pointer"
                  onClick={handleOpenReplyModal}
                />
                <p>430</p>
              </div>
              <div className="space-x-3 flex items-center text-gray-600">
                <FileUpload
                  className="cursor-pointer"
                  onClick={handleOpenReplyModal}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <ReplyModal open={openReplyModal} handleClose={handleCloseReplyModal} />
      </section>
    </React.Fragment>
  );
};

export default TweetCard;
