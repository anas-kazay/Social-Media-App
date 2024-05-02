import {
  Business,
  BusinessCenter,
  CalendarMonth,
  CalendarMonthTwoTone,
  KeyboardBackspace,
  LocationOn,
  Verified,
} from "@mui/icons-material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Avatar, Box, Button, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TweetCard from "../HomeSection/TweetCard";
import ProfileModal from "./ProfileModal";

const Profile = () => {
  const [tabValue, setTabValue] = useState("1");
  const navigate = useNavigate();
  const [openProfileModal, setOpenProfileModal] = useState(false);
  const handleOpenProfileModal = () => setOpenProfileModal(true);
  const handleClose = () => setOpenProfileModal(false);

  const handleBack = () => navigate(-1);

  const handleFollowUser = () => {
    console.log("follow user");
  };
  const handleTabChange = (e, newValue) => {
    setTabValue(newValue);
    if (newValue === 4) {
      console.log("likes twit");
    } else if (newValue === 1) {
      console.log("users twit");
    }
  };
  return (
    <div>
      <section
        className={`bg-white z-50 flex items-center sticky top-0 bg-opacity-95`}
      >
        <KeyboardBackspace className="cursor-pointer" onClick={handleBack} />
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">Code with Me</h1>
      </section>
      <section>
        <img
          className="w-[100%] h-[15rem] object-cover"
          src="https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </section>
      <section className="pl-6 transform -translate-y-9">
        <div className="flex justify-between items-center mt-5 h-[5rem]">
          <Avatar
            alt="profile"
            src=""
            style={{
              width: "10rem",
              height: "10rem",
              border: "4px solid white",
            }}
          />
          {true ? (
            <Button
              onClick={handleOpenProfileModal}
              className="rounded-full"
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              onClick={handleFollowUser}
              className="rounded-full"
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              {true ? "Follow" : "Unfollow"}
            </Button>
          )}
        </div>
        <div>
          <div className="flex items-center mt-12">
            <h1 className="font-bold text-lg">Code With Me</h1>
            {true && <Verified className="text-blue-400" />}
          </div>
          <h1 className="text-gray-500">@anaskazay</h1>
        </div>

        <div className="mt-2 space-y-3">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <div className="py-1 flex space-x-5 flex-wrap">
            <div className="flex items-center text-gray-500">
              <BusinessCenter />
              <p className="ml-2">Education</p>
            </div>

            <div className="flex items-center text-gray-500">
              <LocationOn />
              <p className="ml-2">Morroco</p>
            </div>
            <div className="flex items-center text-gray-500">
              <CalendarMonth />
              <p className="ml-2">Joined on April 2010</p>
            </div>
            <div className="flex items-center space-x-5">
              <div className="flex items-center space-x-1 font-semibold">
                <span>133</span>
                <span className="text-gray-500">Following</span>
              </div>
              <div className="flex items-center space-x-1 font-semibold">
                <span>333</span>
                <span className="text-gray-500">Followers</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-2">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={tabValue}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleTabChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Tweets" value="1" />
                <Tab label="Replies" value="2" />
                <Tab label="Media" value="3" />
                <Tab label="Likes" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">
              {[1, 1, 1, 1].map((item) => (
                <TweetCard />
              ))}{" "}
            </TabPanel>
            <TabPanel value="2">users replies</TabPanel>
            <TabPanel value="3">Media</TabPanel>
            <TabPanel value="3">Likes</TabPanel>
          </TabContext>
        </Box>
      </section>

      <section>
        <ProfileModal handleClose={handleClose} open={openProfileModal} />
      </section>
    </div>
  );
};

export default Profile;
