import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import Logo from '../../assets/img/Evou-color.png'
import { Link } from 'react-router-dom';

import './Login.scss';

export default function Login() {
    
    return (
        <div>
           <div className="formLogin">
                <div className="img">
                    <img alt="logo" src={Logo} width="175" height="85"/>
                </div>  
                <h2>¡Bienvenido!</h2>
                <Form  name="form" layout="vertical">
                    <Form.Item name="username" label="Usuario" >
                        <Input type="text" placeholder="ejemplo@empresa.com" />
                    </Form.Item>
                    <Form.Item name="password" label="Contraseña" >
                        <Input type="password" placeholder="Contraseña" />
                    </Form.Item>
                    <Form.Item style={{textAlign: "left", marginTop: "-20px"}} >
                        <Checkbox>Mantener sesión abierta</Checkbox>
                    </Form.Item>
                    <Form.Item style={{textAlign: "left", marginTop: "-20px"}} >
                       <Link to="/recoverypassword" className="linkText">Recuperar contraseña</Link>
                    </Form.Item>
                    <Form.Item >
                        <Link to="organigramainicio"><Button className="primary">Entrar</Button></Link>
                    </Form.Item>
                </Form>
                <p className="legacyP grayText">Brivé Soluciones. All Rights Reserved.</p>
                <p ><Checkbox className="terminos grayText" >Al hacer clic en Entrar aceptas los términos, condiciones y la política de privacidad.</Checkbox></p>
                <p className="legacyP linkText">Legal <br/>Aviso de Privacidad</p>
            </div>
        </div>
    )
}
