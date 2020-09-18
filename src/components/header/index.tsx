import React, { useState } from 'react';
import { Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import navigation from '../../_nav';

const Header = (props: any) => {
  const currentPath = props.history.location.pathname;
  const [current, setCurrent] = useState(currentPath);

  const switchPage = (path: string) => {
    props.history.push(path);
    setCurrent(path);
  };

  return (
    <div className="header d-flex">
      <h2 className="logo cursor-pointer">Building Management</h2>
      <div className="float-left">
        <Menu selectedKeys={current} mode="horizontal">
          {navigation.items.map(item => {
            return (
              <Menu.Item key={item.url}>
                <div onClick={() => switchPage(item.url)}>
                  {item.name}
                </div>
              </Menu.Item>
            );
          })}
        </Menu>
      </div>
      <div className="header-right">Right Item</div>
    </div>
  );
}

export default withRouter(Header);
