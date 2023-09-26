import { Avatar, ConfigProvider } from 'antd';


interface AvatarProp {
  initials?: string;
  bg: string;
  text?: string;
  size: number;
  textSize?: number;
}

const BaseAvatar = ({ initials, bg, text, size, textSize }: AvatarProp) => {
  return ( 
    <div style={{textTransform: 'uppercase'}}>
      <ConfigProvider 
        theme={{
          components: {
            Avatar: {
              containerSize: size,
              containerSizeLG: size
            }
          }
        }}
      >
        <Avatar style={{
          background: bg,
          color: text,
          height: size,
          width: size,
          alignItems: 'center',
          display: 'flex',
          fontSize: textSize
        }}
        size={textSize}
        >
          { initials}
        </Avatar>
      </ConfigProvider>
    </div>
   );
}
 
export default BaseAvatar;