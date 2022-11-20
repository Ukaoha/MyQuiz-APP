import React from "react";
import { useState } from "react";

const DataBase = () => {
    const [isQuizStarted , setIsQuizStarted] = useState(false);
    const [currentQuestion , setCurrentQuestion] = useState(0);
    const [showScore , setShowScore] = useState(false) ;
    const [score, setScore] = useState(0);
    const [answredQuestion , setAnsweredQuestion] = useState(0);
    const [ unansweredQuestion , setUnanswredQuestion] = useState (0);
    const [comeBack, setComback] = useState(0);

    const questions = [
        {
            questionsText: 'On Monday, 50 children bought a ticket for the ghost train attraction. If 30% more children bought a ticket to this attraction on the following Tuesday, how many tickets were sold during those two days?  ',
            ansOptions: [
                {ansText:   65 , isCorrect: false},
                {ansText:   85 , isCorrect: false},
                {ansText:   115 , isCorrect: true},
                {ansText:   165, isCorrect: false},

                    
            ],
        },
        {
            questionsText: 'Four individuals of different sizes - Elisabeth, Kiera, Guy and Amos - behave according to the following rule: each one trusts exclusively an individual of a higher size than him or herself. We know that Elisabeth only trusts Kiera.One of the following situations is not possible. Which one? ',
            ansOptions: [
                {ansText:   ' Amos trusts Kiera', isCorrect: false},
                {ansText:   ' Guy does not trust Amos' , isCorrect: false},
                {ansText:  ' Amos only trusts Elisabeth ' , isCorrect: true},
                {ansText:  ' Guy trusts everyone else', isCorrect: false},
                {ansText:  ' Guy trusts Kiera', isCorrect: false},


                    
            ],
         }, 
         {
            questionsText: "Choose the word of words that, when inserted in the sentence to replace the blank or blanks, fits the best with the meaning of the sentence. On the occasion of its 30th anniversary, a large ___ of sandwich-pastry stores in Belgium has been ranked as the most ___ sandwiches in the Kingdom.",
            ansOptions: [
                {ansText: "frame ... best", isCorrect: false},
                {ansText: "succession ... bad" , isCorrect: false},
                {ansText: "chain ... popular",  isCorrect: true},
                {ansText: "closing ... nice", isCorrect: false},
                {ansText: " line ... spicy", isCorrect: false}



            ],
            
         }, 
         {
            questionsText: "Rearrange the phrase below to form a meaningful sentence “CHIEDITOREF” ",
            ansOptions:[
                {ansText: "Chief Editor", isCorrect: true},
                {ansText: "Editor- in- Chief", isCorrect: false},
                {ansText: "Editors-in-chief", isCorrect: false},
                {ansText: " All of the above", isCorrect: false}
            ], 
         },
         {
            questionsText:"Choose which of the following expressions represents the highest value: ",
            ansOptions: [
                {ansText: 14/49, isCorrect: false},
                {ansText: 15/50, isCorrect: false},
                {ansText: 17/51, isCorrect: true},
                {ansText: 16/64, isCorrect: false},
                {ansText:12/60, isCorrect: false},



            ],
         },
         {
            questionsText:"  8:4 as 10:.....",
            ansOptions: [
                {ansText:  24, isCorrect: false},
                {ansText:  5, isCorrect: true},
                {ansText:  4, isCorrect: false},
                {ansText:  8, isCorrect: false},
    



            ],
         },
         {
            questionsText:"  Peter has a box containing 65 red and blue balls. Counting them, he realizes that there is a ratio of 3 red balls to 10 blue balls. How many blue balls does he have in total? ",
            ansOptions: [
                {ansText:  15, isCorrect: false},
                {ansText:  20, isCorrect: false},
                {ansText:  30, isCorrect: false},
                {ansText:  45, isCorrect: false},
                {ansText:  50, isCorrect: true},

    



            ],
         },

         {
            questionsText:"It takes Max three hours to run 30 kilometers. Georges, on the other hand, travels the same distance in 2 hours and 20 minutes. If both are to complete a 15-kilometre race, how long before Max will Georges arrive to the finish line?",
            ansOptions: [
                {ansText:  "10 minutes", isCorrect: false},
                {ansText:  "20 minutes", isCorrect: true},
                {ansText:  "30 minutes", isCorrect: false},
                {ansText:  "40 minutes", isCorrect: false},
                {ansText:  "50 minutes", isCorrect: false},

    



            ],
         },

        
         
    ];

        const nextButton = (isCorrect) => {
            if(isCorrect) {
                setScore (score + 1)

            }
            const nextQuestion = currentQuestion + 1 ;
            if(nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion)
            } else {
                setShowScore(true)
            }
    
            
        }
        const prevButton = (isCorrect) => {
            if(isCorrect) {
                setScore (score + 1)

            }

            const prevQuestion = currentQuestion - 1 ; 
            if(prevQuestion < questions.length) {
                setCurrentQuestion (prevQuestion)
            } else {
                setShowScore(true)
            }

        }

    
    
  



    return ( 
        <div className="main">
            {
                showScore ? (
                    <div className="score-section">
                    you scored {score} out of{questions.length}
                    </div>
    
                ) : (
        
        <>
                       <div className="questions-main">
                    <span>Question  {currentQuestion + 1 }</span>/{questions.length}
                 </div>

                 <div className="questions--text">
                  {questions[currentQuestion].questionsText}
              </div>
              <div className="ans-section">
                {questions[currentQuestion].ansOptions.map((ansOption) => (
                    // <li>{ansOption.ansText}</li>
                 <div>
                    <input type="radio"  className="answerOptions"/>
                    <label htmlFor="">{ansOption.ansText}</label>
                    </div>
                ))}
            
               </div>
               <div className="buttons">
               
                    <button onClick={() => nextButton()}>Next</button>
                    <button onClick={() => prevButton()}>Back</button>

               

               </div>

        </>
)}
        </div>

      );
}
 
export default DataBase;