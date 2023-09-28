import { Outlet, useLocation } from "react-router-dom";
import { useState } from 'react';
import { Layout } from 'antd';
import HeaderContent from "@/components/commons/HeaderContent";
import SideBar from "@/components/commons/SideBar";



const { Header, Content } = Layout;


const Dashboard = () => {

  const [collapsed, setCollapsed] = useState(true);

  const { pathname } = useLocation()

  return ( 
    <Layout 
    >
      <SideBar 
        pathname={pathname} 
        collapsed={collapsed} 
        setCollapsed={setCollapsed} 
      />
      <Layout className="site-layout" style={{ background: '#EDF4FF', marginLeft: '80px' }}>
        <div className='container'>
          <Header style={{ padding: 0, background: '#EDF4FF', height: '15vh' }}>
            <HeaderContent  />
          </Header>
          <Content style={{ margin: '0' }}>
            <Outlet  />
          </Content> 
        </div>
      </Layout>
    </Layout>
   );
}
 
export default Dashboard;