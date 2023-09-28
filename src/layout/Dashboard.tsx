import { Outlet, useLocation } from "react-router-dom";
import { useState } from 'react';
import { Layout, ConfigProvider } from 'antd';
import HeaderContent from "@/components/commons/HeaderContent";
import SideBar from "@/components/commons/SideBar";



const { Header, Content } = Layout;


const Dashboard = () => {

  const [collapsed, setCollapsed] = useState(true);

  const { pathname } = useLocation()
// EDF4FF
  return ( 
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            bodyBg: '#EDF4FF'
          }
        }
      }}
    >
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
            <Content style={{ margin: '0', minHeight: '100vh' }}>
              <Outlet  />
            </Content>
          </div>
        </Layout>
      </Layout>
    </ConfigProvider>
   );
}
 
export default Dashboard;