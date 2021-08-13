import React from "react";
import { Link } from "react-router-dom";
import LogoSmall from "../../assets/img/Evou-E-color.png";
import Tres from "../../assets/img/iconos/360-24px.svg";
import Hub from "../../assets/img/iconos/device_hub-24px.svg";
import Trending from "../../assets/img/iconos/trending_up-24px.svg";
import Insights from "../../assets/img/iconos/insights-24px.svg";
import Grupo from "../../assets/img/iconos/Grupo 625.svg";

import "./MenuEvo.scss";

export default function MenuEvo() {
  return (
    <>
      <div>
        <p>
          <img alt="logo" src={LogoSmall} width="45" height="45" />
        </p>
      </div>
      <div className="item">
        <img alt="ico" className="itemicon" src={Hub} />
        <p className="itemtex">Organigrama</p>
        <div className="slideSide">
          <span>Organigrama</span>
          <hr></hr>
          <ul>
            <li>
              <Link to="/miempresa">Mi empresa</Link>
            </li>
            <li>
              Áreas y puestos
              <ul className="subMenu">
                <Link to="/areasypuestos?tab=1">
                  <li>Crear área</li>
                </Link>
                <Link to="/areasypuestos?tab=2">
                  <li>Puestos</li>
                </Link>
              </ul>
            </li>
            <Link to="/equipoinicio">
              <li>Mis equipos</li>
            </Link>
            <Link to="/organigrama">
              <li>Organigrama general</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="item">
        <img alt="ico" className="itemicon" src={Tres} />
        <p className="itemtex">Evaluación 360</p>
        <div className="slideSide">
          <span>Evaluación 360</span>
          <hr></hr>
          <ul>
            <li>Crear perfil de puesto</li>
            <li>Crear proceso</li>
            <li>Evaluaciones</li>
          </ul>
        </div>
      </div>
      <div className="item">
        <img alt="ico" className="itemicon" src={Trending} />
        <p className="itemtex">Objetivos</p>
        <div className="slideSide">
          <span>Objetivos</span>
          <hr></hr>
          <ul>
            <li>Árbol de objetivos</li>
            <li>Bandeja de entrada</li>
            <li>Resumen de evaluaciones</li>
          </ul>
        </div>
      </div>
      <div className="item">
        <img alt="ico" className="itemicon" src={Insights} />
        <p className="itemtex">Indicadores</p>
        <div className="slideSide">
          <span>Indicadores clave</span>
          <hr></hr>
          <ul>
            <li>Mis indicadores</li>
            <li>Mis evaluaciones</li>
            <li>Gestionar</li>
          </ul>
        </div>
      </div>
      <div className="item">
        <img alt="ico" className="itemicon" src={Grupo} />
        <p className="itemtex">Nine Box</p>
        <div className="slideSide">
          <span>Nine Box</span>
          <hr></hr>
          <ul>
            <li>
              Planes de desarrollo
              <ul className="subMenu">
                <li>Crear plan</li>
                <li>Mis planes</li>
                <li>Provedores</li>
              </ul>
            </li>
            <li>Ver Nine Box</li>
          </ul>
        </div>
      </div>
    </>
  );
}
