import { NavLink } from 'react-router-dom';
import { Button, Tooltip, Layout, ConfigProvider } from 'antd';
import { SettingOutlined } from '@ant-design/icons'
import BaseAvatar from './BaseAvatar';
import { navItems } from '@/lib/navItems';
import BaseIcons from '../BaseIcons';

const { Sider } = Layout

interface NavProps {
  pathname: string;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean)=> void;
}

const SideBar = ({ pathname, collapsed, setCollapsed }: NavProps) => {

  const tipStyles: React.CSSProperties = {
    color: '#ffff00'
  }

  const sideStyles: React.CSSProperties = {
    background: '#fff',
    padding: '15px',
    overflow: 'auto',
    minHeight: '100vh',
    position: 'fixed',
    left: 0,
    top: 0,
    bottom: 0,
    zIndex: 100,
    scrollbarWidth: 'none',
    boxShadow: '0px 4px 23px 0px rgba(0, 0, 0, 0.05)'
  }
  
  return ( 
    <Sider
      className='remove_default'
      style={sideStyles}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="demo-logo-vertical" />
        
        <div style={{
          display: 'flex',
          padding: '10px 8px',
          alignItems: 'center',
          columnGap: '15px',
        }}>
          <BaseAvatar bg='#D9D9D9' size={40} />
          {!collapsed && <span>Some logo</span>}
        </div>
          {navItems.map(nav => (
            <div key={nav.id} className="nav">
              <Tooltip 
                placement="right" 
                title={collapsed && nav.name} 
                style={tipStyles}
                color='#1D4ED8'
                destroyTooltipOnHide={true}
              >
                <NavLink to={nav.path} className={nav.path === pathname ? 'active' : ''}>
                  <BaseIcons name={nav.name} />
                  {!collapsed && <span>{nav.name}</span>}
                </NavLink>
              </Tooltip>
            </div>
          ))}
        <div style={{width: '100%'}}>
          <ConfigProvider
            theme={{
              components:{
                Button: {
                  colorBgTextHover: '#E9EFFF',
                  colorBgTextActive: '#E9EFFF'
                }
              }
            }} 
          >
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
          </ConfigProvider>
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
              size={40}
            />
          </div>
        </div>
      </Sider>
   );
}
 
export default SideBar;