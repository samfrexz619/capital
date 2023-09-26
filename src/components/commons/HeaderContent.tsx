import { Col, Row, Typography } from 'antd';
import CustomSelect from './CustomSelect';
import { dropdownContent } from '@/lib/navItems';
import Cta from './Cta';

const { Title } = Typography;


const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};


const HeaderContent = () => {

  const headerStyles: React.CSSProperties = {
    height: '100%',
    // background: '#ffff00',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  }

  const fontStyles: React.CSSProperties = {
    color: '#1D4ED8',
    fontSize: '20px'
  }

  const headerIcons: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'flex-end',
    lineHeight: '0.3in',
    alignItems: 'center',
    height: '100%',
  }

  const titleStyle: React.CSSProperties = {
    height: '100%',
    marginTop: '0.7rem'
  }

  return ( 
    <div style={headerStyles}>
      <Row gutter={6}>
        <Col span={6}>
          <div style={titleStyle}>
            <Title style={fontStyles} level={4}>London Internship Program</Title>
            <Title style={{marginTop: '-0.3rem', fontSize: '12px', color: '#0b0b0b'}} level={5}>London</Title>
          </div>
        </Col>
        <Col span={6}>
          <CustomSelect
            listItems={dropdownContent}
            handleChange={handleChange}
          />
        </Col>
        <Col span={12}>
          <div style={headerIcons}>
            <Cta  />
          </div>
        </Col>
      </Row>
    </div>
   );
}
 
export default HeaderContent;