import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from '../Header/Header'
import Footer from "../Footer/Footer";
import Main from "../Main/Main"
import Movies from "../Movies/Movies"
import SavedMovies from "../SavedMovies/SavedMovies"
import Profile from "../Profile/Profile"
import Register from "../Register/Register"
import Login from "../Login/Login"

import './App.css';
import NotFound from '../NotFound/NotFound';

function App() {

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="page">
        <Header></Header>
        <Switch>
          <Route path="/signin">
            <Login></Login>
          </Route>
          <Route path='/signup'>
            <Register></Register>
          </Route>
          <Route path='/profile'>
            <Profile></Profile>
          </Route>
          <Route path="/saved-movies">
            <SavedMovies></SavedMovies>
          </Route>
          <Route path='/movies'>
            <Movies></Movies>
          </Route>
          <Route exact path='/'>
            <Main></Main>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
