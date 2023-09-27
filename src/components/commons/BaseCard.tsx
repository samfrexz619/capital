import { Badge, Divider, Space, ConfigProvider, Checkbox } from "antd";
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { Qualified } from "@/lib/types";
import BaseAvatar from "./BaseAvatar";



const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};

interface CardProps {
  card: Qualified;
}

const BaseCard = ({ card }: CardProps) => {

  const badgeStyles: React.CSSProperties = {
    backgroundColor: '#F3FAFC', 
    color: '#037092',
    padding: '13px 18px',
    display: 'flex',
    alignItems: "center",
    borderRadius: '16px',
  }

  return ( 
    <ConfigProvider 
      theme={{
        token: {
          lineWidthBold: 2
        }
      }}
    >
      <div style={{width: '100%'}}>
        <Checkbox onChange={onChange}>
        <div style={{display: 'flex', width: '100%', padding: '20px 0', columnGap: '20px', alignItems: 'center', marginLeft: '1rem'}}>
          
          <div style={{padding: '5px'}}>
            <BaseAvatar
              initials={card.initial}
              size={60}
              bg='#EDF4FF'
              text='#D0E1FF'
              textSize={23}
            />
          </div>
          <div>
            <p style={{fontSize: '16px', fontWeight: '600', textTransform: 'capitalize'}}>
              {card.name}
            </p>
            <p style={{fontSize: '12px', fontWeight: '500', padding: '7px 0'}}>
              {card.country}
            </p>
            <p style={{fontSize: '12px', fontWeight: '300',}}>
              {card.edu}
            </p>
            <p style={{fontSize: '10px', fontWeight: '400', color: '#1D4ED8', padding: '7px 0'}}>
              {card.tag}
            </p>
            <div style={{padding: '7px 0'}}>
              <Space>
                <Badge
                  count={card.emp_data.city}
                  style={badgeStyles}
                />
                <Badge
                  count={card.emp_data.exp}
                  style={badgeStyles}
                />
                <Badge
                  count={card.emp_data.location}
                  style={badgeStyles}
                />
              </Space>
            </div>
          </div>
        </div>
        </Checkbox>
        <Divider  />
      </div>
    </ConfigProvider>
   );
}
 
export default BaseCard;