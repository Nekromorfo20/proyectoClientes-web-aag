import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from './components/Layout';
import Inicio from './pages/Inicio'
import InformacionCliente from './pages/InformacionCliente'
import AgregarCliente from './pages/AgregarCliente'
import EditarCliente from './pages/EditarCliente'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Inicio}/>
          <Route exact path="/InformacionCliente/:idCliente/Informacion" component={InformacionCliente}/>
          <Route exact path="/AgregarCliente" component={AgregarCliente}/>
          <Route exact path="/EditarCliente/:idCliente/Editar" component={EditarCliente}/>
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
