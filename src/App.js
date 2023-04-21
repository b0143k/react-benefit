import logo from './logo.svg';
import './App.css';
import { Invitation } from './components/invitation';

function App() {
  return (
    <div className="App">

      <Invitation party=" Birthday party Invitation 
" email="jaGdish@gmail.com
" name="jaGdish" persons="Ritu , Saurabh , Kartik ."
        venue="Green field Avenue"
        from=" JaGdish
"/>

    </div>
  );
}

export default App;
