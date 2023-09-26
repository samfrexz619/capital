import { Badge, Divider, Space } from "antd";
import { cardData } from "@/lib/data";
import BaseAvatar from "./BaseAvatar";

const BaseCard = () => {

  const badgeStyles: React.CSSProperties = {
    backgroundColor: '#F3FAFC', 
    color: '#037092',
    padding: '13px 18px',
    display: 'flex',
    alignItems: "center",
  }

  return ( 
    <div style={{width: '100%'}}>
      {
        cardData.map(item => (
          <div>
            <div key={item.id} style={{display: 'flex', width: '100%', padding: '20px 0', columnGap: '20px', alignItems: 'center'}}>
              <div style={{padding: '5px'}}>
                <BaseAvatar
                  initials={item.initial}
                  size={60}
                  bg='#EDF4FF'
                  text='#D0E1FF'
                  textSize={23}
                />
              </div>
              <div>
                <p style={{fontSize: '16px', fontWeight: '600'}}>
                  {item.name}
                </p>
                <p style={{fontSize: '12px', fontWeight: '500', padding: '7px 0'}}>
                  {item.country}
                </p>
                <p style={{fontSize: '12px', fontWeight: '300',}}>
                  {item.edu}
                </p>
                <p style={{fontSize: '10px', fontWeight: '400', color: '#1D4ED8', padding: '7px 0'}}>
                  {item.tag}
                </p>
                <div style={{padding: '7px 0'}}>
                  <Space>
                    <Badge
                      count={item.emp_data.city}
                      style={badgeStyles}
                    />
                    <Badge
                      count={item.emp_data.exp}
                      style={badgeStyles}
                    />
                    <Badge
                      count={item.emp_data.location}
                      style={badgeStyles}
                    />
                  </Space>
                </div>
              </div>
            </div>
            <Divider  />
          </div>
        ))
      }
    </div>
   );
}
 
export default BaseCard;