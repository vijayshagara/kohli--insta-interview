import React, { useState } from "react";
import { UserAddOutlined } from "@ant-design/icons";
import Button from "@mui/material/Button";
import "./Home.css";
import { useNavigate,NavLink } from "react-router-dom";

const Dashboard = ({ postItem }) => {
  const navigate = useNavigate()
  //console.log(postItem);
  const [post, setpost] = useState(12);
  const [followers, setFollowers] = useState(9);
  const [following, setFollowing] = useState(15);
  return (
    <>
      <div className="hole">
        <div className="left">
          <img
            className="image"
            src="https://tse3.mm.bing.net/th?id=OIP.iHjTbVWNRvlRhovhCetkagHaHa&pid=Api&P=0"
            alt=""
          />
        </div>
        <div className="right">
          <span style={{ fontSize: "40px" }}>Virat.Kohli</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button
            variant="outlined"
            onClick={() => setFollowers(followers + 1)}
          >
            follow
          </Button>
          &nbsp;&nbsp;&nbsp;
          
            <NavLink to="/message"><Button>message</Button></NavLink>
          
          &nbsp;&nbsp;&nbsp;
          <Button class="btn btn-primary" type="submit">
            <UserAddOutlined />
          </Button>
          &nbsp;&nbsp;&nbsp;
          <span>
            <strong>...</strong>
          </span>
          &nbsp;
          <br />
          <br />
          <span>
            <strong>{post}</strong> post
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>
            <strong>{followers}</strong> followers
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>
            <strong>{following}</strong> following
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <br />
          <br />
          <strong>Virat Kohli</strong> <br />
          <span>Carpediem!</span>
          <br />
          <a href="https://one8.com/" target="_blank">
            <strong style={{color:"green"}}>one8.com</strong>
          </a>
        </div>
      </div>
      <br />
      <hr />
      {postItem.map((index) => {
        return <img key={index} className="postimage" src={index.image} />;
      })}
    </>
  );
};

export default Dashboard;
