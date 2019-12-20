import React,{Component, Fragment} from 'react'
import { Link } from 'react-router-dom';
import './styles/InformacionCliente.css'


class InformacionCliente extends Component{
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
            EmailAddress: ''
        }
    
    componentDidMount(){
        this.consultarCliente()
    }

    consultarCliente = async () => {
        //${this.props.match.params.idCliente}    Aqui se esta accediendo a ReactRouting para tomar los parametros id que necesita la url para realizar la consulta en Progress
        const url = `http://localhost:8819/proyectoClientes/rest/proyectoClientesService/wsClientes?IdCust=${this.props.match.params.idCliente}`
        try {
            const respuesta = await fetch(url)
            const informacion = await respuesta.json()
            const informacionObtenida = informacion.dsCustomer.ttCustomer
            informacionObtenida.forEach((element) => {
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
                    EmailAddress: element.EmailAddress
                })
            })
        } catch(error) {
            console.log('Error: ', error)
        }

    }

    render(){
        const dato = this.state
        return(
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="display-4">Informacion del Cliente</h1>
                            <hr />
                        </div>
                    </div> {/* Fin del row titulo */}

                    <div className="row my-2">
                        <div className="col-12">
                            <div className="row" >
                                {/* columna para mostrar logotipo  */}
                                <div className="col-12 col-md-4">
                                    <div className="row d-flex justify-content-center">
                                        <h3 className="font-weight-bold text-primary">Logotipo del cliente</h3>
                                    </div>
                                    <div className="row d-flex justify-content-center">
                                        <img src="http://lorempixel.com/250/250/" className="img-fluid" alt="foto1" />
                                        {/* <img src="http://via.placeholder.com/250x250/55595c?text=Placeholder" className="img-fluid" alt="foto1" /> */}
                                    </div>
                                </div>
                                {/* columna para formulario */}
                                <div className="col-12- col-md-8 mt-2 border border-success">
                                    <form id="formualrio_POST">
                                        {/* grupo informacion de la empresa: id, nombre y codigopostal */}
                                        <p className="h4 font-weight-bold text-primary mt-2">Informacion de la empresa cliente</p>
                                        <div className="form-group row">
                                            <div className="col-12 col-md-4">
                                                <p className="h6">ID cliente: <span className="text-success" id="id_GET_unico">{dato.CustNum}</span></p>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <p className="h6">Pais: <span className="text-success" id="pais_GET_unico">{dato.Country}</span></p>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <p className="h6">Codigo Postal: <span className="text-success" id="codigopostal_GET_unico">{dato.PostalCode}</span></p>
                                            </div>
                                        </div>
                                        {/* grupo informacion de la empresa: pais, estado y ciudad */}
                                        <div className="form-group row">
                                            <div className="col-12 col-md-4">
                                                <p className="h6">Nombre: <span className="text-success" id="nombre_GET_unico">{dato.Name}</span></p>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <p className="h6">Estado: <span className="text-success" id="estado_GET_unico">{dato.State}</span></p>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <p className="h6">Ciudad: <span className="text-success" id="ciudad_GET_unico">{dato.City}</span></p>
                                            </div>
                                        </div>
                                        {/* grupo informacion de la empresa: direccion y direccion interior */}
                                        <div className="form-group row">
                                            <div className="col-12 col-md-6 mb-1">
                                                <p className="h6">Direccion:</p>
                                                <p className="text-success h6" id="direccion_GET_unico">{dato.Address}</p>
                                            </div>
                                            <div className="col-12 col-md-6 mb-1">
                                                <p className="h6">Direccion Interior:</p>
                                                <p className="text-success h6" id="direccioninterior_GET_unico">{dato.Address2}</p>
                                            </div>
                                        </div>

                                        {/* grupo informacion de contacto */}
                                        <p className="h4 font-weight-bold text-primary mt-3">Informacion de contacto</p>
                                        <div className="form-group row">
                                            {/* grupo informacion de contacto: Nombre cliente, telefono */}
                                            <div className="col-12 col-md-6 mb-1">
                                                <p className="h6">Nombre contacto: <span className="text-success" id="nombrecontacto_GET_unico">{dato.Contact}</span></p>
                                            </div>
                                            <div className="col-12 col-md-6 mb-1">
                                                <p className="h6">Telefono:<span className="text-success" id="telefono_GET_unico">{dato.Phone}</span></p>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            {/* grupo informacion de contacto: Correo electronico, fax */}
                                            <div className="col-12 col-md-6 mb-1">
                                                <p className="h6">Correo electronico: <span className="text-success" id="correo_GET_unico">{dato.EmailAddress}</span></p>
                                            </div>
                                            <div className="col-12 col-md-6 mb-1">
                                                <p className="h6">Fax:<span className="text-success" id="fax_GET_unico">{dato.Fax}</span></p>
                                            </div>
                                        </div>

                                        {/* grupo informacion financiera, teminos y comentarios */}
                                        <div className="form-group row">
                                            {/* grupo informacion financiera*/}
                                            <div className="col-12 col-md-6">
                                                <p className="h4 font-weight-bold text-primary mt-3">Informacion financiera</p>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <p className="h6">Limite de credito: <span className="text-success" id="limitecredito_GET_unico">${dato.CreditLimit}</span></p>
                                                    </div>
                                                    <div className="col-12">
                                                        <p className="h6">Balance: <span className="text-success" id="balance_GET_unico">${dato.Balance}</span></p>
                                                    </div>
                                                    <div className="col-12">
                                                        <label className="h6">Descuento: <span className="text-success" id="descuento_GET_unico">{dato.Discount}%</span></label>
                                                    </div>
                                                    <div className="col-12">
                                                        <p className="h6">Reporte de ventas: <span className="text-success" id="reporteventas_GET_unico">{dato.SalesRep}</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* grupo teminos y comentarios */}
                                            <div className="col-12 col-md-6">
                                            <p className="h4 font-weight-bold text-primary mt-3">Terminos y comentarios</p>
                                            <div className="row">
                                                    <div className="col-12">
                                                        <label className="h6">Terminos: <span className="text-success" id="terminos_GET_unico">{dato.Terms}</span></label>
                                                    </div>
                                                    <div className="col-12">
                                                        <label className="h6">Comentarios:</label>
                                                        <textarea className="form-control" id="comentarios_GET_unico" rows="4" defaultValue={dato.Comments} readOnly/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </form>
                                </div> {/* fin columna formulario */}
                            </div>
                        </div>
                    </div> {/* Fin del row formulario */}
                    {/* Grupo de botones Regresar, Eliminar y Editar */}
                    <div className="row mb-4">
                        <div className="col-4 d-flex justify-content-start">
                            <Link to="/">
                                <button className="btn btn-info">
                                    <i className="fas fa-arrow-left"></i>
                                    <span className="boton_text_ocultar ml-1">Regresar a Inicio</span>
                                </button>
                            </Link>
                        </div>
                        <div className="col-8 d-flex justify-content-end">
                            <button className="btn btn-danger">
                                <i className="fas fa-trash"></i>
                                <span className="boton_text_ocultar ml-1">Eliminar cliente</span>
                            </button>
                            <Link to={`/EditarCliente/${dato.CustNum}/Editar`} className="ml-3">
                                <button className="btn btn-warning">
                                    <i className="fas fa-user-edit"></i>
                                    <span className="boton_text_ocultar ml-1">Editar Informacion</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>{/* Fin del container */}
            </Fragment>
        )
    }
}
export default InformacionCliente