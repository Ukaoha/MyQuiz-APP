const NotFound = () => {
    // const [isQuizStarted , setIsQuizStarted] = useState(false);
    // const [currentQuestion , setCurrentQuestion] = useState(0);
    // const [showScore , setShowScore] = useState(false) ;
    // const [score, setScore] = useState(0);
    // const [answredQuestion , setAnsweredQuestion] = useState(0);
    // const [ unansweredQuestion , setUnanswredQuestion] = useState (0);
    // const [comeBack, setComback] = useState(0);

   
    // const handleOptions = (isCorrect) => {
    //     if (isCorrect) {
    //         setScore ( score + 1) ;
    
    //     }
    //     const nextQuestion = currentQuestion + 1 ;
    //     if(nextQuestion < questions.length) {
    //         setCurrentQuestion(nextQuestion)
    //     } else {
    //         setShowScore(true)
    //     }

    //     const prevQuestion  = currentQuestion - 1 ;
    //     if(prevQuestion > questions.length){
    //         setCurrentQuestion (prevQuestion)
    //     } else {
    //         setShowScore(true)
    //     }
    // }
    




    
    // return ( 
    //      <>
    //      <div className="questions-main">
    //         <span>Question 1 {currentQuestion + 1 }</span>/{questions.length}
    //      </div>
    //      <div className="questions--text">
    //         {questions[currentQuestion].questionsText}
    //      </div>
    //      <div className="answer-section">
    //         {questions[currentQuestion].ansOptions.map((ansOption) => (
    //             <button onClick={() => handleOptions(ansOption.isCorrect)}>{ansOption.ansText}</button>
    //         ))}
    //      </div>
    //       </>);

    return ( 
        <div>
        <h1>Ooops this page doesn't exist</h1>

    </div>

     );
}
 
export default NotFound;