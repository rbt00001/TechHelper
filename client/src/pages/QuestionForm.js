import React, { useState } from "react";
const questions = [
  {
    qID: 0,
    qType: "init-question",
    questionText: "Is this a Heating Call or a Cooling Call?",
    answer1: { answer: "Heating", nextQuestion: 1 },
    answer2: { answer: "Cooling", nextQuestion: 2 },
  },

  // QID FOR NEXT QUESTION UNDER SUB-SET 1 WILL BE APPLIED FOR FUTURE.
  // THIS WILL INCLUDE ELECTRIC AND GAS FURNACES EACH WILL NEED
  // THEIR OWN TREES TO FOLLOW. (WILL ALSO BE NEEDED FOR HEAT-PUMPS)

  {
    qID: 2,
    qType: "init-thermo",
    questionText:
      "Does the thermostat appear to be operational (power to thermostat) ",
    answer1: { answer: "No", nextQuestion: 3 },
    answer2: { answer: "Yes", nextQuestion: 4 },
  },

  {
    qID: 3,
    qType: "bad-part",
    questionText: "Would the customer like to replace _______ for _________",
    answer1: { answer: "No", nextQuestion: "EXIT" },
    answer2: { answer: "Yes", nextQuestion: 888 },
  },
  {
    qID: 4,
    qType: "inside-out",
    questionText: "Turn the thermostat to cooling, did the indoor fan turn on?",
    answer1: { answer: "No", nextQuestion: "EXIT" },
    answer2: { answer: "Yes", nextQuestion: 5 },
  },
  {
    qID: 5,
    qType: "init-outside",
    questionText: "Is the condensing unit fan motor running?",
    answer1: { answer: "Yes", nextQuestion: 6 },
    answer2: { answer: "No", nextQuestion: 7 },
  },
  {
    qID: 6,
    qType: "outside-high",
    questionText:
      "Check the volts going from the disconnect to the contactor. Are you reading 240 going in?",
    answer1: { answer: "Yes", nextQuestion: 8 },
    answer2: { answer: "No", nextQuestion: 9 },
  },
  {
    qID: 7,
    qType: "outside-high",
    questionText:
      "Remove the disconnect and ensure power is off. Discharge the capacitor and take MFD reading. Are the readings normal?",
    answer1: { answer: "Yes", nextQuestion: 9 },
    answer2: { answer: "No", nextQuestion: 3 }, // Have this go to the purchase agreement to replace capacitor
  },
  {
    qID: 8,
    qType: "outside-low",
    questionText:
      "Take a volt reading of 24V on contactor. Are you getting a call for ~24V",
    answer1: { answer: "Yes", nextQuestion: 10 },
    answer2: { answer: "No", nextQuestion: 11 },
  },
  {
    qID: 9,
    qType: "outside-high",
    questionText:
      "Ensure power is disconnected and terminal leads to compressor (one wire at a time and take pictures of the wire placement) Perform Ohm reading to ground and then to terminal connections. Were the readings normal?",
    answer1: { answer: "Yes", nextQuestion: 10 },
    answer2: { answer: "No", nextQuestion: 888 },
  },
  {
    qID: 10,
    qType: "outside-high",
    questionText:
      "Take amp readings for compressor and fan. Are these within normal range? Power needs to be on and contactor engaged.",
    answer1: { answer: "Yes", nextQuestion: 7 },
    answer2: { answer: "No", nextQuestion: 12 },
  },
  {
    qID: 11,
    qType: "outside-low",
    questionText: "Are you getting 0V or 12V?",
    answer1: { answer: "0V", nextQuestion: 1 },
    answer2: { answer: "12V", nextQuestion: 13 },
  },
  {
    qID: 12,
    qType: "outside-high",
    questionText:
      "Wait for compressor to cool off and check it again. While waiting check wires to corrosion and looseness. Is it still grounded?",
    answer1: { answer: "Yes", nextQuestion: 3 },
    answer2: { answer: "No", nextQuestion: 3 },
  },
  {
    qID: 13,
    qType: "outside-high",
    questionText:
      "Check contactor for pitting and voltage on load side of contactor. Does the contactor need to be replaced?",
    answer1: { answer: "Yes", nextQuestion: 3 },
    answer2: { answer: "No", nextQuestion: 7 },
  },
];

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
      <h3> {qType}</h3>
      <button
        variant="secondary"
        onClick={(event) => handleOnClick(event)}
        name="answer1"
        value={answer1.answer}
      >
        {answer1.answer}
      </button>
      <button
        variant="secondary"
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
