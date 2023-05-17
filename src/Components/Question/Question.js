import './Question.css';

function Question(props) {
    const { id, question, options } = props;
    return (
        <div className="Question">
            <h1>Question({id})</h1>
            <p><strong>{question}</strong></p>
            <ul>
                {
                    options.map((option,index) => {
                        return (
                            <li key={index}> 
                                <input type='checkbox' />  {option}
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    );
}

export default Question;
