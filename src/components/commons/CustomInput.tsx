import { Input, Tooltip, ConfigProvider } from 'antd';
import { InfoCircleOutlined, SearchOutlined } from '@ant-design/icons';


interface InputProps {
  placeholder: string;
  type: string;
  value: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>)=> void;
}

const CustomInput = ({ placeholder, type, value, handleSearch }: InputProps) => {
  return ( 
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimaryHover: '#F3F3F3',
            borderRadius: 10,
            controlHeight: 45
          },
          components: {
            Input: {
              activeBorderColor: '#F3F3F3',
              activeShadow: 'none',
            }
          }
        }}
      >
        <Input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleSearch}
          prefix={<SearchOutlined style={{color: '#9AA6AC'}}/> }
          suffix={
            <Tooltip title="Extra information">
              <InfoCircleOutlined style={{ color: '#9AA6AC' }} />
            </Tooltip>
          }
             />
      </ConfigProvider>
    </div>
   );
}
 
export default CustomInput;