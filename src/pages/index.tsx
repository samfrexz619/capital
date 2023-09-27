import { Row, Col, Card } from "antd";
import { useState } from "react";
import CustomInput from "@/components/commons/CustomInput";
import BaseAccordion from "@/components/commons/BaseAccordion";
import BaseTab from "@/components/commons/BaseTab";



const HomePage = () => {

  const [value, setValue] = useState('');

  const handleSearch =(e: React.ChangeEvent<HTMLInputElement>)=> {
    setValue(e.target.value)
  }

  const homeStyle: React.CSSProperties = {
    marginTop: '10px',
  }

  const accStyles: React.CSSProperties = {
    margin: '1rem 0'
  }

  return ( 
    <main style={homeStyle}>
      <Row gutter={40}>
        <Col span={6}>
          <CustomInput 
            placeholder="Search by name, edu, exp or #tag"
            type="search"
            value={value}
            handleSearch={handleSearch}
          />
          <div style={accStyles}>
            <BaseAccordion  />
          </div>
        </Col>
        <Col className="remove_default" span={18} style={{height: '85vh', overflowY: 'auto',}}>
          <Card>
            <BaseTab />
          </Card>
        </Col>
      </Row>
    </main>
   );
}
 
export default HomePage;