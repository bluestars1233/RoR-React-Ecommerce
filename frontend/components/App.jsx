import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import Modal from './modal/modal';
import Navbar from './navbar/navbar';
import EditShopContainer from './shop/edit_shop_container';
import CreateShopContainer from './shop/create_shop_container';
import ShopShowContainer from './shop/shop_show_container';
import CreateProductContainer from './product_form/create_product_container';
import EditProductForm from './product_form/edit_product_container';
import ProductShowContainer from './product_show/product_show_container';
import CategoryShowContainer from './category/category_show_container';
import EditUserProfileContainer from './user/edit_user_profile_container';



const App = () => (
    <div>
        <Modal/>
        <header>
            <Navbar />
        </header>

        {/* Route declaration */}
        <Switch>
            <AuthRoute path='/signup' component={SignupFormContainer} />
            <AuthRoute path='/login' component={LoginFormContainer} />

            <ProtectedRoute exact path='/shops/:shopId/edit' component={EditShopContainer} />
            <ProtectedRoute exact path='/shops/new' component={CreateShopContainer}/>
            <Route exact path='/shops/:shopId' component={ShopShowContainer}/>

            <ProtectedRoute exact path='/shops/:shopId/products/new' component={CreateProductContainer}/>
            <ProtectedRoute exact path='/products/:productId/edit' component={EditProductForm}/>
            <Route exact path='/shops/:shopId/products/:productId' component={ProductShowContainer}/>

            {/* <Route exact path='/categories' component={}/> */}
            <Route exact path='/categories/:categoryId' component={CategoryShowContainer}/>

            <ProtectedRoute exact path='/users/:userId/edit' component={EditUserProfileContainer}/>
            
        </Switch>
        
    </div>
)

export default App;