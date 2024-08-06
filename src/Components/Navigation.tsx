import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

const Navigation: React.FC = () => {
  return (
    <Menu mode="horizontal" style={{ marginBottom: 20, backgroundColor:"#00008B", borderRadius: 20}}>

      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      
      <Menu.Item key="formItems">
        <Link to="/formItems">Add Task</Link>
      </Menu.Item>

      
    </Menu>
  );
};

export default Navigation;
