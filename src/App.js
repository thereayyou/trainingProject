import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Component from "./components/XYI";

const App = (props) => {
    let dialogData = [
        {id: 1, name:'Dimych'},
        {id: 2, name:'Andrey'},
        {id: 3, name:'Sveta'},
        {id: 4, name:'Sasha'},
        {id: 5, name:'Viktor'},
        {id: 6, name:'Valera'},
        {id: 777, name:'SEMKA'},
    ]
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div class='app-wrapper-content'>
                    <Route path= '/profile' component = {Profile}/>
                    <Route path ='/dialogs' component = {Dialogs} id={dialogData[6].id} name={dialogData[6].name}/>
                    <Route path ='/news' component={News}/>
                    <Route path ='/music' component={Music}/>
                    <Route path ='/settings' component={Settings}/>
                </div>
                <Component dialogData={dialogData}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
