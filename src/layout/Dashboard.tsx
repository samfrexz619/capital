import { Outlet, NavLink, useLocation } from "react-router-dom";
import { useState } from 'react';
import { Layout, Button } from 'antd';
import { SettingOutlined } from '@ant-design/icons'
import { navItems } from "@/lib/navItems";
import NavIcons from "@/components/NavIcons";
import BaseAvatar from "@/components/Avatar";



const { Header, Content, Sider } = Layout;


const Dashboard = () => {

  const [collapsed, setCollapsed] = useState(true);

  const { pathname } = useLocation()
  console.log(pathname)

  return ( 
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        style={{
          background: '#fff',
          padding: '15px'
        }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        {/* <div className="demo-logo-vertical" /> */}
        <div style={{
          display: 'flex',
          padding: '10px 8px',
          alignItems: 'center',
          columnGap: '15px',
        }}>
          <BaseAvatar bg='#D9D9D9' size='48' />
          {!collapsed && <span>Some logo</span>}
        </div>
          {navItems.map(nav => (
            <div key={nav.id} className="nav">
              <NavLink to={nav.path} className={nav.path === pathname ? 'active' : ''}>
                <NavIcons name={nav.name} />
                {!collapsed && <span>{nav.name}</span>}
              </NavLink>
            </div>
          ))}
        <div style={{width: '100%'}}>
          <Button
            type="text"
            onClick={() => setCollapsed(!collapsed)}
            style={{
              marginTop: '15px',
              height: '48px',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              columnGap: '10px',
            }}
          >
            {collapsed ? <span>&#60;</span> : <span>&#62;</span>}
            {!collapsed && 'Collapse'}
          </Button>
        </div>
        
        <div className="nav__bottom">
          <NavLink to='/setting'>
            <SettingOutlined 
              style={{fontSize: '20px', display: 'block', width: '48px'}} />
            {!collapsed && <span>Setting</span>}
          </NavLink>
          <div 
            style={{
              padding: '10px 5px',
            }}
          >
            <BaseAvatar 
              initials="AS" 
              bg='#D7E5FD' 
              text='#B1CDFD'
            />
          </div>
        </div>
      </Sider>

      <Layout style={{ background: '#EDF4FF' }}>
        <Header style={{ padding: 0, background: '#EDF4FF' }} />
        <Content style={{ margin: '0' }}>
          <Outlet  />
        </Content>
      </Layout>
    </Layout>
   );
}
 
export default Dashboard;