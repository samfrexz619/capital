import { Avatar } from "antd";



interface Props {
  title: string;
  isActive: boolean;
  total?: number;
  separator?: boolean;
}
const TabLabel = ({ title, isActive, total, separator }: Props) => {

  const tabStyles: React.CSSProperties = {
    display: 'flex', 
    columnGap: '10px', 
    alignItems: 'center',
    fontWeight: '500', 
    fontSize: '14px',
    textTransform: 'capitalize',
  }

  return ( 
    <div style={tabStyles}>
      <p>{title}</p> 
      {isActive && <Avatar size={'small'} style={{color: '#22215B', background: '#f7f8fd', fontSize: '10px'}}>
        {total}
      </Avatar>}
     {separator && <p style={{color: '#F3F3F4', margin: '0 4px'}}>|</p>}
    </div>
   );
}
 
export default TabLabel;