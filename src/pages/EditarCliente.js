import React, {Component, Fragment} from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

class EditarCliente extends Component{
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
        ErrorName: '',
        ErrorPostalCode: '',
        ErrorCountry: '',
        ErrorState: '',
        ErrorCity: '',
        ErrorAddress: '',
        ErrorContact: '',
        ErrorPhone: '',
        ErrorCreditLimit: '',
        ErrorSalesRep: '',
        ErrorDiscount: '',
        ErrorBalance: '',
        ErrorTerms: '',
    }

    async componentDidMount(){
        await this.cargarInformacion()
    }

    cargarInformacion = async() => {
        const urlCargar = `http://localhost:8819/proyectoClientes/rest/proyectoClientesService/wsClientes?IdCust=${this.props.match.params.idCliente}`
        try {
            const respuesta = await fetch(urlCargar)
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

    //Controlador del Formulario, toma los eventos onChange de los input y los pasa al state
    handleChangeGeneral(event){
        this.setState({ 
            ...this.state,
            [event.target.name]: event.target.value})
    }

    validarFormulario = () => {
        //Variables para establecer mensajes en el formulario
        let errorName = ''
        let errorPostalCode= ''
        let errorCountry = ''
        let errorState = ''
        let errorCity = ''
        let errorAddress = ''
        let errorContact = ''
        let errorPhone = ''
        let errorCreditLimit = ''
        let errorSalesRep = ''
        let errorDiscount = ''
        let errorBalance = ''
        let errorTerms = ''

        //Validacion de cada uno de los campos
        if(!this.state.Name || this.state.Name == null){
            errorName = 'Favor de ingresar un nombre'
            document.querySelector('input[name="Name"]').focus()
        }
        if(!this.state.PostalCode || this.state.PostalCode == null){
            errorPostalCode = 'Favor de ingresa un codigo postal valido'
            document.querySelector('input[name="PostalCode"]').focus()
        }
        if(!this.state.Country || this.state.Country == null){
            errorCountry = 'Favor de seleccionar un pais'
            document.querySelector('select[name="Country"]').focus()
        }
        if(!this.state.State || this.state.State == null || this.state.State.length !== 2){
            errorState = 'Favor de ingresar las dos primeras iniciales de un estado'
            document.querySelector('input[name="State"]').focus()
        }
        if(!this.state.City || this.state.City == null){
            errorCity = 'Favor de ingresa nombre de ciudad'
            document.querySelector('input[name="City"]').focus()
        }
        if(!this.state.Address || this.state.Address == null){
            errorAddress = 'Favor de ingresar una direccion'
            document.querySelector('textarea[name="Address"]').focus()
        }
        if(!this.state.Contact || this.state.Contact == null){
            errorContact = 'Favor de ingresar un nombre de contacto'
            document.querySelector('input[name="Contact"]').focus()
        }
        if(!this.state.Phone || this.state.Phone == null){
            errorPhone = 'Favor de ingresar un telefono de contacto'
            document.querySelector('input[name="Phone"]').focus()
        }
        if(!this.state.CreditLimit || this.state.CreditLimit === null || isNaN(this.state.CreditLimit) || this.state.CreditLimit <= 0){
            errorCreditLimit = 'Favor de ingresar un limite de credito valido'
            document.querySelector('input[name="CreditLimit"]').focus()
        } 
        if(this.state.Balance === null || isNaN(this.state.Balance) || this.state.Balance === ''){
            errorBalance = 'Favor de ingresar un balance valido'
            document.querySelector('input[name="Balance"]').focus()
        }
        if (this.state.Balance > this.state.CreditLimit){
            errorBalance = 'El limite de credito no puede ser menor al balance'
            document.querySelector('input[name="Balance"]').focus()
        }
        if(!this.state.Discount || this.state.Discount === null){
            errorDiscount = 'Favor de ingresar un descuento valido'
            document.querySelector('input[name="Discount"]').focus()
        }
        if(this.state.Discount >= 100){
            errorDiscount = 'No puede haber un descuento del 100%'
            document.querySelector('input[name="Discount"]').focus()
        }
        if(!this.state.SalesRep || this.state.SalesRep == null){
            errorSalesRep = 'Favor de seleccionar un tipo de reporte de ventas'
            document.querySelector('select[name="SalesRep"]').focus()
        }
        if(!this.state.Terms || this.state.Terms == null){
            errorTerms = 'Favor de seleccionar una condicion de Terminos'
            document.querySelector('select[name="Terms"]').focus()
        }

        //Valida que todos los campos esten vacios, si no coloca los errores
        if(errorName || errorPostalCode || errorCountry || errorState || errorCity || errorAddress || errorContact || errorPhone || errorCreditLimit || errorBalance || errorDiscount || errorSalesRep || errorTerms){
            this.setState({
                ErrorName: errorName,
                ErrorPostalCode: errorPostalCode,
                ErrorCountry: errorCountry,
                ErrorState: errorState,
                ErrorCity: errorCity,
                ErrorAddress: errorAddress,
                ErrorContact: errorContact,
                ErrorPhone: errorPhone,
                ErrorCreditLimit: errorCreditLimit,
                ErrorBalance: errorBalance,
                ErrorDiscount: errorDiscount,
                ErrorSalesRep: errorSalesRep,
                ErrorTerms: errorTerms
            })
            return false
        } else {
            this.setState({
                ErrorName: '',
                ErrorPostalCode: '',
                ErrorCountry: '',
                ErrorState: '',
                ErrorCity: '',
                ErrorAddress: '',
                ErrorContact: '',
                ErrorPhone: '',
                ErrorCreditLimit: '',
                ErrorSalesRep: '',
                ErrorDiscount: '',
                ErrorBalance: '',
                ErrorTerms: '',
            })
            return true
        }

    }

    handleSubmit = (event) => {
        event.preventDefault()
        let validacion = this.validarFormulario()

        if(validacion === true){
            let datos_PUT = `?edita_CustNum=${this.state.CustNum}`+
                        `&edita_Name=${this.state.Name}`+
                        `&edita_Address=${this.state.Address}`+
                        `&edita_Address2=${this.state.Address2}`+
                        `&edita_Country=${this.state.Country}`+
                        `&edita_City=${this.state.City}`+
                        `&edita_State=${this.state.State}`+
                        `&edita_PostalCode=${this.state.PostalCode}`+
                        `&edita_Contact=${this.state.Contact}`+
                        `&edita_Phone=${this.state.Phone}`+
                        `&edita_SalesRep=${this.state.SalesRep}`+
                        `&edita_CreditLimit=${this.state.CreditLimit}`+
                        `&edita_Balance=${this.state.Balance}`+
                        `&edita_Terms=${this.state.Terms}`+
                        `&edita_Discount=${this.state.Discount}`+
                        `&edita_Comments=${this.state.Comments}`+
                        `&edita_Fax=${this.state.Fax}`+
                        `&edita_EmailAddress=${this.state.EmailAddress}`
            let urlPUT = `http://localhost:8819/proyectoClientes/rest/proyectoClientesService/wsClientes${datos_PUT}`
            Swal.fire({
                title:'¿Guardar cambios?',
                text: 'Se guardaran los cambios, revise que toda la informacion sea correcta',
                type: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Guardar cambios',
                showLoaderOnConfirm: true,
                preConfirm: () => {
                    fetch(urlPUT, {method: 'PUT'})
                    .then(response => {
                        console.log('Informacion guardada', response)
                        Swal.fire('Datos guardados','Se guardo la informacion correctamente','success')
                        this.props.history.push(`/InformacionCliente/${this.props.match.params.idCliente}/Informacion`)
                    })
                    .catch(error => {
                        console.log(error)
                        Swal.fire('Error','Ocurrio un error en la transaccion','error')
                    })
                }
            })
        } else {
            console.log('Algo esta mal')
        }
    }

    render(){
        return(
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="display-4">Modifica la informacion del cliente</h1>
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
                                        <img src="http://via.placeholder.com/250x250/55595c?text=Placeholder" className="img-fluid" alt="foto1" />
                                        <form className="mt-2">
                                            <div className="custom-file">
                                                <input type="file" className="custom-file-input" id="validatedCustomFile" />
                                                <label className="custom-file-label">Escoger archivo...</label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                {/* columna para formulario */}
                                <div className="col-12- col-md-8 mt-2">
                                    <form onSubmit={this.handleSubmit}>
                                        {/* grupo informacion de la empresa: id, nombre y codigopostal */}
                                        <p className="h4 font-weight-bold text-primary mt-3">Informacion de empresa cliente</p>
                                        <p className="text-muted d-flex justify-content-start">Los campos con asterisco(*) son obligatorios</p>
                                        <div className="form-group row">
                                            <div className="col-12 col-md-4 mb-1">
                                                <label className="h6">ID cliente:*</label>
                                                <input type="number" className="form-control" name="CustNum" defaultValue={this.state.CustNum} placeholder="Ingresa el id del cliente" readOnly/>
                                            </div>
                                            <div className="col-12 col-md-4 mb-1">
                                                <label className="h6">Nombre Cliente:*</label>
                                                <input type="text" className="form-control" name="Name" placeholder="Ingresa el nombre cliente" value={this.state.Name} onChange={this.handleChangeGeneral.bind(this)}/>
                                                <small className="text-danger" name="ErrorName">{this.state.ErrorName}</small>
                                            </div>
                                            <div className="col-12 col-md-4 mb-1">
                                                <label className="h6">Codigo Postal:*</label>
                                                <input type="number" className="form-control" name="PostalCode" placeholder="Ingresa un codigo postal" value={this.state.PostalCode} onChange={this.handleChangeGeneral.bind(this)}/>
                                                <small className="text-danger" name="ErrorPostalCode">{this.state.ErrorPostalCode}</small>
                                            </div>
                                        </div>
                                        {/* grupo informacion de la empresa: pais, estado y ciudad */}
                                        <div className="form-group row">
                                            <div className="col-12 col-md-4 mb-1">
                                                <label className="h6">Pais:*</label>
                                                <select name="Country" id="pais_PUT" className="form-control" value={this.state.Country} onChange={this.handleChangeGeneral.bind(this)}>
                                                    <option value="">--Selecionar un pais--</option>
                                                    <option value="USA">USA</option>
                                                    <option value="FindLand">FindLand</option>
                                                    <option value="United Kingdom">United Kingdom</option>
                                                    <option value="Mexico">Mexico</option>
                                                    <option value="Austria">Austria</option>
                                                    <option value="France">France</option>
                                                    <option value="Nederland">Nederland</option>
                                                    <option value="Itali">Itali</option>
                                                    <option value="Sverige">Sverige</option>
                                                </select>
                                                <small className="text-danger" name="ErrorCountry">{this.state.ErrorCountry}</small>
                                            </div>
                                            <div className="col-12 col-md-4 mb-1">
                                                <label className="h6">Estado (dos letras):*</label>
                                                <input type="text" className="form-control" name="State" placeholder="Ingresa un estado" value={this.state.State} onChange={this.handleChangeGeneral.bind(this)}/>
                                                <small className="text-danger" name="ErrorState">{this.state.ErrorState}</small>
                                            </div>
                                            <div className="col-12 col-md-4 mb-1">
                                                <label className="h6">Ciudad:*</label>
                                                <input type="text" className="form-control" name="City" placeholder="Ingresa una ciudad" value={this.state.City} onChange={this.handleChangeGeneral.bind(this)}/>
                                                <small className="text-danger" name="ErrorCity">{this.state.ErrorCity}</small>
                                            </div>
                                        </div>
                                        {/* grupo informacion de la empresa: direccion y direccion interior */}
                                        <div className="form-group row">
                                            <div className="col-12 col-md-6 mb-1">
                                                <label className="h6">Direccion:*</label>
                                                <textarea className="form-control" name="Address" id="direccion_PUT" placeholder="Ingrese la direccion de la empresa" rows="3"
                                                value={this.state.Address} onChange={this.handleChangeGeneral.bind(this)}/>
                                                <small className="text-danger" name="ErrorAddress">{this.state.ErrorAddress}</small>
                                            </div>
                                            <div className="col-12 col-md-6 mb-1">
                                                <label className="h6">Direccion Interior:</label>
                                                <textarea className="form-control" name="Address2" id="direccioninterior_PUT" placeholder="Ingrese la direccion de la oficina o sucursal" rows="3"
                                                value={this.state.Address2} onChange={this.handleChangeGeneral.bind(this)}/>
                                            </div>
                                        </div>

                                        {/* grupo informacion de contacto */}
                                        <p className="h4 font-weight-bold text-primary mt-3">Informacion de contacto</p>
                                        <div className="form-group row">
                                            {/* grupo informacion de contacto: Nombre cliente, telefono */}
                                            <div className="col-12 col-md-6 mb-1">
                                                <label className="h6">Nombre contacto:*</label>
                                                <input type="text" className="form-control" name="Contact" placeholder="Ingrese el nombre de la persona contacto" value={this.state.Contact} onChange={this.handleChangeGeneral.bind(this)}/>
                                                <small className="text-danger" name="ErrorContact">{this.state.ErrorContact}</small>
                                            </div>
                                            <div className="col-12 col-md-6 mb-1">
                                                <label className="h6">Telefono:*</label>
                                                <input type="text" className="form-control" name="Phone" placeholder="Ingrese el numero de contacto" value={this.state.Phone} onChange={this.handleChangeGeneral.bind(this)}/>
                                                <small className="text-danger" name="ErrorPhone">{this.state.ErrorPhone}</small>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            {/* grupo informacion de contacto: Correo electronico, fax */}
                                            <div className="col-12 col-md-6 mb-1">
                                                <label className="h6">Correo electronico:</label>
                                                <input type="text" className="form-control" name="EmailAddress" placeholder="Ingrese un email de contacto" value={this.state.EmailAddress} onChange={this.handleChangeGeneral.bind(this)}/>
                                            </div>
                                            <div className="col-12 col-md-6 mb-1">
                                                <label className="h6">Fax:</label>
                                                <input type="text" className="form-control" name="Fax" placeholder="Ingrese un numero de fax" value={this.state.Fax} onChange={this.handleChangeGeneral.bind(this)}/>
                                            </div>
                                        </div>

                                        {/* grupo informacion financiera, teminos y comentarios */}
                                        <div className="form-group row">
                                            {/* grupo informacion financiera*/}
                                            <div className="col-12 col-md-6">
                                                <p className="h4 font-weight-bold text-primary mt-3">Informacion financiera</p>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <label className="h6">Limite de credito:*</label>
                                                        <input type="number" step="any" className="form-control" name="CreditLimit" placeholder="Ingresa un limite de credito" value={this.state.CreditLimit} onChange={this.handleChangeGeneral.bind(this)}/>
                                                        <small className="text-danger" name="ErrorCreditLimit">{this.state.ErrorCreditLimit}</small>
                                                    </div>
                                                    <div className="col-12">
                                                        <label className="h6">Balance:*</label>
                                                        <input type="number" step="any" className="form-control" name="Balance" placeholder="Ingresa un credito de balance" value={this.state.Balance} onChange={this.handleChangeGeneral.bind(this)}/>
                                                        <small className="text-danger" name="ErrorBalance">{this.state.ErrorBalance}</small>
                                                    </div>
                                                    <div className="col-12">
                                                        <label className="h6">Descuento:*</label>
                                                        <input type="number" step="any" className="form-control" name="Discount" placeholder="Ingresa un porcentaje de descuento" value={this.state.Discount} onChange={this.handleChangeGeneral.bind(this)}/>
                                                        <small className="text-danger" name="ErrorDiscount">{this.state.ErrorDiscount}</small>
                                                    </div>
                                                    <div className="col-12">
                                                        <label className="h6">Reporte de ventas:*</label>
                                                        <select name="SalesRep" id="reporteventas_PUT" className="form-control" value={this.state.SalesRep} onChange={this.handleChangeGeneral.bind(this)}>
                                                            <option value="">--Seleccione un Reporte de ventas--</option>
                                                            <option value="HXM">HXM</option>
                                                            <option value="DKP">DKP</option>
                                                            <option value="SLS">SLS</option>
                                                            <option value="JAL">JAL</option>
                                                            <option value="DOS">DOS</option>
                                                            <option value="GPE">GPE</option>
                                                            <option value="RDR">RDR</option>
                                                            <option value="KIK">KIK</option>
                                                            <option value="BBB">BBB</option>
                                                        </select>
                                                        <small className="text-danger" name="ErrorSalesRep">{this.state.ErrorSalesRep}</small>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* grupo teminos y comentarios */}
                                            <div className="col-12 col-md-6">
                                            <p className="h4 font-weight-bold text-primary mt-3">Terminos y comentarios</p>
                                            <div className="row">
                                                    <div className="col-12">
                                                        <label className="h6">Terminos*:</label>
                                                        <select name="Terms" id="terminos_PUT" className="form-control" value={this.state.Terms} onChange={this.handleChangeGeneral.bind(this)}>
                                                            <option value="">--Seleccione un contrato--</option>
                                                            <option value="Net30">Net30</option>
                                                            <option value="NA">No aplica</option>
                                                        </select>
                                                        <small className="text-danger" name="ErrorTerms">{this.state.ErrorTerms}</small>
                                                    </div>
                                                    <div className="col-12">
                                                        <label className="h6">Comentarios</label>
                                                        <textarea className="form-control" id="comentarios_PUT" name="Comments" placeholder="Ingrese comentarios sobre la aplicacion de descuentos o balance" rows="4"
                                                        value={this.state.Comments} onChange={this.handleChangeGeneral.bind(this)}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* grupo row botones cancelar y agregar */}
                                        <div className="form-group row">
                                            <div className="col-12 d-flex justify-content-end">
                                                    <button type="submit" className="btn btn-primary mr-3"><i className="far fa-save mr-1"></i>Guardar informacion</button>
                                                <Link to="/">
                                                    <button className="btn btn-secondary">Regresar</button>
                                                </Link>
                                            </div>
                                        </div>

                                    </form>
                                </div> {/* fin columna formulario */}
                            </div>
                        </div>
                    </div> {/* Fin del row formulario */}
                </div>{/* Fin del container */}
            </Fragment>
        )
    }
}
export default EditarCliente