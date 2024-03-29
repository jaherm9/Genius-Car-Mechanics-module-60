import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Booking from './Pages/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound';
import Header from './Pages/Shared/Header/Header';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>

        {/* Dynamic route */}
        <Route path="/booking/:serviceId">
          <Booking></Booking>
        </Route>


        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
