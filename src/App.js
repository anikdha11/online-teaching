
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import NotFound from './components/not found/NotFound';
import Features from './components/featcures/Features';
import Courses from './components/courses/Courses';
import SingUp from './components/singup/SingUp';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header></Header>
    <Switch>
      <Route exact path="/">
      <Home></Home>
      </Route>
      <Route path="/home">
      <Home></Home>
      </Route>
      <Route path="/courses">
      <Courses></Courses>
      </Route>
      <Route path="/about">
      <About></About>
      </Route>
      <Route path="/features">
       <Features></Features>
      </Route>
      <Route path="/singup">
      <SingUp></SingUp>
      </Route>
     

      <Route path="*">
     <NotFound></NotFound>
      </Route>
    </Switch>
     <Footer></Footer>
     </BrowserRouter>
    </div>
  );
}

export default App;
