import { Col, Row, Typography } from 'antd';
import CustomSelect from './CustomSelect';
// import NavIcons from '../NavIcons';

const { Title } = Typography;

// const handleChange = (value: string) => {
//   console.log(`selected ${value}`);
// };


const HeaderContent = () => {

  const fontStyles: React.CSSProperties = {
    color: '#1D4ED8',
    fontSize: '20px'
  }

  // const selectStyles: React.CSSProperties = {
  //   width: 321,
  //   background: '#fff',
  //   borderRadius: 16,
  //   padding: '20px 0',
  //   color: '#1D4ED8'
  // }

  const headerIcons: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'flex-end'
  }

  return ( 
    <>
      <Row gutter={6}>
        <Col span={6}>
          <Title style={fontStyles} level={3}>London Internship Program</Title>
          <Title level={5}>London</Title>
        </Col>
        <Col span={6}>
          <CustomSelect  />
          {/* <ConfigProvider
            theme={{
              components: {
                Select: {
                  optionSelectedColor: '#1D4ED8',
                  optionSelectedFontWeight: 500,
                  optionHeight: 72,
                  boxShadowSecondary: '0px 4px 25px 0px rgba(29, 78, 216, 0.05)',
                }
              }
            }}
          >
            <Select
              defaultValue="Opportunity Browsing"
              style={selectStyles}
              onChange={handleChange}
              bordered={false}
              suffixIcon={<NavIcons name='drop' />}
              removeIcon={true}
              labelInValue={true}
              options={[
                { value: 'jack', label: <span>check out</span> },
                { value: 'Opportunity Browsing', label: 'Opportunity Browsing' },
                { value: 'Yiminghe', label: 'yiminghe' },
              ]}
            />
          </ConfigProvider> */}
        </Col>
        <Col span={12}>
          <div style={headerIcons}>
            <p>checking</p>
          </div>
        </Col>
      </Row>
    </>
   );
}
 
export default HeaderContent;