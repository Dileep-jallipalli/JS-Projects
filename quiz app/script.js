const quizData = [
    {
        Question: 'The Battle of Plassey was fought in',
        a : '1757',
        b : '1997',
        c : '1457',
        d : '1997',
        Answer : 'a'
    }, {
        Question: 'The territory of Porus who offered strong resistance to Alexander was situated between the rivers of',
        a: 'Sutlej and Beas',
        b: 'Jhelum and Chenab',
        c: 'Ravi and Chenab',
        d: '19Ganga and Yamuna97',
        Answer: 'b'
    }, {
        Question: 'Tripitakas are sacred books of',
        a: 'Buddhists',
        b: 'Hindus',
        c: 'Jains',
        d: 'one of the above',
        Answer: 'a'
    }, {
        Question: 'What is part of a database that holds only one type of information?',
        a: 'Report',
        b: 'Field',
        c: 'Record',
        d: 'File',
        Answer: 'b'
    }, {
        Question: 'The OS computer abbreviation usually means? of Plassey was fought in',
        a: 'Order of Significance',
        b: 'Open Software',
        c: 'Operating System',
        d: 'Optical Sensor',
        Answer: 'c'
    }, {
        Question: 'In which decade with the first transatlantic radio broadcast occur?',
        a: '1757',
        b: '1997',
        c: '1457',
        d: '1990',
        Answer: 'd'
    }, {
        Question: 'In which decade was the SPICE simulator introduced?',
        a: '1757',
        b: '1970',
        c: '1457',
        d: '1997',
        Answer: 'b'
    }, {
        Question: 'In which year was MIDI(Musical Instrument Digital Interface) introduced?',
        a: '1757',
        b: '1997',
        c: '1983',
        d: '1997',
        Answer: 'c'
    }, {
        Question: 'Entomology is the science that studies',
        a: 'Behavior of human beings',
        b: 'Insects',
        c: 'The origin and history of technical and scientific terms',
        d: 'The formation of rocks',
        Answer: 'b'
    }, {
        Question: 'DB computer abbreviation usually means ?',
        a: 'DataBase',
        b: 'Data Bug',
        c: 'Data Block',
        d: 'Data Boot',
        Answer: 'a'
    }, {
        Question: 'Garampani sanctuary is located at',
        a: 'Junagarh, Gujarat',
        b: 'Diphu, Assam',
        c: 'Kohima, Nagaland',
        d: 'Gangtok, Sikkim',
        Answer: 'b'
    }, {
        Question: 'For which of the following disciplines is Nobel Prize awarded?',
        a: 'Physics and Chemistry',
        b: 'Physiology or Medicine',
        c: 'Literature, Peace and Economics',
        d: 'All of the above',
        Answer: 'd'
    }, {
        Question: 'Hitler party which came into power in 1933 is known as',
        a: 'Labour Party',
        b: 'Nazi Party',
        c: 'Ku-Klux-Klan',
        d: 'Democratic Party',
        Answer: 'b'
    }, {
        Question: 'Golf player Vijay Singh belongs to which country?',
        a: 'USA',
        b: 'Fiji',
        c: 'India',
        d: 'UK',
        Answer: 'b'
    }, {
        Question: 'First Afghan War took place in',
        a: '1757',
        b: '1997',
        c: '1839',
        d: '1997',
        Answer: 'c'
    }, {
        Question: 'For the Olympics and World Tournaments, the dimensions of basketball court are',
        a: '26 m x 14 m',
        b: '28 m x 15 m',
        c: '27 m x 16 m',
        d: '28 m x 16 m',
        Answer: 'b'
    }, {
        Question: 'Each year World Red Cross and Red Crescent Day is celebrated on',
        a: 'May 8',
        b: 'May 18',
        c: 'June 8',
        d: 'June 18',
        Answer: 'a'
    }, {
        Question: 'Gravity setting chambers are used in industries to remove',
        a: 'SOx',
        b: 'NOx',
        c: 'suspended particulate matter',
        d: 'CO',
        Answer: 'c'
    }, {
        Question: 'Who invented the BALLPOINT PEN?',
        a: 'Biro Brothers',
        b: 'Waterman Brothers',
        c: 'Bicc Brothers',
        d: 'Write Brothers',
        Answer: 'a'
    }, {
        Question: 'In which decade was the first solid state integrated circuit demonstrated?',
        a: '1757',
        b: '1997',
        c: '1457',
        d: '1980',
        Answer: 'd'
    }, {
        Question: 'When was barb wire patented?',
        a: '1757',
        b: '1874',
        c: '1457',
        d: '1997',
        Answer: 'b'
    }, {
        Question: 'What J. B. Dunlop invented?',
        a: 'Pneumatic rubber tire',
        b: '19Automobile wheel rim97',
        c: 'Rubber boot',
        d: 'Model airplanes',
        Answer: 'a'
    }, {
        Question: 'The Battle of Plassey was fought in',
        a: '1757',
        b: '1997',
        c: '1457',
        d: '1997',
        Answer: 'a'
    }
]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.Question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});