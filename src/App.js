import Question from './Components/Question/Question';
import { questionsData } from './Constants/Constant';
import './App.css';

function App() {

    return (
        <div className="App">
            {
                questionsData.map((question) => {
                    return (
                        <Question {...question} key={question.id} />
                    )
                })
            }
        </div>
    );
}

export default App;
