import { NavLink } from 'react-router-dom';
import { Button, Tooltip, Layout, } from 'antd';
import { SettingOutlined } from '@ant-design/icons'
import BaseAvatar from './Avatar';
import { navItems } from '@/lib/navItems';
import NavIcons from '../NavIcons';

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
  return ( 
    <Sider
      className='remove_default'
      style={{
        background: '#fff',
        padding: '15px',
        overflow: 'auto',
        minHeight: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        scrollbarWidth: 'none',
      }}
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
          <BaseAvatar bg='#D9D9D9' size='48' />
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
                  <NavIcons name={nav.name} />
                  {!collapsed && <span>{nav.name}</span>}
                </NavLink>
              </Tooltip>
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
   );
}
 
export default SideBar;