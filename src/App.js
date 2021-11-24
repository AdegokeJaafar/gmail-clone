import React from "react";
import './App.css';
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Mail from "./Mail/Mail";
import EmailList from "./EmailList/EmailList"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SendMail from "./SendMail/SendMail";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { useSelector } from "react-redux"
import { selectUser } from "./features/userSlice";
import Login from "./Login/Login"


function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)

  const user = useSelector(selectUser)

  return (
    <Router>
      {/* {!user ? (
        <Login />
      ) : (  */}
      <div className="App">
        <Header />

        <div className="app-body">
        <Sidebar />

        <Switch>
          <Route path="/mail">
            <Mail />
          </Route>
          <Route path="/"> 
            <EmailList />
          </Route>
        </Switch>
        </div>

        {sendMessageIsOpen && <SendMail />}
      </div>
      )}
    </Router>
  );
}

export default App;
