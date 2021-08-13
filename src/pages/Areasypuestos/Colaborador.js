import React, { useState } from 'react'
import { Col, Dropdown, Row, Menu, Form, Select, Input, Button, Modal, Checkbox } from 'antd'
import { Link } from 'react-router-dom';
import More from '../../assets/img/iconos/more_vert-24px.svg'
import Avatar from '../../assets/img/avatar.png';
import Bien from '../../assets/img/iconos/bien_hecho.svg'
import Screendefault from '../../components/Screens/Screendefault';
import { PlusCircleOutlined } from '@ant-design/icons';
const { Option } = Select;


export default function Colaborador() {

    const [modalPassword, setModalPassword] = useState(false);
    const closeModalPassword= () => {setModalPassword(false);}

    const [Documets, setDocumets] = useState(false);
    const closeModalDocuments = () => {setDocumets(false);}   
    const openModalDocuments = () => {setDocumets(true);}

    const [Permisos, setPermisos] = useState(false);
    const closeModalPermisos = () => {setPermisos(false);}
    const sendPermisos = () => {alert('permisos enviados');}
    const addPermisos = () => {setPermisos(true);}

    const [flag, setFlag] = useState('hide');
    const addDocument = () => {setFlag('show');}
    const hiddeDocument = () => {setFlag('hide');}

    const menu = (
        <Menu>
          <Menu.Item key="0">
            <Menu.Item key="3"><Link to="#" onClick={addPermisos} >Agregar permisos</Link></Menu.Item>
        </Menu.Item>

        <Menu.Item key="0">
            <Menu.Item key="3"><Link to="#">Ver Objetivos</Link></Menu.Item>
          </Menu.Item>

          <Menu.Item key="0">
            <Menu.Item key="3"><Link to="/areasypuestos-perfil">Ver su Expediente</Link></Menu.Item>
          </Menu.Item>

          <Menu.Item key="0">
            <Menu.Item key="3"><Link onClick={openModalDocuments} to="#">Asignar documentos</Link></Menu.Item>
          </Menu.Item>

          <Menu.Item key="0">
            <Menu.Item key="3"><Link onClick={() =>{setModalPassword(true);} } to="#">Eliminar Colaborador</Link></Menu.Item>
          </Menu.Item>

        </Menu>
      );

      const showmessage = () => {
        let screen = document.getElementById("screen");
        screen.setAttribute("style", "display: flex;");
    }

    return (
        <Form name="form1" layout="vertical">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} >
            <Col className="gutter-row" span={11} >
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col span={22} style={{textAlign: "left"}}>
                        <h1>Información del Colaborador</h1>
                    </Col>
                    <Col span={2}>
                        <Dropdown overlay={menu} trigger={['click']}>
                            <Link to="#" className="ant-dropdown-link" onClick={e => e.preventDefault()}><img alt="logo" src={More} width="25" height="25" /></Link>
                        </Dropdown>
                    </Col>
                </Row>
                    
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{textAlign: "center"}} >
                    <Col className="gutter-row" span={24} >
                        <p><img alt="ico" width="140" src={Avatar} /></p>
                    </Col>
                </Row>

                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={24} >
                            <Form.Item name="size" label="Puesto" >
                                <Select placeholder="Selecciona el puesto a ocupar" >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                            </Form.Item>
                    </Col>
                </Row>

                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={24} >
                            <Form.Item name="bussines" label="Nombre* " >
                                <Input type="text" placeholder="Nombre " />
                            </Form.Item>
                    </Col>
                </Row>

                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                    <Form.Item name="bussines" label="Primer apellido* " >
                                <Input type="text" placeholder="Apellido paterno " />
                            </Form.Item> 
                    </Col>
                    <Col className="gutter-row" span={12} >
                    <Form.Item name="bussines" label="Segundo apellido* " >
                                <Input type="text" placeholder="Apellido materno " />
                            </Form.Item> 
                    </Col>
                </Row>

                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                    <Form.Item name="bussines" label="fecha de nacimiento* " >
                                <Input type="date" placeholder="DD/MM/AAAA " />
                            </Form.Item>  
                    </Col>
                    <Col className="gutter-row" span={12} >
                    <Form.Item name="bussines" label="Nacionalidad* " >
                                <Input type="text" placeholder="Nacionalidad " />
                            </Form.Item>  
                    </Col>
                </Row>

                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                    <Form.Item name="size" label="Estado civil" >
                                <Select placeholder="Selecciona una opción" >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                            </Form.Item>  
                    </Col>
                    <Col className="gutter-row" span={12} >
                    <Form.Item name="size" label="Genero" >
                                <Select placeholder="selecciona una opción" >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                            </Form.Item>
                    </Col>
                </Row>


                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={24} >
                    <Form.Item name="bussines" label="Correo electronico del colaborador " >
                                <Input type="text" placeholder="Ej. nombre@empresa.com " />
                            </Form.Item>
                    </Col>
                </Row>

                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                    <Form.Item name="bussines" label="Fecha de ingreso " >
                                <Input type="date" placeholder="DD/MM/AAAA " />
                            </Form.Item> 
                    </Col>
                    <Col className="gutter-row" span={12} >
                    <Form.Item name="size" label="ID de colaborador" >
                                <Select placeholder="Auto generada" >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                            </Form.Item>
                    </Col>
                </Row>

            </Col>

                
            <Col className="gutter-row" span={13} > 
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                    <Form.Item name="size" label="Ciudad" >
                                <Select placeholder="Ciudad donde vive " >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                            </Form.Item>  
                        </Col>  
                    <Col className="gutter-row" span={12} >
                    <Form.Item name="bussines" label="Salario " >
                                <Input type="text" placeholder="Ej.$28,000.00 MXN " />
                            </Form.Item>  
                        </Col>  
                </Row>    
            
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                    <Form.Item name="size" label="Area*" >
                                <Select placeholder="Ej Direccion de Finanzas" >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                            </Form.Item>  
                        </Col>  
                    <Col className="gutter-row" span={12} >
                    <Form.Item name="size" label="Sucursal*" >
                                <Select placeholder="zona centro CDMX" >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                            </Form.Item>  
                        </Col>  
                </Row>
                
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={24} >
                    <Form.Item name="bussines" label="Reporta a* " >
                                <Input type="text" placeholder="Abraham Guadarrama Rangel-Diseñador UX " />
                            </Form.Item>  
                        </Col>  
                   
                </Row> 

                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                        <Form.Item name="size" label="Nivel de estudios" >
                            <Select placeholder="Ej. Educación Superior" >
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="tom">Tom</Option>
                            </Select>
                        </Form.Item>
                        </Col>  
                    <Col className="gutter-row" span={12} >
                    <Form.Item name="size" label="años de experiencia" >
                                <Select placeholder="selecciona una opción" >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                            </Form.Item>
                        </Col>  
                </Row> 

                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={24} >
                    <Form.Item name="bussines" label="Habilidades técnicas " >
                                <Input type="text" placeholder="Ej. Microsoft Word " />
                            </Form.Item> 
                        </Col>  
                </Row>

                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={24} >
                    <Form.Item name="bussines" label="Idiomas " >
                                <Input type="text" placeholder="Ej. Ingles Avanzado " />
                            </Form.Item> 
                    </Col>
                      
                </Row>


                <Row style={{marginTop: "250px"}}  >
                        <Col className="gutter-row" span={15} >Los campos con * son obligatorios</Col>  
                        <Col className="gutter-row" span={5} >
                            <Link to="/areasypuestos?tab=2" ><Button className="secondary">Cancelar</Button></Link>                           
                        </Col>
                        <Col className="gutter-row" span={3} >
                            <Button onClick={showmessage} className="primary">Guardar</Button>                            
                        </Col>
                </Row>
            </Col>
            <Screendefault>
            <p style={{textAlign: "center"}}><img alt="ico" width="140" src={Bien} /></p>
                <h3>¡Bien hecho!</h3>
                <h3>Organigrama creado</h3>
                <br/>
                <Link to="/organigrama" ><Button className="primary">Hecho</Button></Link>
            </Screendefault>             
        </Row>
        <Modal title="Agregar permisos" className="smallModal" visible={Permisos} onCancel={closeModalPermisos} onOk={sendPermisos} footer={[
            <Button style={{marginRight: "15px"}} className="secondary" onClick={closeModalPermisos} >Cancelar</Button>,
            <Button className="primary" onClick={closeModalPermisos} >Aplicar</Button> 
            ]} >

                <Form style={{marginLeft: "10px"}}>
                    <Form.Item name="Administrador" >
                        <Checkbox>Permisos de Administrador</Checkbox>
                    </Form.Item>
                    <Form.Item name="Nine" style={{marginTop: "-25px"}} >
                        <Checkbox>Permisos para ver Nine Box</Checkbox>
                    </Form.Item>
                    <Form.Item name="remember" style={{marginTop: "-25px"}}>
                        <Checkbox>Permisos de Edición de Objetivos</Checkbox>
                    </Form.Item>
                    <Form.Item name="Organigrama" style={{marginTop: "-25px"}}>
                        <Checkbox>Permisos para ver Organigrama</Checkbox>
                    </Form.Item>
                    <Form.Item name="editar" style={{marginTop: "-25px"}}>
                        <Checkbox>Permisos para editar Organigrama</Checkbox>
                    </Form.Item>
                    <Form.Item name="Desarrollo" style={{marginTop: "-25px"}}>
                        <Checkbox>Permisos para crear Plan de Desarrollo</Checkbox>
                    </Form.Item>
                </Form>
            </Modal>

            <Modal title="Asignar documentos al colaborador" className="smallModal" visible={Documets} onCancel={closeModalDocuments} onOk={openModalDocuments} footer={[
            <Button style={{marginRight: "15px"}} className="secondary" onClick={closeModalDocuments} >Cancelar</Button>,
            <Button className="primary" onClick={closeModalDocuments} >Guardar</Button> 
            ]} >

                <Form style={{marginLeft: "10px"}}>
                    <Form.Item name="Administrador" >
                        <Checkbox>CURP</Checkbox>
                    </Form.Item>
                    <Form.Item name="Nine" style={{marginTop: "-25px"}} >
                        <Checkbox>Comprobante de estudios</Checkbox>
                    </Form.Item>
                    <Form.Item name="remember" style={{marginTop: "-25px"}}>
                        <Checkbox>Comprobante de domicilio</Checkbox>
                    </Form.Item>
                    <Form.Item name="Organigrama" style={{marginTop: "-25px"}}>
                        <Checkbox>Identificación oficia</Checkbox>
                    </Form.Item>
                    <Form.Item name="editar" style={{marginTop: "-25px"}}>
                        <Checkbox>Acta de nacimiento</Checkbox>
                    </Form.Item>
                    <Form.Item name="Desarrollo" style={{marginTop: "-25px"}}>
                        <Link to="#" onClick={addDocument} > <PlusCircleOutlined /> Agregar documento</Link>
                    </Form.Item>
                    <Row className={flag}>
                        <Col span={24}>
                            <Row style={{marginTop: "-20px"}}>
                                <Col span={24}>
                                <span><b>Agrega un nuevo documento</b></span>
                                <hr />
                                </Col>
                            </Row>
                            <Row>
                                <Col span={22}>
                                    <Input type="text" placeholder="Ej. Número de Seguridad Social NSS" />
                                </Col>
                                <Col style={{textAlign: "right"}} span={2}>
                                    <Link onClick={hiddeDocument} to="#" style={{fontSize: "20px", marginLeft: "10px"}} > <PlusCircleOutlined /> </Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Form>
            </Modal>
            <Modal title="Dar de baja colaboradores" visible={modalPassword} onCancel={closeModalPassword} footer={[
            <Button style={{marginRight: "15px"}} className="secondary" onClick={closeModalPassword} >Cancelar</Button>,
            <Link to="/areasypuestos?tab=2"><Button style={{marginRight: "15px"}} className="primary" onClick={closeModalPassword} >Aceptar</Button></Link> 
            ]} >
                <p>Al de baja un colaborador, este ya no formará parte de tu organización.</p><br/>
                <Form layout="vertical">
                    <Form.Item name="password" label="Ingresa tu contraseña de usuario" >
                        <Input type="text" id="nombre" placeholder="Ej. Ghkcclsd23" />
                    </Form.Item>
                </Form>
            </Modal>


        </Form>         
        
    )
}
        