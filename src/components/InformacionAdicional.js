import React, { Fragment } from 'react'


const InformacionAdicional = ({ registrosTotales }) => {
    
    function fechaActualizada() {
            let fechaHoy = new Date()
            let mes = fechaHoy.getMonth()+1;
            let dia = fechaHoy.getDate();
            let anio = fechaHoy.getFullYear();
            return `${dia}/${mes}/${anio}`
        }
        
        return(
            <Fragment>
                <div className="col-12 col-md-6 order-2 order-md-1">
                    <h4 className="display-4 text-center">Registros encontrados sobre clientes</h4>
                    <hr className="d-sm-block d-md-none"/>
                </div>
                <div className="col-12 col-md-6 order-1 order-md-2">
                    <div className="card bg-success">
                        <div className="card-header"><h4 className="text-center text-white">Informacion adicional de la tabla</h4></div>
                        <div className="card-body">
                            <div className="card-text">
                                <p className="text-white">Registros encontrados: {registrosTotales}</p>
                                <p className="text-white">Informacion actualizada a: {fechaActualizada()}</p>
                                <p className="text-white font-weight-bold">Tabla establecida para mostrar 50 registros por pagina *</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
}
export default InformacionAdicional
