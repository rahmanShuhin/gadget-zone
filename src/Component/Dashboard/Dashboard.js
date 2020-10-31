import React, { useContext } from "react";
import SideBar from "../SideBar/SideBar";
import { UserContext } from "../Sign_In_Context";
import "./Dashboard.css";
import EmailIcon from "@material-ui/icons/Email";
import PersonIcon from "@material-ui/icons/Person";
const Dashboard = () => {
  const [user, setUser] = useContext(UserContext);

  return (
    <div className="profile">
      <SideBar></SideBar>
      <div className="dashboard">
        <h2>Hello {user?.displayName}</h2>
        <div className="dashboard__body">
          <div className="dashboard__details">
            <h3>Personal Details</h3>
            <p>
              <PersonIcon></PersonIcon>&nbsp;{user?.displayName}
            </p>
            <p>
              <EmailIcon></EmailIcon>&nbsp;{user?.email}
            </p>
          </div>
          <div className="dashboard__total">
            <h3>Total Order</h3>
            <p>0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
