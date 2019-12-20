import React from 'react'

const Footer = () => (
  <footer className="bg-dark">
    <div className="container text-md-left text-center p-3 d-none d-sm-none d-md-block">
        <div className="row">

        {/* Col para redes sociles */}
        <div className="col-12 col-md-4">
            <h5 className="text-white">Redes sociales</h5>
            <ul className="list-unstyled text-small">
                <li><a href="#!" className="text-white"><i className="fas fa-globe mr-2"></i>Pagina Web</a></li>
                <li><a href="#!" className="text-white"><i className="fab fa-facebook mr-2"></i>Facebook</a></li>
                <li><a href="#!" className="text-white"><i className="fab fa-twitter-square mr-2"></i>Twitter</a></li>
                <li><a href="#!" className="text-white"><i className="fab fa-instagram mr-2"></i>Instragram</a></li>
                <li><a href="#!" className="text-white"><i className="fab fa-youtube mr-2"></i>Youtube</a></li>
            </ul>
        </div>

        <hr className="clearfix w-100 d-md-none"/>

        {/* Col para Hecerda de */}
        <div className="col-12 col-md-4">
            <h5 className="text-white">Hacerca de nosotros</h5>
            <ul className="list-unstyled text-small">
                <li><a href="#!" className="text-white">¿Quienes somos?</a></li>
                <li><a href="#!" className="text-white">Mision y Vision</a></li>
                <li><a href="#!" className="text-white">Grupos de interes</a></li>
                <li><a href="#!" className="text-white">Donde nos encontramos</a></li>
                <li><a href="#!" className="text-white">Mas informacion</a></li>
            </ul>
        </div>

        <hr className="clearfix w-100 d-md-none"/>

        {/* col para Noicias */}
        <div className="col-12 col-md-4">
            <h5 className="text-white">Noticias</h5>
            <ul className="list-unstyled text-small">
                <li><a href="#!" className="text-white">Historias de casos de exito</a></li>
                <li><a href="#!" className="text-white">Vision 2020</a></li>
                <li><a href="#!" className="text-white">Tendencias en redes sociales</a></li>
                <li><a href="#!" className="text-white">Esta semana en tecnologia</a></li>
            </ul>
        </div>
        </div> {/* fin row */}
    </div> {/* fin container */}

        {/* div copyright */}
    <div className="footer-copyright text-center text-white p-2">
            Sistemas A3 S.A de C.V © 2019 - 2020
    </div>
  </footer>
)
export default Footer