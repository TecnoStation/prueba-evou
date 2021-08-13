import React, { useState } from 'react'
import { Button, Col, Input, Row, Form, Modal, Select, AutoComplete } from 'antd'
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import {v4 as uuid} from "uuid";
import TeamMembers from './TeamMembers';

const { Option } = Select;

export default function CreateTeam(props) {

    const info = () => {
        return(
            <>
            <span><b>Actividad de la empresa:</b></span><br/>
            <span>Lorem Ipsum es simplemente el texto de relleno
            de las imprentas y archivos de texto. Lorem
            Ipsum ha sido el texto de relleno estándar de las
            industrias desde el año 1500</span>
            </>
        );
    }

    const showFrame = (dato) =>{
        if(dato === "1"){
            document.getElementById('frame').setAttribute('style', "display: flex;");
        }else{
            document.getElementById('frame').setAttribute('style', "display: none;");
        }
        
    }

    const ready = () => {alert('enviando datos'); props.setModalCreateTeam(false)}
   

    const [valorTemporal, setValorTemporal] = useState({
        id: "",
        title: ""
      });
    
    
      const addPersona = (title,e) =>{
        props.agrega({title, id: uuid()});
        setValorTemporal({...valorTemporal, title: ""});
      }
    
        const renderTitle = (title) => (
            <span key={uuid()}>{title}</span>
          );
    
        const renderItem = (title, count) => ({
            value: title,
            label: (
              <div
                
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
                onClick={(e) => addPersona(title, e)}
              >
                {title}
                <span>
                    <UserOutlined /> 
                </span>
              </div>
            ),
          });
    
        const options = [
            {
              label: renderTitle('Area de marketing'),
              options: [renderItem('Panchita Lopez'), renderItem('Juan Charrasquiado')],
            },
            {
              label: renderTitle('Area de Gerencias'),
              options: [renderItem('Pepe Pecas'), renderItem('Juan Camaney')],
            },
            {
              label: renderTitle('Area de Ventas'),
              options: [renderItem('Pepe Grillo'), renderItem('Pinocho')],
            },
            
          ];

          const onChange2 = (e) => {
            //console.log('esto es E: ' + e);
            setValorTemporal({...valorTemporal, title: e});
        }
    
        const closeModalCreateTeam = () => {props.setModalCreateTeam(false);}
    

    return (
        <Modal title="Crear Equipo" className="largeModal" visible={props.modalCreateTeam} onCancel={closeModalCreateTeam} onOk={props.sendCreateTeam} footer={[<span style={{marginRight:"120px"}}><Link to="#">Aquí</Link> puedes ver buenas prácticas en equipos Agile</span>,<Button style={{marginRight: "20px", width: "100px"}} className="secondary" onClick={closeModalCreateTeam} >Cancelar</Button>, <input type={props.btn1} className="primary" style={{width: "100px"}} onClick={ready} value="Edit" />, <Link to="/equipos"><input type={props.btn2} className="primary" style={{width: "100px"}} onClick={ready} value="Crear" /> </Link>]} >
                    <Form name="form" layout="vertical">

                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col className="gutter-row" span={12}>
                                <Form.Item name="site" label="Nombre del equipo" >
                                    <Input type="text" placeholder="Aqui puedes asignar el nombre de tu equipo" />
                                </Form.Item>
                            </Col>
                            <Col className="gutter-row" span={12}>
                                <Form.Item name="activity" label="Tipo de equipo" tooltip={info}>
                                    <Select placeholder="Selecciona una opción" onChange={showFrame} >
                                        <Option value="0">Personalizado</Option>
                                        <Option value="1">Modo Opertaivo Agile</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col className="gutter-row" span={12}>
                                <Form.Item name="empresa" label="Agregar colaboradores">
                                <AutoComplete
                                    dropdownClassName="certain-category-search-dropdown"
                                    dropdownMatchSelectWidth={300}
                                    options={options}
                                    value={valorTemporal.title}
                                    onChange={onChange2}
                                    >
                                        <Input.Search size="large" placeholder="Buscar colaboradores" />
                                    </AutoComplete>
                                </Form.Item>
                            </Col>
                            <Col className="gutter-row" span={12}>
                                <Form.Item name="modalidad" label="Modalidad" tooltip={info}>
                                    <Select placeholder="Selecciona una opción" >
                                        <Option value="jack">Funcional</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="tom">Tom</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                    
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} id="frame" style={{display: "none"}}  >
                            <Col className="gutter-row" span={12}></Col>
                            <Col className="gutter-row" span={12}>
                                <Form.Item name="frame" label="Marco de trabajo" tooltip={info}>
                                    <Select placeholder="Selecciona una opción" >
                                        <Option value="jack">SCRUM</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="tom">Tom</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>                    

                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{textAlign: "center", marginTop: "10px"}}>
                            <Col className="gutter-row" span={8}>Miembros del equipo</Col>
                            <Col className="gutter-row" span={4}>Lider</Col>
                            <Col className="gutter-row" span={6}>Rol en el equipo</Col>
                            <Col className="gutter-row" span={6}>Acciones</Col>
                        </Row>

                        <TeamMembers datos={props.datos} removeDato={props.removeDato} />

                        
                    </Form>
            </Modal>

    )
}
