import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
    console.log("APP COMPONENT");
    const [resourceType, setResourceType] = useState("HOME");



    useEffect(() => {
        console.log("RESOURCE TYPE", resourceType);
    }, [resourceType])

    return (
        <div className="App">
            <button onClick={() => setResourceType("HOME")}>HOME</button>
            <button onClick={() => setResourceType("ABOUT")}>ABOUT</button>
            <button onClick={() => setResourceType("CONTACT")}>CONTACT</button>
            <h3>{resourceType}</h3>
        </div>
    );
}

export default App;
