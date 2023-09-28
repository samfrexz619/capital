import { Tabs, ConfigProvider, Checkbox, Empty } from 'antd';
import { useState } from 'react';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import type { TabsProps } from 'antd';
import Task from './Task';
import BaseCard from './BaseCard';
import { cardData } from "@/lib/data";
import TabLabel from './TabLabel';
import { sum, disqualified } from '@/lib/navItems';


const onChecked = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};


const BaseTab = () => {
  
  const [activeTabKey, setActiveTabKey] = useState<string>('');

  console.log(activeTabKey)
  
  const items: TabsProps['items'] = [
    {
      key: '102',
      label: <TabLabel isActive={false} title='qualified'  separator/>,
      children: <div style={{width: '100%'}}>
        {
          cardData.map(card => (
            card.qualified.map(item => (
              <div key={item.id}>
                <BaseCard card={item}  />
              </div>
            ))
          ))
        }
      </div>
    },
    {
      key: '201',
      label: <TabLabel isActive={true} title='task' total={25}  separator/>,
      children: <Task  />,
    },
    {
      key: '301',
      label: <TabLabel isActive={true} title='disqualified' total={disqualified[0]} />,
      children: <div style={{width: '100%'}}>
      {
        cardData.map(card => (
          card.disqualified.length > 0 ? card.disqualified.map(item => (
            <div key={item.id}>
              <BaseCard card={item}  />
            </div>
          ))
          : <Empty  />
        ))
      }
    </div>,
    },
  ];

  const onTab2Change = (key: string) => {
    setActiveTabKey(key);
  };

const tabCheck = <Checkbox onChange={onChecked}>
    <p style={{color: '#1D4ED8', fontWeight: '600', fontSize: '14px', marginLeft: '10px'}}>{`${sum} candidates`}</p>
  </Checkbox>

  return ( 
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#1D4ED8',
            colorText: '#0B0B0B',
            lineType: 'solid',
            // lineWidthBold: 0,
          },
          components: {
            Tabs: {
              inkBarColor: '#fff'
            }
          }
        }}
      >
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onTab2Change}
          tabBarExtraContent={tabCheck}
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