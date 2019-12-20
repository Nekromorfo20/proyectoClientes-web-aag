import React, {Component} from 'react'
import Swal from 'sweetalert2'
import { setInterval } from 'timers'

class AlertaBorrar extends Component{

    //Falta validar que el la tabla Order el Cliente no tenga el order.status = shipped, si no da error 500
    //Se borro el cliente con C
    /*
    //Codigo de progress 4gl para reviar la tabla
        CURRENT-WINDOW:WIDTH = 200.
        FOR EACH Customer, EACH Order OF Customer WHERE Customer.CustNum = 5 NO-LOCK:
            DISPLAY Customer EXCEPT Comments WITH FRAME xi WIDTH 200.
            DISPLAY Order WITH FRAME xii WIDTH 200.
        END. 
    */
    handleclick = () => {
        const dato = this.props.cliente
        let urlDELETE = `http://localhost:8819/proyectoClientes/rest/proyectoClientesService/wsClientes?IdClieDel=${dato.CustNum}`

        Swal.fire({
            title:'Eliminar registro',
            text: `Desea eliminar el cliente ${dato.CustNum} - ${dato.Name}`,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            showLoaderOnConfirm: true,
            preConfirm: () => {
                fetch(urlDELETE, {method: 'DELETE'})
                .then(response => {
                    console.log('Cliente eliminado', response)
                    Swal.fire('Cliente elminado','Se borro el cliente con exito','success')
                    setInterval(()=> {
                        window.location.reload(true);
                    }, 3000)
                })
                .catch(error => {
                    console.log(error)
                    Swal.fire('Error','Ocurrio un error al borrar el cliente','error')
                })
            }
        })
    }
    render(){
        return(
            <button className="btn btn-danger"
            onClick={this.handleclick}>
                <i className="fas fa-trash"></i>
                <span className="boton_text_ocultar ml-1">Eliminar</span>
            </button>
        )
    }
}
export default AlertaBorrar