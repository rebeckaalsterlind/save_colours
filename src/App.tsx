import React from 'react';
import { store } from './store';
import { logIn } from './actions';
import './App.css';
import LogInPage from './components/LogInPage/LogInPage';
import MainApp from './components/MainApp/MainApp'
import './style.css';


function App() {




  //checking user against localsStorage. if true => fetch user object
  if (localStorage.userId && !store.getState().username) {
    let user: any = localStorage.getItem("userId")

    fetch(`https://mads-colour-backend.herokuapp.com/api/users/${user}`, {
      method: "GET",
    })
      .then(res => res.json())
      .then(response => {

        if (response.username) {
          store.dispatch(logIn({ isTrue: true, username: response.username, user: response }));
        }
      });
  }


  return (
    <div className="App">
      {!store.getState().loggedIn
        ? <LogInPage />
        : <MainApp />
      }
    </div>
  );
}


export default App;
