import { Menu } from "antd";
import Router from "./component/router/Router";
import { useNavigate } from "react-router-dom";
import {
  HomeTwoTone,
  ProfileTwoTone,
  CaretRightOutlined,
  MailOutlined,
} from "@ant-design/icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const navigate = useNavigate();
  return (
    <Container>
      <Row>
        <Col>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Menu
              style={{ margin: "40px" }}
              onClick={({ key }) => {
                if (key === "signout") {
                } else {
                  navigate(key);
                }
              }}
              items={[
                { label: "instagram", style: { fontSize: "30px" } },
                { label: "Home", key: "/", icon: <HomeTwoTone /> },
                { label: "Message", key: "/message", icon: <MailOutlined /> },
                { label: "Create", key: "/create", icon: <CaretRightOutlined /> },
                { label: "Profile", key: "/profile", icon: <ProfileTwoTone /> },
              ]}
            ></Menu>
            <Router />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
