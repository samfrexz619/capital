// import { useState } from "react";
import React from 'react';
import { Button, Space, Dropdown, ConfigProvider} from "antd";
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { ctaItems } from "@/lib/navItems";
import BaseIcons from "../BaseIcons";



const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        Move To Video Interview II
      </a>
    ),
  },
];

const Cta = () => {

  const ctaStyle: React.CSSProperties = {
    display: 'flex',
    height: '100%',
  }

  const btnStyle: React.CSSProperties = {
    background: '#fff',
    outline: 'none',
    border: 'none',
  }

  const menuStyle: React.CSSProperties = {
    boxShadow: 'none',
  };

  return ( 
    <div style={ctaStyle}>
      <Space>
        {
          ctaItems.map(item => (
            <Button
              style={btnStyle}
              key={item.id}
              icon={<BaseIcons name={item.icon}
              />
            } />
          ))
        }
        <ConfigProvider
          theme={{
            components: {
              Button: {
                defaultBorderColor: 'none',
                colorBgTextHover: '#fff',
                colorPrimary: '#1D5ECD',
              }
            }
          }}
        >
        <Dropdown.Button
          type='primary'
          icon={<DownOutlined />}
          menu={{ items }}
          style={{
            marginTop: '-0.4rem',
          }}
          dropdownRender={(menu) => (
          <div>
            {React.cloneElement(menu as React.ReactElement, { style: menuStyle })}
          </div>
          )}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Move To Video Interview I
            </Space>
          </a>
        </Dropdown.Button>
      </ConfigProvider>
      </Space>
    </div>
   );
}
 
export default Cta;