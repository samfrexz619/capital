import { Collapse, ConfigProvider } from 'antd'
import { FileTextOutlined, DownOutlined } from '@ant-design/icons';
import { accItems } from '@/lib/navItems';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const BaseAccordion = () => {

  const labelStyles: React.CSSProperties = {
    display: 'flex',
    alignContent: 'center',
    height: '100%',
    columnGap: '12px',
    color: '#0B0B0B',
    fontSize: '14px',
  }

  const items = accItems.map(item => {
    return {
      key: item.id,
      label: <div style={labelStyles}>
                <FileTextOutlined />
                <p style={{textTransform: 'capitalize'}}>{item.title}</p>
             </div>,
      children: <p>{text}</p>,
      showArrow: item.title === 'advanced filter' ? false : true
    }
  })


  return ( 
    <div>
      <ConfigProvider 
        theme={{
          token: {
            colorBorder: '#F3F3F3',
            // borderRadius: 0
          },
          components: {
            Collapse: {
              headerBg: '#fff',
              headerPadding: '18px 16px',
            }
          }
        }}
      >
        <Collapse
          expandIconPosition='end'
          expandIcon={({ isActive }) => <DownOutlined rotate={isActive ? 180 : 0} style={{color: '#1D4ED8', borderRadius: '0px'}} />}
          accordion 
          // items={acc}
          items={items}
        />
      </ConfigProvider>
    </div>
   );
}
 
export default BaseAccordion;