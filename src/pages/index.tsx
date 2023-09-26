import { Row, Col } from "antd";
import { useState } from "react";
import CustomInput from "@/components/commons/CustomInput";



const HomePage = () => {

  const [value, setValue] = useState('');

  const handleSearch =(e: React.ChangeEvent<HTMLInputElement>)=> {
    setValue(e.target.value)
  }
  const homeStyle: React.CSSProperties = {
    marginTop: '10px',
  }

  return ( 
    <main style={homeStyle}>
      <Row gutter={6}>
        <Col span={7}>
          <CustomInput 
            placeholder="Search by name, edu, exp or #tag"
            type="search"
            value={value}
            handleSearch={handleSearch}
          />
        </Col>
        <Col span={17}>
          hi
        </Col>
      </Row>
    </main>
   );
}
 
export default HomePage;