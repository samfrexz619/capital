import { Col, Row, Typography, ConfigProvider } from 'antd';
import CustomSelect from './CustomSelect';
import { dropdownContent } from '@/lib/navItems';

const { Title } = Typography;


const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};


const HeaderContent = () => {

  const fontStyles: React.CSSProperties = {
    color: '#1D4ED8',
    fontSize: '20px'
  }

  const headerIcons: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'flex-end',
    lineHeight: '0.3in'
  }

  const titleStyle: React.CSSProperties = {
    display: 'flex',
    // flexDirection: 'column',
    // background: '#ff0000',
    alignItems: 'center',
    height: '100%',
  }

  return ( 
    <>
      <ConfigProvider theme={{
        token: {
          lineHeightHeading3: 0.6
        }
      }}>
        <Row gutter={6}>
          <Col span={6}>
            <div style={titleStyle}>
              <Title style={fontStyles} level={3}>London Internship Program</Title>
              {/* <Title level={5}>London</Title> */}
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
              <p>checking</p>
            </div>
          </Col>
        </Row>
      </ConfigProvider>
    </>
   );
}
 
export default HeaderContent;