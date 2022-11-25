import {
  UserOutlined,
  LogoutOutlined,
  HomeOutlined,
  InfoCircleTwoTone,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useState, useEffect } from "react";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import AllPost from "../components/Post/AllPost";
import AddClient from "../components/Upload";
import axios from "axios";
import "./Dashboard.css";
const { Content, Footer, Sider } = Layout;

const Dashboard = () => {
  const naviate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState();
  useEffect(() => {
    var token = localStorage.userToken;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    };

    axios
      .get("http://localhost:5000/checkauth", { headers: headers })
      .then((res) => setisLoggedIn(res.data))
      .catch((err) => console.log(err));
  }, []);
  const logoutHandler = () => {
    localStorage.setItem("userToken", null);
    naviate("/");
  };
  if (isLoggedIn) {
    if (isLoggedIn.message === "Authorized") {
      return (
        <Layout
          style={{
            minHeight: "100vh",
          }}
        >
          <Sider className="w-60"
            theme="light"
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
          >
            <div className="border-b px-4 py-6 text-center">
              <h1 className="text-xl font-bold leading-none">
                <span className="text-yellow-700">User</span> Dashboard
              </h1>
            </div>
            <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item>
                <NavLink to={"/dashboard/upload"}>
                  <UserOutlined /> Upload
                </NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to={"/dashboard/post"}>
                  <UserOutlined />
                  AllPost
                </NavLink>
              </Menu.Item>
              <Menu.Item> 
                <NavLink to={"/dashboard/post"}>
                  <UserOutlined />
                  Rejected (optional)
                </NavLink>
              </Menu.Item>
              {/* <Menu.Item>
                <NavLink to={'/about'} >
                  <InfoCircleTwoTone /> About
                </NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to={"/"}>
                  <HomeOutlined /> Home
                </NavLink>
              </Menu.Item> */}
              <Menu.Item onClick={logoutHandler} >
                <LogoutOutlined className="mt-10" />
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            {/* <Header
              className="site-layout-background"
              style={{
                padding: 0,
              }}

            ></Header> */}
            <Content
              style={{
                margin: "0 16px",
              }}
            >
              <div
                className="site-layout-background"
                style={{
                  padding: 24,
                  minHeight: 600,
                }}
              >
                <Routes>
                  <Route path="/post" element={<AllPost />} />
                  {/* <Route path='/contact' element={<Contact />} />
                  <Route path='/profile' element={<Profile />} /> */}
                  <Route path="/upload" element={<AddClient />} />
                </Routes>
              </div>
            </Content>
            <Footer
              style={{
                textAlign: "center",
              }}
            >
              © Credadda 2022
            </Footer>
          </Layout>
        </Layout>
      );
    } else {
      return <center>sdlkjg</center>;
    }
  } else {
    return <center>Login to view Dashboard</center>;
  }
};

export default Dashboard;
