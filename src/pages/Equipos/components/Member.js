import React from 'react'
import { Col, Row, Select,Form, Checkbox } from 'antd'
import Avatar from '../../../assets/img/avatar.png';
import { Link } from 'react-router-dom';


const { Option } = Select;



export default function Member({dato, removeDato}) {

    function handleRemoveClick() {
        removeDato(dato.id);
      }

    return (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{textAlign: "center", marginTop: "10px"}}>  
                        <Col  key={dato.id}  className="gutter-row" span={8}>
                        <Row>
                            <Col span={6}>
                                <p><img alt="ico" width="45" src={Avatar} /></p>
                            </Col>
                            <Col span={18}>
                                <span><b>{dato.title}</b></span><br/>
                                <span>Programador JR</span> 
                            </Col>
                        </Row>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <Form.Item style={{textAlign: "center"}} >
                            <Checkbox />
                        </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}  >
                            <Col className="gutter-row" span={24} >
                                <Form.Item name="rol" key={1}>
                                    <Select placeholder="Product Owner" >
                                        <Option value="jack">SCRUM</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="tom">Tom</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <Link className="link" href="#">Sustituir</Link> | <Link className="link" href="#" onClick={handleRemoveClick} >Eliminar</Link>
                    </Col>
                </Row>
    )
}
