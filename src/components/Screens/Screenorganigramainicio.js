import { Button, Card } from "antd";
import Item from "antd/lib/list/Item";
import React from "react";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Arrorup from '../../assets/img/iconos/upload.svg'
import Empresa from '../../assets/img/iconos/empresa.svg'
import Warning from '../../assets/img/iconos/atencion.svg'
import './Screen.scss'

let carusel = document.getElementsByTagName('Carousel');


export default function Screen() {
   

    return (
        <div className="screen" id="screen">
            
            <Card title="¿Por qué crear un Organigrama?" className="card" id="cardOrganigrama" headStyle={{ textAlign : "center"}} >
            <div>
            <Carousel 
                ref={ref => (carusel = ref)} 
                >
                <Item>
                    <div className="carruselItem">
                        <p><b>Podrás mejora la organización y definición</b> de los ejes principales en la toma de decisiones.</p>
                        <p><b>Divide y segmenta el trabajo</b> por unidades tácticas, mejorando la gestión de la estrategia.</p>
                        <p><b>Visualiza el vínculo entre el alcance del puesto y el talento del colaborador</b> cerrando las brechas de las áreas de acción de la compañías así como las responsabilidades de los miembros que la forman.</p>
                        <p><b>Optimiza y facilita la gestión de los procesos entre EVOU y Evaluatest</b></p>
                    </div>
                </Item>
                <Item>
                    <div className="carruselItem">
                        <p>Para poder implementar tu organigrama se necesita conocer:</p>
                        <p><b>Tu empresa,</b>su información básica y su cultura.</p>
                        <p><b>La estructura de tu empresa,</b>es decir que áreas la componen y que puestos existen dentro de ella.</p>
                        <p><b>El perfil de tus puestos,</b>lo que se traduce en los datos básicos, las habilidades requeridas y las competencias de cada uno.</p>
                        <p><b>El perfil de las personas</b> que ocupan estos puestos, lo que significa sus datos básicos y las habilidades de cada uno.</p>
                    </div>
                </Item>
                <Item>
                    <div className="carruselItem">
                        <p>Siempre vas a poder subir los datos directamente de forma manual, sin embargo, entendemos que existen ocasiones en las que es tanta la información, que hemos habilitado la carga masiva.</p>
                        <p>La carga masiva estará habilitada en los puntos donde hemos detectado esta necesidad dentro del organigrama.</p>
                        <p>En el panel principal vas a poder encontrar este icono para poder acceder a esta función:</p>
                        <p style={{textAlign: "center"}}><img alt="ico" width="80" className="" src={Arrorup} /></p>
                    </div>
                </Item>
                <Item>
                    <div className="carruselItem">
                        <h4 style={{textAlign: "center"}}>Iniciemos la creación de tu organigrama</h4>
                        <p>Para iniciar la creación de tu organigrama, te sugerimos comenzar llenando la información de la sección de “Mi Empresa”.</p>
                        <p>Si te faltara información para completar lo que te pedimos, siempre vas a poder regresar dando click desde el menú principal o en este icono:</p>
                        <p style={{textAlign: "center", marginTop: "-20px"}}><img alt="ico" width="75" className="" src={Empresa} /></p>
                        <div style={{textAlign: "center", marginTop: "-10px"}}><Link to="/miempresa"><Button className="primary">Comenzar</Button></Link></div>
                        
                    </div>
                </Item>
            </Carousel>
            </div>
            <div className="arrows">
                <Link to="#" onClick={() => carusel.slidePrev()} className="arrowLeft"><LeftOutlined /></Link>
                <Link to="#" onClick={() => carusel.slideNext()} className="arrowRigth"><RightOutlined /></Link>
            </div>
            <div style={{textAlign: "center", marginTop: "5px"}}>
                <p><Link className="link" onClick={showWarning}  to="#">Omitir</Link></p>
            </div>
            
            </Card>

            <Card className="card" id="cardWarning" style={{textAlign:"center"}}>
            <p style={{textAlign: "center"}}><img alt="ico" width="120" className="" src={Warning} /></p>
                <h1>¡Atención!</h1>
                <p>Estás a punto de omitir el onboarding.</p>
                <p>Recuerda que te orienta sobre el uso de la plataforma.</p>
                <p>¿Estás seguro?</p>
                <Button onClick={showCard} className="secondary" style={{marginRight: "15px"}}>Continuar</Button>
                <Link to="/organigrama"><Button className="primary">Omitir</Button></Link>
            </Card>

        </div>
       
    )
}



function showWarning(){
    let cardOrganigrama = document.getElementById('cardOrganigrama');
    let cardWarning = document.getElementById('cardWarning');

    cardOrganigrama.setAttribute("style", "display: none;");
    cardWarning.setAttribute("style", "display: block;");   
}

function showCard(){
    let cardOrganigrama = document.getElementById('cardOrganigrama');
    let cardWarning = document.getElementById('cardWarning');

    cardWarning.setAttribute("style", "display: none;"); 
    cardOrganigrama.setAttribute("style", "display: block;");
    
}