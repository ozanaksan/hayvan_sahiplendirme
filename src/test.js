import logo from "./logo.svg";
import {useState, useEffect} from "react";

export default function Test() {
    const [myState, setMyState] = useState(0);

    useEffect(() => {
        if (myState < 5000) {
            setMyState(myState + 1);
        }
    }, [myState]);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {myState} {myState}
                </a>

            </header>
        </div>
    )

}