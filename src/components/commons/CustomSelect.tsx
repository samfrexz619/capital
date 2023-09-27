import { Select, ConfigProvider } from 'antd';
// import { useState } from 'react';
import { DropdownContent } from '@/lib/types';
import BaseIcons from '../BaseIcons';

const { Option } = Select

interface SelectProps {
  listItems: DropdownContent[];
  handleChange: (value: string)=> void;
}


const CustomSelect = ({ listItems, handleChange }:SelectProps ) => {

  // const [index, setIndex] = useState(0);

  const selectStyles: React.CSSProperties = {
    width: 321,
    background: '#fff',
    borderRadius: 16,
    padding: '20px 0',
    color: '#000',
  }

  const menuStyle: React.CSSProperties = {
    position: 'relative',
    top: '-39.6rem',
    borderRadius: '14px',
    width: '321px',
    padding: 0,
    color: '#333'
  }

  const badgeStyle: React.CSSProperties = {
    background: '#F8F8F8',
    padding: '3px 12px',
    borderRadius: '16px',
  }

  return ( 
    <ConfigProvider
      theme={{
        components: {
          Select: {
            optionSelectedColor: '#1D4ED8',
            optionSelectedFontWeight: 500,
            optionActiveBg: '#EDF2FF',
            colorText: '#1D4ED8'
          }
        }
      }}
    >
      <Select
        defaultValue="Opportunity Browsing"
        style={selectStyles}
        onChange={handleChange}
        bordered={false}
        suffixIcon={<BaseIcons name='drop' />}
        removeIcon={true}
        labelInValue={true}
        dropdownStyle={menuStyle}
        listHeight={610}
        optionLabelProp='label'
      >
        {
          listItems.map(item => (
            <Option
              key={item.id}
              value={item.subject}
              label={item.subject}
            >
              <div className='dropdownStyles'>
                <div>{item.subject}</div>
                  <span style={badgeStyle}>
                    {item.badge}
                  </span>
              </div>
            </Option>
          ))
        }
      </Select>
    </ConfigProvider>
   );
}
 
export default CustomSelect;