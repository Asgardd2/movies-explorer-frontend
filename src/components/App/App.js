import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Page404 from "../page404/page404";
import PopupMenu from "../PopupMenu/PopupMenu";
import {
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import './App.css';

function App() {
  const [isPopupMenuOpen, setIsPopupMenuOpen] = React.useState(false)

  function handleClosePopup() {
    setIsPopupMenuOpen(false);
  }
  const history = useHistory();
  function handleGoBack () {
    history.goBack()
  }
  
  function handleOpenBurgerMenu() {
    setIsPopupMenuOpen(true);
  }

  React.useEffect(() => {
    setIsPopupMenuOpen(false);
  }, []);

  return (
    <div className="page">
        <Switch>
        <Route path="/page404">
          <Page404
          onBack = {handleGoBack}
          />
          </Route>
        <Route path="/signin">
          <Login/>
          </Route>
        <Route path="/signup">
          <Register/>
          </Route>
        <Route path="/profile">
          <Header
           onOpenBurgerMenu={handleOpenBurgerMenu}
           />
          <Profile/>
          </Route>
        <Route path="/saved-movies">
            <Header
              onOpenBurgerMenu={handleOpenBurgerMenu}
              />
            <SavedMovies/>
            <Footer/>
          </Route>
        <Route path="/movies">
            <Header
            onOpenBurgerMenu={handleOpenBurgerMenu}/>
            <Movies/>
            <Footer/>
          </Route>
         <Route path="/">
         <Header
         onOpenBurgerMenu={handleOpenBurgerMenu}/>
            <Main/>
            <Footer/>
          </Route>
          <Route path="/">
            <Page404/>
          </Route>
        </Switch> 
        <PopupMenu
        isOpen={isPopupMenuOpen}
        onClose={handleClosePopup}
    />
    </div>
  );
}

export default App;
