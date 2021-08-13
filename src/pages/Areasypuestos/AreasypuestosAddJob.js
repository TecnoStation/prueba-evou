import React, { useState } from "react";
import {
  Col,
  Dropdown,
  Input,
  Menu,
  Row,
  Form,
  Select,
  Button,
  Tag,
} from "antd";
import More from "../../assets/img/iconos/more_vert-24px.svg";
import { Link, useHistory, useLocation } from "react-router-dom";
import { RiPencilFill } from "react-icons/ri";
import { PlusCircleOutlined } from "@ant-design/icons";
import Modalcompetencias from "../../components/Modalcompetencias/Modalcompetencias";
import Screendefault from "../../components/Screens/Screendefault";
import Slidercompetencias from "../../components/Slider/Slidercompetencias";
import Modal from "antd/lib/modal/Modal";
import { IoMdSquare } from "react-icons/io";
import Avatar from "../../assets/img/avatar.png";
import Warning from "../../assets/img/iconos/atencion.svg";
import Treearea from "../../components/Tree/Treearea";
import ModalPermissions from "../../components/Modals/ModalPermissions/ModalPermissions";
import { v4 as uuid } from "uuid";

const { Option } = Select;

export default function AreasypuestosAddJob() {
  const treeData = [
    {
      title: "CEO",
      key: "1",
      icon: <IoMdSquare />,
      children: [
        {
          title: "Director General A",
          key: "0-1",
          icon: <IoMdSquare />,
        },
        {
          title: "Director General B",
          key: "0-2",
          icon: <IoMdSquare />,
        },
      ],
    },
  ];

  const treeData2 = [
    {
      title: "CEO",
      key: "1",
      icon: <IoMdSquare />,
      children: [
        {
          title: "Gerente Ventas",
          key: "0-1",
          icon: <IoMdSquare />,
          children: [
            {
              title: "Sub Gerente Ventas",
              key: "0-1-0",
              icon: <IoMdSquare />,
            },
            {
              title: "Sub Gerente de marketing",
              key: "0-1-1",
              icon: <IoMdSquare />,
            },
          ],
        },
        {
          title: "Director General B",
          key: "0-2",
          icon: <IoMdSquare />,
        },
      ],
    },
  ];

  const [slider, setSlide] = useState(50);
  const [action, setAction] = useState(false);
  const [modalComp, setModalComp] = useState(false);
  const [Competencia, setCompetencia] = useState(false);
  const [Item, setItem] = useState(false);
  const [Permisos, setPermisos] = useState(false);

  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const competencias = [];

  const openModalComp = () => {
    setSlide(50);
    setAction(2);
    setModalComp(true);
  };

  const sendComp = () => {
    alert("ok");
    setModalComp(false);
  };
  const closeModalComp = () => {
    setModalComp(false);
  };

  const cefective = (competencia, e) => {
    setCompetencia(competencia);
    document.getElementById("titulo").innerHTML = competencia;
    let deleteMessage = document.getElementById("deleteMessage");
    deleteMessage.setAttribute("style", "display: none;");
    let slide = document.getElementById("slide");
    slide.setAttribute("style", "display: flex;");
    let cefective = document.getElementById("cefective");
    cefective.setAttribute("style", "display: flex;");
    let screen = document.getElementById("screen");
    screen.setAttribute("style", "display: flex;");
  };

  const onChangeInput = (inputValue) => {
    setSlide(inputValue * 25);
  };

  const onChange = (inputValue) => {
    document.getElementById("nivel").value = inputValue / 25;
    setSlide(inputValue);
  };

  const closecefective = () => {
    let screen = document.getElementById("screen");
    screen.setAttribute("style", "display: none;");
    let cefective = document.getElementById("cefective");
    cefective.setAttribute("style", "display: none;");
  };

  const closeInfo = () => {
    if (action !== 0) {
      competencias.push({ competencia: Competencia, nivel: slider / 25 });
    }
    let screen = document.getElementById("screen");
    screen.setAttribute("style", "display: none;");
    setModalComp(false);
  };

  const editInfo = () => {
    competencias[Item].competencia = Competencia;
    competencias[Item].nivel = slider / 25;
    document.getElementById("nomCompe" + Item).innerHTML = Competencia;
    document.getElementById("nivel" + Item).innerHTML = slider / 25;
    let screen = document.getElementById("screen");
    screen.setAttribute("style", "display: none;");
    setModalComp(false);
  };

  const marks = {
    0: "0",
    25: "1",
    50: "2",
    75: "3",
    100: "4",
  };

  const [modalPassword, setModalPassword] = useState(false);
  const closeModalPassword = () => {
    setModalPassword(false);
  };
  const openModalPassword = () => {
    setModalPassword(true);
  };

  const sendPassword = () => {
    let slide = document.getElementById("slide");
    slide.setAttribute("style", "display: none;");
    let deleteMessage = document.getElementById("deleteMessage");
    deleteMessage.setAttribute("style", "display: flex;");
    let screen = document.getElementById("screen");
    screen.setAttribute("style", "display: flex;");
    setModalPassword(false);
  };

  const deleteItem = () => {
    let deleteMessage = document.getElementById("deleteMessage");
    deleteMessage.setAttribute("style", "display: none;");
    let screen = document.getElementById("screen");
    screen.setAttribute("style", "display: none;");
    setModalPassword(false);
    query.set("tab", 2);
    history.push({ pathname: "/areasypuestos", search: "?tab=2" });
  };

  // const warning = () =>{
  // setModalPassword(false);
  // let deleteMessage = document.getElementById("deleteMessage");
  // deleteMessage.setAttribute("style", "display: flex;");
  // let screen = document.getElementById("screen");
  // screen.setAttribute("style", "display: flex;");
  // }

  const menu = (
    <Menu>
      <Menu.Item key={uuid()}>
        <Menu.Item key={uuid()}>
          <Link
            to="#"
            onClick={() => {
              setPermisos(true);
            }}
          >
            Agregar permisos
          </Link>
        </Menu.Item>
      </Menu.Item>
      <Menu.Item key={uuid()}>
        <Menu.Item key={uuid()}>
          <Link to="#" onClick={openModalPassword}>
            Eliminar puesto
          </Link>
        </Menu.Item>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={14}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col
              className="gutter-row"
              span={22}
              style={{ textAlign: "left", marginBottom: "30px" }}
            >
              <h3>Datos de Mi empresa</h3>
              <span>Completa la información del puesto</span>
            </Col>
            <Col className="gutter-row" span={2}>
              <Dropdown overlay={menu} trigger={["click"]}>
                <Link
                  to="#"
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  <img alt="logo" src={More} width="25" height="25" />
                </Link>
              </Dropdown>
            </Col>
          </Row>
          <div className="formWork">
            <Form layout="vertical">
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={24}>
                  <Form.Item name="password" label="nombre del puesto">
                    <Input
                      type="text"
                      id="nombre"
                      placeholder="Ej. Director General A"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                style={{ marginTop: "-20px" }}
              >
                <Col className="gutter-row" span={12}>
                  <Select className="select" placeholder="Ej. Dirección">
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                  </Select>
                </Col>
                <Col className="gutter-row" span={12}>
                  <Select className="select" placeholder="Ej. Dirección">
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                  </Select>
                </Col>
              </Row>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={12}>
                  <Select className="select" placeholder="Ej. Puesto clave">
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                  </Select>
                </Col>
                <Col span={12} className="gutter-row">
                  <Select className="select" placeholder="Ej. Alto">
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                  </Select>
                </Col>
              </Row>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={12} className="gutter-row">
                  <Select
                    className="select"
                    placeholder="Ej. Educación Superior"
                  >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                  </Select>
                </Col>
                <Col span={12} className="gutter-row">
                  <Select
                    className="select"
                    placeholder="Selecciona una opción"
                  >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                  </Select>
                </Col>
              </Row>

              <Row style={{ marginTop: "20px" }}>
                <Col span={24}>
                  <span>
                    <b>Habilidades para el puesto</b>
                  </span>
                  <br />
                  <br />
                </Col>
              </Row>

              <Row style={{ marginBottom: "10px" }}>
                <Col span={24}>
                  <Tag className="TagArea" closable>
                    QuickBooks
                  </Tag>{" "}
                  <Tag className="TagArea" closable>
                    Suite Office
                  </Tag>
                </Col>
              </Row>

              <Row>
                <Col span={24}>
                  <Form.Item name="habilidades" label="Habilidades tecnicas">
                    <Input
                      type="text"
                      id="habilidades"
                      placeholder="Ej. Microsoft word"
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <Col span={24}>
                  <span>
                    <b>Idiomas</b>
                  </span>
                  <br />
                  <br />
                </Col>
              </Row>

              <Row style={{ marginBottom: "10px" }}>
                <Col span={24}>
                  <Tag className="TagArea" closable>
                    Ingles avanzado
                  </Tag>{" "}
                  <Tag className="TagArea" closable>
                    Frances
                  </Tag>
                </Col>
              </Row>

              <Row>
                <Col span={24}>
                  <Form.Item name="idiomas" label="Idiomas">
                    <Input
                      type="text"
                      id="idiomas"
                      placeholder="Ej. Ingles avanzado"
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row className="dividerBottomFull">
                <Col span={16}>Competencias institucionales</Col>
                <Col span={8}>Nivel</Col>
              </Row>

              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                style={{ marginTop: "10px" }}
              >
                <Col span={16}>Creatividad</Col>
                <Col span={6}>3</Col>
                <Col span={2}></Col>
              </Row>

              <Row
                className="tagTwo"
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                style={{ marginTop: "10px" }}
              >
                <Col span={17}>
                  Solución de Problemas - Desarrolla Alternativas
                </Col>
                <Col span={5}>3</Col>
                <Col span={2}>
                  <RiPencilFill
                    style={{ marginRight: "10px", marginTop: "7px" }}
                  />
                </Col>
              </Row>

              <Row className="dividerBottomFull" style={{ marginTop: "20px" }}>
                <Col span={16}>Competencias institucionales</Col>
                <Col span={8}>
                  <Link to="#" onClick={openModalComp}>
                    {" "}
                    <PlusCircleOutlined /> Agregar competencias
                  </Link>
                </Col>
              </Row>

              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                style={{ marginTop: "10px" }}
              >
                <Col span={16}>Actitud de servicio </Col>
                <Col span={6}>3</Col>
                <Col span={2}></Col>
              </Row>

              <Row
                className="tagTwo"
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                style={{ marginTop: "10px" }}
              >
                <Col span={17}>Apego a normas</Col>
                <Col span={5}>3</Col>
                <Col span={2}>
                  <RiPencilFill
                    style={{ marginRight: "10px", marginTop: "7px" }}
                  />
                </Col>
              </Row>

              <Row className="dividerBottomFull" style={{ marginTop: "20px" }}>
                <Col span={16}>Competencias del puesto</Col>
                <Col span={8}>
                  <Link to="#" onClick={openModalComp}>
                    {" "}
                    <PlusCircleOutlined /> Agregar competencias
                  </Link>
                </Col>
              </Row>

              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                style={{ marginTop: "10px" }}
              >
                <Col span={16}>Capacidad de aprender </Col>
                <Col span={6}>3</Col>
                <Col span={2}></Col>
              </Row>

              <Row
                className="tagTwo"
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                style={{ marginTop: "10px" }}
              >
                <Col span={17}>Control de procesos</Col>
                <Col span={5}>3</Col>
                <Col span={2}>
                  <RiPencilFill
                    style={{ marginRight: "10px", marginTop: "7px" }}
                  />
                </Col>
              </Row>

              <Row style={{ marginTop: "30px" }}>
                <Col span={14}></Col>
                <Col span={5}>
                  <Button className="secondary">Cancelar</Button>
                </Col>
                <Col span={5}>
                  <Link to="/areasypuestos-colaborador">
                    <Button className="primary">Guardar</Button>
                  </Link>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>

        <Col className="gutter-row dividerLeft" span={10}>
          <Row>
            <Col span={24}>
              <h3>Areas en las que participa el puesto</h3>
            </Col>
          </Row>
          <Row>
            <Col className="dividerBottom divScrool" span={24}>
              <Treearea treeData={treeData} />
              <br />
              <Treearea treeData={treeData2} />
              <br />
              <Treearea treeData={treeData} />
              <br />
              <Treearea treeData={treeData2} />
              <br />
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col span={24}>
              <p>
                <b>Colaboradores asignados al puesto de Director General</b>
              </p>
            </Col>
          </Row>
          <Row>
            <Col span={3}>
              <p>
                <img alt="ico" width="50" src={Avatar} />
              </p>
            </Col>
            <Col span={21}>
              <span>
                <b>Laura Mendoza</b>
              </span>
              <br />
              <span>Director General A</span>
            </Col>
          </Row>
          <Row>
            <Col span={3}>
              <p>
                <img alt="ico" width="50" src={Avatar} />
              </p>
            </Col>
            <Col span={21}>
              <span>
                <b>Panchita Lopez</b>
              </span>
              <br />
              <span>Director General B</span>
            </Col>
          </Row>
        </Col>
      </Row>
      <Modalcompetencias
        modalComp={modalComp}
        sendComp={sendComp}
        closeModalComp={closeModalComp}
        cefective={cefective}
      />
      <Screendefault>
        <div id="slide">
          <Slidercompetencias
            Competencia={Competencia}
            slider={slider}
            onChangeInput={onChangeInput}
            marks={marks}
            onChange={onChange}
            closecefective={closecefective}
            closeInfo={closeInfo}
            editInfo={editInfo}
          />
        </div>
        <div id="deleteMessage" style={{ display: "none" }}>
          <Row>
            <Col span={24}>
              <p style={{ textAlign: "center" }}>
                <img alt="ico" className="" src={Warning} />
              </p>
            </Col>
            <Col span={24}>
              <h3>¡Atención!</h3>
            </Col>
            <Col span={24}>
              <h3>Estás a punto de eliminar esta competencia.</h3>
            </Col>
            <Col span={24}>
              <h3>¿Seguro deseas eliminarla?</h3>
              <br />
            </Col>
            <Col span={24}>
              <Button
                style={{ marginRight: "15px" }}
                onClick={closeInfo}
                className="secondary btn"
              >
                Cancelar
              </Button>
              <Button onClick={deleteItem} className="primary btn">
                Eliminar
              </Button>
            </Col>
          </Row>
        </div>
      </Screendefault>

      <ModalPermissions Permisos={Permisos} setPermisos={setPermisos} />

      <Modal
        title="Editar competencias institucionales"
        visible={modalPassword}
        onCancel={closeModalPassword}
        onOk={sendPassword}
        footer={[
          <Button
            style={{ marginRight: "15px" }}
            className="secondary"
            onClick={closeModalPassword}
          >
            Cancelar
          </Button>,
          <input
            type="button"
            onClick={sendPassword}
            className="primary"
            value="Ingresar"
          />,
        ]}
      >
        <p>
          Al editar las competencias institucionales se verá reflejado en todos
          los colaboradores de tu empresa.
        </p>
        <br />
        <Form layout="vertical">
          <Form.Item name="password" label="Ingresa tu contraseña de usuario">
            <Input type="text" id="nombre" placeholder="Ej. Ghkcclsd23" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
