
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Page404 from "../page404/page404";
import {
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import './App.css';

function App() {


  return (
    <div className="page">
        <Switch>
        <Route path="/page404">
          <Page404/>
          </Route>
        <Route path="/login">
          <Login/>
          </Route>
        <Route path="/register">
          <Register/>
          </Route>
        <Route path="/profile">
          <Header/>
          <Profile/>
          </Route>
        <Route path="/saved-movies">
            <Header/>
            <SavedMovies/>
            <Footer/>
          </Route>
        <Route path="/movies">
            <Header/>
            <Movies/>
            <Footer/>
          </Route>
         <Route path="/">
         <Header/>
            <Main/>
            <Footer/>
          </Route>
        </Switch> 
    </div>
  );
}

export default App;
