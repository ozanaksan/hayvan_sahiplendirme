import logo from './logo.svg';
import './App.css';
import Clock from "react-clock";
import {useEffect, useState} from "react";
import Test from './test';

function App() {

    const [value, setValue] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(
            () => setValue(new Date()),
            1000
        );

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <Test/>
    );
}

export default App;
