import { Avatar } from "antd";



interface Props {
  title: string;
  isActive: boolean;
  total?: number;
  // active: string;
}
const TabLabel = ({ title, isActive, total }: Props) => {

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
    </div>
   );
}
 
export default TabLabel;