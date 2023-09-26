import { Tabs, ConfigProvider } from 'antd';
import type { TabsProps } from 'antd';
import Testing from './testing';
import BaseCard from './BaseCard';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Qualified',
    children: <BaseCard  />,
  },
  {
    key: '2',
    label: <div style={{display: 'flex', columnGap: '10px' }}> <p>Task</p> <p>25</p> </div>,
    children: <Testing  />,
  },
  {
    key: '3',
    label: 'Disqualified',
    children: 'Content of Tab Pane 3',
  },
];

// const tabCheck = <div style={{color: '#1d4ed8'}}>
//   <p></p>
// </div>

const BaseTab = () => {
  return ( 
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#1D4ED8',
            colorText: '#0B0B0B',
            lineType: 'solid',
            lineWidthBold: 0,
          }
        }}
      >
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          tabBarExtraContent={<p style={{color: '#1D4ED8', fontWeight: '600', fontSize: '14px'}}>247 candidates</p>}
          tabBarStyle={{
            display: 'flex',
            flexDirection: 'row-reverse',
            justifyContent: 'center',
            paddingBottom: '1rem'
          }}
        />
      </ConfigProvider>
    </div>
   );
}
 
export default BaseTab;