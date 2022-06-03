import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import OtherUserProfile from "./components/OtherUserProfile";
import PostFeed from "./components/PostFeed";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Login/> } />
          <Route path="/signup" element={<SignUp/> } />
          <Route path="/profile" element={<Profile/> } />
          <Route path="/profile/:userid" element={<OtherUserProfile/> } />
          <Route path="/feed" element={<PostFeed/> } />
          <Route path="/createpost" element={<CreatePost/> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
