import React from 'react';
import AppNavbar from './components/AppNavbar';
import CarouselPage from './components/Carousel';
import Features from './components/Features';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import About from './components/About';
import FarmersAskFarmers from './components/FarmersAskFarmers';
import Infos from './components/Infos';
import QuestionModal from './components/QuestionModal';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Default from './components/Default';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
// import ShoppingList from './components/ShoppingList';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';
// import ItemModal from './components/ItemModal';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Community from './components/Community';
import Modal from './components/Modal';
import Soil from './components/Soil';
import Crop from './components/Crop';
import Location from './components/Location';
import Schemes from './components/Schemes';
import CropSuggest from './components/CropSuggest';
import ModernFarming from './components/ModernFarming';

import SideIncome from './components/SideIncome';
import Scroll from './components/Scroll';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        {/* <div className="App">
       <AppNavbar />
       
       <Container>
       <ItemModal />
       <ShoppingList />
       </Container>
       
      </div> */}
        <Router>
          <Switch>
            <Route path="/" exact>
              <AppNavbar />
              <CarouselPage />
              <Features />
              <Testimonial />
              <Scroll />
              <Footer />
            </Route>
            <Route path="/about">
              <AppNavbar />
              <About />
              <Scroll />
              <Footer />
            </Route>
            <Route path="/community" exact>
              <AppNavbar />
              <QuestionModal />
              <FarmersAskFarmers />
              <Scroll />
              <Footer />
            </Route>
            <Route path="/community/answer" exact>
              <AppNavbar />
              <Infos />
              <Scroll />
              <Footer />
            </Route>
            <Route path="/soil">
              <AppNavbar />
              <Soil />
              <Scroll />
              <Footer />
            </Route>
            <Route path="/schemes">
              <AppNavbar />
              <Schemes />
              <Scroll />
              <Footer />
            </Route>
            <Route path="/buy">
              <AppNavbar />
              <Navbar />
              <switch>
                <Route path="/buy" exact>
                  <ProductList />
                </Route>
                <Route path="/buy/details">
                  <Details />
                </Route>
                <Route path="/buy/cart">
                  <Cart />
                </Route>
                <Route path="/buy/default">
                  <Default />
                </Route>
                <Modal />
              </switch>
              <Scroll />
              <Footer />
            </Route>
            <Route path="/location">
              <AppNavbar />
              <Location />
              <Scroll />
              <Footer />
            </Route>
            <Route path="/modern">
              <AppNavbar />
              <ModernFarming />
              <Scroll />
              <Footer />
            </Route>
            <Route path="/sideIncome">
              <AppNavbar />
              <SideIncome />
              <Scroll />
              <Footer />
            </Route>
            <Route path="/crop">
              <AppNavbar />
              <Crop />
              <Scroll />
              <Footer />
            </Route>
            <Route path="/suggest" exact>
              <AppNavbar />
              <CropSuggest />
              <Scroll />
              <Footer />
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
