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
    qType: "bad-thermo",
    questionText: "Would the customer like to replace thermostat for $200",
    answer1: { answer: "No", nextQuestion: "EXIT" },
    answer2: { answer: "Yes", nextQuestion: 4 },
  },
  {
    qID: 4 ,
    qType: "inside-out",
    questionText: "Turn the thermostat to cooling, did the indoor fan turn on?",
    answer1: { answer: "No", nextQuestion: 999 },
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
    qID: 6 ,
    qType: "outside-high",
    questionText: "Check the volts going from the disconnect to the contactor. Are you reading 240 going in?",
    answer1: { answer: "Yes", nextQuestion: 8 },
    answer2: { answer: "No", nextQuestion: 9 },
  },
  {
    qID: 7,
    qType: "outside-high",
    questionText: "Remove the disconnect and ensure power is off. Discharge the capacitor and take MFD reading. Are the readings normal?",
    answer1: { answer: "Yes", nextQuestion: 10 },
    answer2: { answer: "No", nextQuestion: 11 },
  },
  {
    qID: 8,
    qType: "outside-low",
    questionText: "Take a volt reading of 24V on contactor. Are you getting a call for ~24V",
    answer1: { answer: "Yes", nextQuestion:  },
    answer2: { answer: "No", nextQuestion:  },
  },
  {
    qID: 9,
    qType: "outside-high",
    questionText: "The breaker and/or fuse may have gone out or tripped. Properly disconnect and before you flip the breaker perform Ohm readings. Was the fan and compressor within range?",
    answer1: { answer: "Yes", nextQuestion:  },
    answer2: { answer: "No", nextQuestion:  },
  },
  {
    qID: "",
    qType: "",
    questionText: "",
    answer1: { answer: "", nextQuestion:  },
    answer2: { answer: "", nextQuestion:  },
  },
  {
    qID: "",
    qType: "",
    questionText: "",
    answer1: { answer: "", nextQuestion:  },
    answer2: { answer: "", nextQuestion:  },
  },
  {
    qID: "",
    qType: "",
    questionText: "",
    answer1: { answer: "", nextQuestion:  },
    answer2: { answer: "", nextQuestion:  },
  },

];

const setupQuestionForm = () => {
    // set qState == thisQuestion
}

const handleQuestion = (thisQuestion) => {
    if (Object.keys(thisQuestion).length) {
        // ask thisQuestion
        setupQuestionForm(thisQuestion)
        //return answer as answerText
        if (answerText === "yes") {
            const nextQuestion = questions.find (question => {
                return question.qID === thisQuestion.yes.nextQuestion
            })
             askQuestion(nextQuestion)
        } else {
            const nextQuestion = questions.find(question => {
                return question.questionText === thisQuestion.no.nextQuestion
            })
            askQuestion(nextQuestion)
        }
    }
}