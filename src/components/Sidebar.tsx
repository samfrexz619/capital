import { ConfigProvider, Menu } from "antd";
import type { MenuProps } from 'antd';
import NavIcons from "./NavIcons";
import { navItems } from "@/lib/navItems";



const items: MenuProps['items'] = navItems.map(nav => {
  const key = nav.id
  return {
    key,
    icon: <NavIcons name={nav.name} />,
    label: nav.name
  }
})

const SideBar = () => {
  return ( 
    <>
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemSelectedBg: '#ffff00',
              activeBarHeight: 4,
              itemHoverColor: '#ff0000',
              algorithm: true,
              
            }
          }
        }} 
      >
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          // inlineCollapsed={collapsed}
          items={items}
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '20px 0',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      </ConfigProvider>
    </>
   );
}
 
export default SideBar;