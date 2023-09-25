import { Avatar } from 'antd';


interface AvatarProp {
  initials?: string;
  bg: string;
  text?: string;
  size?: string;
}

const BaseAvatar = ({ initials, bg, text, size }: AvatarProp) => {
  return ( 
    <div>
      <Avatar style={{
        background: bg,
        color: text,
        height: size,
        width: size,
      }}>{ initials}</Avatar>
    </div>
   );
}
 
export default BaseAvatar;