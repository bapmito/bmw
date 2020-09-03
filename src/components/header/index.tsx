import React, { useState } from 'react';
import { Menu } from 'antd';
import { withRouter } from 'react-router-dom';

const Header = (props: any) => {
  const currentPath = props.history.location.pathname;
  const [current, setCurrent] = useState(currentPath);

  const handleClick = () => {

  };

  return (
    <div className="header d-flex">
      <h2 className="logo cursor-pointer">Building Management</h2>
      <div className="float-left">
        <Menu onClick={handleClick} selectedKeys={current} mode="horizontal">
          <Menu.Item key="/about-us">
            <a  href={'/about-us'}>
              Về chúng tôi
            </a>
          </Menu.Item>
          <Menu.Item key="/project">
            <a href={'/project'}>
              Dự án
            </a>
          </Menu.Item>
          <Menu.Item key="/cooperation">
            <a href={'/cooperation'}>
              Hợp tác
            </a>
          </Menu.Item>
          <Menu.Item key="/blog">
            <a href={'/blog'}>
              Blog
            </a>
          </Menu.Item>
        </Menu>
      </div>
      <div className="header-right">Right Item</div>
    </div>
  );
}

export default withRouter(Header);
