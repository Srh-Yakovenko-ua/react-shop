import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {Shop} from './components/Shop';
import {ContextProvider} from './components/context/Context';

function App() {
    return (
        <React.Fragment>
            <Header/>
            <ContextProvider>
                <Shop/>
            </ContextProvider>
            <Footer/>
        </React.Fragment>
    );
}

export default App;
