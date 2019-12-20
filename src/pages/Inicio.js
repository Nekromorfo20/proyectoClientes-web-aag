import React, {Component, Fragment} from 'react'

import InformacionAdicional from '../components/InformacionAdicional'
import TablaRegistros from '../components/TablaRegistros'

class Inicio extends Component{
    state = {
        registros: ['Registro fantasma']
    }

    async componentDidMount(){
        this.consultarClientes()
    }

    consultarClientes = async () => {
        const url =`http://localhost:8819/proyectoClientes/rest/proyectoClientesService/wsClientes_All`
        const respuesta = await fetch(url)
        const registros = await respuesta.json()

        this.setState({
            registros: registros.response.dsCustomer.dsCustomer.ttCustomer,
            registrosTotales: registros.response.registrosTotales
        }) 
    }

    handleClickArriba(){
        window.scrollTo(0,0)
    }

    render(){
        return(
            <Fragment>
                {/* Insercion de contenido de Inicio.js */}
                <button className="ir_arriba btn btn-info"
                    onClick={this.handleClickArriba}
                >
                    <i className="fas fa-arrow-circle-up mr-1"></i>Ir Arriba
                </button>

                <div className="container my-4">
                    <div className="row">
                        <InformacionAdicional 
                            registrosTotales={this.state.registrosTotales}
                        />
                    </div>
                    <div className="container my-4">
                        <div className="row">
                            <TablaRegistros 
                                registros={this.state.registros}
                            />
                        </div>
                    </div>
                </div>
                {/* Fin Inicio.js */}
            </Fragment>
        )
    }
}
export default Inicio