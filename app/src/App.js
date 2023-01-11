import './App.css';
import Nav from './components/Nav';
import { Outlet } from 'react-router-dom';

const App = () => {
    return (
        <div id="App">
            <Nav />
            <div id="content">
                <Outlet />
            </div>
        </div>
    );
}

export default App;
