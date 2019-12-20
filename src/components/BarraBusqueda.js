import React, {Component, Fragment} from 'react'
import { Link } from 'react-router-dom';
import AlertaBorrar from './AlertaBorrar'

class BarraBusqueda extends Component{

    state = {
            CustNum: '',
            Country: '',
            Name: '',
            Address: '',
            Address2: '',
            City: '',
            State: '',
            PostalCode: '',
            Contact: '',
            Phone: '',
            SalesRep: '',
            CreditLimit: '',
            Balance: '',
            Terms: '',
            Discount: '',
            Comments: '',
            Fax: '',
            EmailAddress: '',
            ErrorIdBuscado: ''
    }
    componentDidMount(){
        document.querySelector('div[name="Encontrado"]').style.display='none'
    }

    existeCliente(id_buscado){
        return this.props.registros.some((dato) => {
            if(dato.CustNum === id_buscado){
                return true
            } else {
                return false
            }
        })
    }

    //AQUI ME QUEDE, hay que recorrer el registro pasado por props y que este se envia a el link de informacion cliente
    handleClick = (event) => {
        event.preventDefault()
        this.setState({ ErrorIdBuscado: '' })
        let id_buscado = document.querySelector('input[name="id_buscado"]').value
        id_buscado = parseInt(id_buscado)

        if(id_buscado === null || id_buscado <= 0 || isNaN(id_buscado)){
             this.setState({ ErrorIdBuscado: 'Favor de ingresar un ID valido' })
             document.querySelector('div[name="Encontrado"]').style.display='none'
            document.querySelector('input[name="id_buscado"]').focus()
            return false
        }
        let validacion = this.existeCliente(id_buscado)
        if(validacion === true){
            this.props.registros.forEach((element) => {
                if(element.CustNum === id_buscado){
                    this.setState({
                        CustNum: element.CustNum,
                        Name: element.Name,
                        Country: element.Country,
                        Address: element.Address,
                        Address2: element.Address2,
                        City: element.City,
                        State: element.State,
                        PostalCode: element.PostalCode,
                        Contact: element.Contact,
                        Phone: element.Phone,
                        SalesRep: element.SalesRep,
                        CreditLimit: element.CreditLimit,
                        Balance: element.Balance,
                        Terms: element.Terms,
                        Discount: element.Discount,
                        Comments: element.Comments,
                        Fax: element.Fax,
                        EmailAddress: element.EmailAddress,
                    })
                document.querySelector('div[name="Encontrado"]').style.display='block'
                } 
            });
        }
        else {
            this.setState({ ErrorIdBuscado: 'No existe el ID buscado' })
            document.querySelector('div[name="Encontrado"]').style.display='none'
            return false
        }

    }

    render(){
        return(
            <Fragment>
                <div className="col-8">
                    <form className="form-group row">
                        <div className="col-12 col-md-8 mt-1">
                            <input type="number" name="id_buscado" className="form-control" placeholder="Busca un cliente por su ID"/>
                            <small className="text-danger" name="ErrorIdBuscado">{this.state.ErrorIdBuscado}</small>
                        </div>
                        <div className="col-12 col-md-4 mt-1">
                            <button type="submit" className="btn btn-success"
                                onClick={this.handleClick}
                            >
                                <i className="fas fa-search mr-1"></i>
                                <span>Buscar</span>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-4">
                <Link to="/AgregarCliente">
                        <button className="btn btn-primary">
                        <i className="fas fa-user-plus mr-2"></i>
                        <span className="">Agregar Cliente</span>
                        </button>
                </Link>
                </div>
                {/* Esta tabla debe mostrarse al encontrar el usuario */}
                <div name="Encontrado" className="table-responsive border border-success mb-4">
                    <table className="table text-center">
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
                            <tr className="text-success">
                                <td>{this.state.CustNum}</td>
                                <td>{this.state.Name}</td>
                                <td>{this.state.Address}</td>
                                <td>{this.state.State}</td>
                                <td>{this.state.City}</td>
                                <td>{this.state.Phone}</td>
                                <td>
                                    <Link to={`/InformacionCliente/${this.state.CustNum}/Informacion`}>
                                        <button className="btn btn-info">
                                            <i className="fas fa-plus-square"></i>
                                            <span className="boton_text_ocultar ml-1">Ver mas</span>
                                        </button>
                                    </Link>
                                </td>
                                <td>
                                    <AlertaBorrar
                                        cliente={this.state}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Fragment>
        )
    }
}
export default BarraBusqueda