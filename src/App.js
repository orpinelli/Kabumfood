import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import ReacTooltip from 'react-tooltip';

import {Container, Menu, PagBody} from './AppStyled';
import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';

import PrivateRoute from "./components/PrivateRoute";
import Menuitem from "./components/Menuitem";
import Cart from './components/Cart';



export default () => {
    const name = useSelector(state => state.user.name);

    return (
        <BrowserRouter>
            <Container>
                <Menu>
                    <Menuitem title = "Loja" icon="./assets/store.png" link="/" />
                    <Menuitem title = "Pedidos" icon="./assets/order.png" link="/orders" />
                    <Menuitem title = "Conta" icon="./assets/profile.png" link="/profile" />
                </Menu>
                <PagBody>
                    <Switch>
                        <Route exact path="/">
                            <HomeScreen />
                        </Route>

                        <PrivateRoute exact path= "/orders">
                            <div> Tela de Pedidos</div>
                        </PrivateRoute>

                        <PrivateRoute exact path= "/profile">
                            <div> Tela de Perfil</div>
                        </PrivateRoute>
                        
                        <Route path="/tela2/:nome">
                            <Tela2Screen />
                        </Route>
                    </Switch>
                </PagBody>         
                <Cart/>
                <ReacTooltip id = "tip-top" place= "top" effect="solid"  />
                <ReacTooltip id = "tip-right" place= "right" effect="solid"  />

            </Container>
                

          
        </BrowserRouter>
    );
}