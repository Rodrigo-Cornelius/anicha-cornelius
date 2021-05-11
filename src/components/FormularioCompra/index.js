import React, { useContext, useState } from 'react';
import styles from './FormularioCompra.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import LoadingIcon from "../LoadingIcon";
import { CartContext } from "../../context/CartContext";

const FormularioCompra = ({generarOrden, idCompra}) => {

    const {clear} = useContext(CartContext)

    const [datos, setDatos] = useState({
        nombre:'',
        telefono: '',
        email:'',
    });

    const handleInputChange = (event) => {
        const valido = {
            nombre: /^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$/,
            telefono: /^\d{9}$/,
            email : /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])/
        }
        
        switch (event.target.name) {
            case "nombre":
                handleInputStyles('#spnErrorNombre', event, valido.nombre.test(event.target.value), '#iconCheckNombre', '#iconCrossNombre')
                break;
            case "telefono":
                handleInputStyles('#spnErrorTelefono', event, valido.telefono.test(event.target.value), '#iconCheckTelefono', '#iconCrossTelefono')      
                break;
            case "email":
                handleInputStyles('#spnErrorEmail', event, valido.email.test(event.target.value), '#iconCheckEmail', '#iconCrossEmail')
            break;
            default:
                break;
        }
        
        handleBtnSubmit()
    }

    const handleBtnSubmit = () => {
        const inputs = document.querySelectorAll('input');
        let todoCorrecto = true;
        let i = 0
        while (todoCorrecto && i<inputs.length) {
            todoCorrecto = inputs[i].classList.contains('inputCorrecto');
            i++;
        };
        todoCorrecto ? 
        document.querySelector('#btnSubmitCompra').classList.remove('disabled')
        :
        document.querySelector('#btnSubmitCompra').classList.add('disabled')
    }

    const handleInputStyles = (span, event, correcto, iconoCheck, iconoCross) => {
        if (correcto) {
            document.querySelector(span).classList.add('d-none');
            event.target.classList.add('inputCorrecto')
            event.target.classList.remove(styles.inCorrecto)
            event.target.classList.add(styles.Correcto)
            document.querySelector(iconoCheck).classList.remove('d-none')
            document.querySelector(iconoCross).classList.add('d-none')
        } else {
            document.querySelector(span).classList.remove('d-none');
            event.target.classList.remove('inputCorrecto')
            event.target.classList.add(styles.inCorrecto)
            event.target.classList.remove(styles.Correcto)
            document.querySelector(iconoCheck).classList.add('d-none')
            document.querySelector(iconoCross).classList.remove('d-none')
        }
    }
    
    const enviarDatos = (event) => {
        event.preventDefault();
        let datosForm = {};    
        for (let i = 0; i < event.target.length; i++) {
            if (event.target[i].type === "text" || event.target[i].type === "number") {
                const name = event.target[i].name;
                const value = event.target[i].value;
                datosForm = {
                    ...datosForm,
                    [name] : value,
                }
            }
        }
        setDatos(datosForm);
        generarOrden(datos)
    }

    return (
        <>
            <div id="app" className="container">
                <form className="row g-3 " onSubmit={enviarDatos}>
                    <div className="col-md-6">
                        <label htmlFor="formName" className="form-label fw-bold">Nombre</label>
                        <div className=" position-relative">
                            <input onChange={handleInputChange} type="text" className="form-control " id="formName" name="nombre" placeholder="Nombre Completo" />
                            <FontAwesomeIcon id="iconCheckNombre" className={`${styles.checkIcon} d-none position-absolute top-50 end-0 translate-middle-y me-2 icon`} icon={faCheckCircle}/>
                            <FontAwesomeIcon id="iconCrossNombre" className={`${styles.crossIcon} d-none position-absolute top-50 end-0 translate-middle-y me-2 icon`} icon={faTimesCircle}/>
                        </div>
                        <span id="spnErrorNombre" className="d-none">Nombre incorrecto</span>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="formPhone" className="form-label fw-bold">Telefono</label>
                        <div className=" position-relative">
                            <input onChange={handleInputChange} type="text" className="form-control" id="formPhone" name="telefono" placeholder={123456789} />
                            <FontAwesomeIcon id="iconCheckTelefono" className={`${styles.checkIcon} d-none position-absolute top-50 end-0 translate-middle-y me-2 icon`} icon={faCheckCircle}/>
                            <FontAwesomeIcon id="iconCrossTelefono" className={`${styles.crossIcon} d-none position-absolute top-50 end-0 translate-middle-y me-2 icon`} icon={faTimesCircle}/>
                        </div>
                        <span id="spnErrorTelefono" className="d-none">El telefono debe contener 9 numeros</span>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="formEmail" className="form-label fw-bold">Email</label>
                        <div className=" position-relative">
                            <input onChange={handleInputChange} type="text" className="form-control" id="formEmail" name="email" placeholder="ejemplo@dominio.com" />
                            <FontAwesomeIcon id="iconCheckEmail" className={`${styles.checkIcon} d-none position-absolute top-50 end-0 translate-middle-y me-2 icon`} icon={faCheckCircle}/>
                            <FontAwesomeIcon id="iconCrossEmail" className={`${styles.crossIcon} d-none position-absolute top-50 end-0 translate-middle-y me-2 icon`} icon={faTimesCircle}/>
                        </div>
                        
                        <span id="spnErrorEmail" className="d-none">Email incorrecto</span>
                    </div>
                    <div className="col-12">
                        <button id="btnSubmitCompra" className="btn btn-primary disabled" data-bs-toggle="modal" data-bs-target="#exampleModal"  type="submit">Comprar</button>
                    </div>
                </form>
            </div>

            {/* Pop-up */}

            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="popUpCompra" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    {idCompra===""?
                                        <h5 className="modal-title" id="popUpCompra">Comprando...</h5>
                                        :
                                        <h5 className="modal-title" id="popUpCompra">Compra Realizada</h5>
                                    }
                                </div>
                                <div className="modal-body">
                                    {idCompra===""?
                                    <LoadingIcon bigIcon={false} />
                                    :
                                    <>
                                         ID de la orden: <span className={`fw-bold ${styles.idNuevaCompra}`}>{idCompra}</span>
                                    </>
                                    }
                                </div>
                                <div className="modal-footer">
                                    {idCompra!==""&&<button onClick={()=>clear()} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>}
                                </div>
                            </div>
                        </div>
                    </div>
            
        </>
    );
}

export default FormularioCompra;
