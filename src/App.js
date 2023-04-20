
import './App.css';
import Button from './components/button/Button';
import ReactBenefits from './components/react-benefits/ReactBenefits';
import ReactLogo from './components/react-logo/ReactLogo';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <ReactLogo />
                <ReactBenefits />
                <Button />

            </header>
        </div>
    );
}

export default App;
