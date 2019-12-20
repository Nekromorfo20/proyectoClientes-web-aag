import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom';
import AlertaBorrar from './AlertaBorrar'
import './styles/TableRegistros.css'
import BarraBusqueda from './BarraBusqueda';

class TablaRegistros extends Component{
    constructor(props){
        super(props)
        this.state = {
            todos: [],
            paginaActual: '',
            todosPorPagina: '',
            elementoCargado: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidUpdate(){
        const registroTotales = this.props.registros
        if(!this.state.elementoCargado){
            this.setState({
                todos: registroTotales,
                paginaActual: 1,
                todosPorPagina: 50,
                elementoCargado: true
            })
        }
    }

    handleClick(event){
        this.setState({
            paginaActual: Number(event.target.id)
        })
    }

    render(){
        const registros = this.props.registros
        
        //logica para el despliege de todos los registros
        const { todos, paginaActual, todosPorPagina } = this.state
        const ultimoTodos = paginaActual * todosPorPagina
        const primeroTodos = ultimoTodos - todosPorPagina
        const actualTodos = todos.slice(primeroTodos, ultimoTodos)

        const mostrarTodos = actualTodos.map((registro, index) => {
            return (<tr key={index}>
                        <td>{registro.CustNum}</td>
                        <td>{registro.Name}</td>
                        <td>{registro.Address}</td>
                        <td>{registro.State}</td>
                        <td>{registro.City}</td>
                        <td>{registro.Phone}</td>
                        <td>
                        <Link to={`/InformacionCliente/${registro.CustNum}/Informacion`}>
                            <button className="btn btn-info">
                                <i className="fas fa-plus-square"></i>
                                <span className="boton_text_ocultar ml-1">Ver mas</span>
                            </button>
                            </Link>
                        </td>
                        <td>
                            <AlertaBorrar 
                                cliente={registro}
                            />
                        </td>
                   </tr>)
        })

        //logica para el despliege de numero de paginas
        const arregloPaginas = []
        for(let i = 1; i <= Math.ceil(todos.length / todosPorPagina); i++){
            arregloPaginas.push(i)
        }
        const renderizarPaginas = arregloPaginas.map(pagina => {
            return (<li key={pagina} className="page-item">
                        <button id={pagina} onClick={this.handleClick}
                        className={arregloPaginas[pagina-1] === paginaActual ? 'btn btn-primary mr-2 ' : 'btn mr-2'}>{pagina}</button>
                    </li>)
        })

        return(
            <Fragment>
                {/* Form y button Agregar Cliente */}
                <BarraBusqueda 
                    registros={registros}
                />
                {/* Tabla de consulta */}
                <div className="table-responsive">
                    <table className="table table-hover table-striped text-center">
                        <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Direccion</th>
                            <th>Estado</th>
                            <th>Ciudad</th>
                            <th>Telefono</th>
                            <th>Mas informacion</th>
                            <th>Eliminar registro</th>
                        </tr>
                            {mostrarTodos}
                        </tbody>
                    </table>
                </div>
                <nav className="table-responsive mb-2">
                    <ul id="page-numbers" className="pagination mb-0">
                        {renderizarPaginas}
                    </ul>
                </nav>
            </Fragment>
        )
    }
}
export default TablaRegistros