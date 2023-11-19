import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";  // Import Routes

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
                <Routes>  {/* Wrap Routes around your Route components */}
                    <Route path='/dialogs' element={<Dialogs state={props.state.dialogsPage} />} />
                    <Route path='/profile' element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
