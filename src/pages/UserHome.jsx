import React from "react";
import UserNavbar from "../components/user/userNavbar";
import Featured from "../components/user/featured";
import GigCard from "../components/user/gigCard";

function UserHome() {
  return (
    <section>
      <div className="userHome">
        <UserNavbar />
        <Featured />
        <GigCard />
      </div>
    </section>
  );
}

export default UserHome;
