import { Button, Col, Modal, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export default function ModalHistorialJob({ HistorialP, setHistorialP }) {
  return (
    <>
      <Modal
        title="Historial del Puesto"
        className="largeModal"
        visible={HistorialP}
        onCancel={() => {
          setHistorialP(false);
        }}
        onOk={() => {
          setHistorialP(false);
        }}
        footer={[
          <Button
            style={{ marginRight: "15px" }}
            className="secondary"
            onClick={() => {
              setHistorialP(false);
            }}
          >
            Cancelar
          </Button>,
          <Button
            className="primary"
            onClick={() => {
              setHistorialP(false);
            }}
          >
            Aceptar
          </Button>,
        ]}
      >
        <Row
          className="dividerBottomFull"
          style={{ textAlign: "center", paddingBottom: "15px" }}
        >
          <Col span={5}>
            <b>Puesto</b>
          </Col>
          <Col span={6}>
            <b>Creación</b>
          </Col>
          <Col span={9}>
            <b>Colaboradores que lo ocuparon</b>
          </Col>
          <Col span={4}>
            <b>Acciones</b>
          </Col>
        </Row>

        <Row
          className="dividerBottomFull"
          style={{
            textAlign: "center",
            marginTop: "15px",
            paddingBottom: "15px",
          }}
        >
          <Col span={5}>Diseñador Gráfico</Col>
          <Col span={6}>10 MAY 2016</Col>
          <Col span={9}>2 colaboradores</Col>
          <Col span={4}>
            <Link className="iconBlue" to="#">
              Ver Detalle
            </Link>
          </Col>
        </Row>

        <Row
          className="dividerBottomFull"
          style={{
            textAlign: "center",
            marginTop: "15px",
            paddingBottom: "15px",
          }}
        >
          <Col span={5}>Diseñador web</Col>
          <Col span={6}>12 MAY 2018</Col>
          <Col span={9}>1 colaboradores</Col>
          <Col span={4}>
            <Link className="iconBlue" to="#">
              Ver Detalle
            </Link>
          </Col>
        </Row>

        <Row
          style={{
            textAlign: "center",
            marginTop: "15px",
            paddingBottom: "15px",
          }}
        >
          <Col span={5}>Diseñador UI</Col>
          <Col span={6}>12 MAY 2020</Col>
          <Col span={9}>1 colaboradores</Col>
          <Col span={4}>
            <Link className="iconBlue" to="#">
              Ver Detalle
            </Link>
          </Col>
        </Row>
      </Modal>
    </>
  );
}
