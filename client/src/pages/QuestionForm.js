import React, { useState } from "react";

const QuestionForm = () => {
  // const [btn1, setbtn1] = useState(questions[0].answer1);
  // const [btn2, setbtn2] = useState(questions[0].answer2);
  // const [question, setQuestion] = useState(questions[0].questionText);
  // const [qType, setQType] = useState(questions[0].qType);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [userAnswer, setUserAnswer] = useState([{}]);

  const setupQuestionForm = (nextQuestion) => {
    const newQuestion = questions.find((question) => {
      return question.qID === nextQuestion;
    });

    setCurrentQuestion(newQuestion);
    // setbtn1(newQuestion.answer1);
    // // set qState == thisQuestion
    // setbtn2(newQuestion.answer2);

    // setQuestion(newQuestion.questionText);
    // // on click change state to next question in the line
    // // Keep going until exit.
  };

  const handleOnClick = (event) => {
    // if !EXIT then => handleQuestion
    const userValue = event.target.value;
    const userChoice = event.target.name;
    const acceptedAnswers = userAnswer;
    acceptedAnswers.push({
      qID: currentQuestion.qID,
      answer: userValue,
    });
    setUserAnswer(acceptedAnswers);
    if (userValue !== "EXIT") {
      let searchNext = 0;
      if (userChoice === "answer1") {
        searchNext = currentQuestion.answer1.nextQuestion;
      } else {
        searchNext = currentQuestion.answer2.nextQuestion;
      }
      let nextQ = questions.filter((q) => q.qID === searchNext);
      console.log(nextQ, "next quest");
      setCurrentQuestion(nextQ[0]);
    } else {
      console.log(userAnswer);
      alert("Exit Program");
    }
  };

  // const handleQuestion = (thisQuestion) => {
  //   if (Object.keys(thisQuestion).length) {
  //     // ask thisQuestion
  //     setupQuestionForm(thisQuestion);
  //     //return answer as answerText
  //     if (answerText === "yes") {
  //       if (thisQuestion.answer1.nextQuestion === "EXIT") return;
  //       const nextQuestion = questions.find((question) => {
  //         return question.qID === thisQuestion.yes.nextQuestion;
  //       });
  //       askQuestion(nextQuestion);
  //     } else {
  //       const nextQuestion = questions.find((question) => {
  //         return question.questionText === thisQuestion.no.nextQuestion;
  //       });
  //       askQuestion(nextQuestion);
  //     }
  //   }
  // };

  // let [ var for state , updateForm ] = useState ()  <<<< to init state
  // create form elements in
  const { questionText, qType, answer1, answer2 } = currentQuestion;
  console.log(currentQuestion, answer1, answer2);
  return (
    <div className="container">
      <h2>{questionText}</h2>
      <h3>qType: {qType}</h3>
      <button
        onClick={(event) => handleOnClick(event)}
        name="answer1"
        value={answer1.answer}
      >
        {answer1.answer}
      </button>
      <button
        onClick={(event) => handleOnClick(event)}
        name="answer2"
        value={answer2.answer}
      >
        {answer2.answer}
      </button>
    </div>
  );
};
export default QuestionForm;
