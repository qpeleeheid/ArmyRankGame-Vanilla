import {
  DIFFICULTY,
  getRanksFrom,
  quizzGenerator,
} from '../js/model/quizzGenerator.js';
import { airComponent } from '../assets/data/airComponent.js';
import { landComponent } from '../assets/data/landComponent.js';
import { navyComponent } from '../assets/data/navyComponent.js';
import { COMPONENT, RANK_SECTION } from './model/rank.js';

const handleStartBtnClick = () => {
  /* GET OPTIONS */
  const componentId = Number(document.querySelector('#componentSelect').value);
  const difficultyId = Number(
    document.querySelector('#difficultySelect').value
  );
  const questionNumber = Number(
    document.querySelector('#questionNumberSelect').value
  );

  /* GENERATE QUIZZ WITH OPTIONS */
  quizz = quizzGenerator(
    questionNumber,
    componentId,
    RANK_SECTION.ALL,
    difficultyId
  );
  console.log(quizz);

  /* SHOW FIRST QUESTION */
  content.innerHTML = renderQuestion(
    quizz.getCurrentIndex(),
    quizz.getCurrentQuestion()
  );

  /* BIND PROPOSAL BUTTONS EVENT */
  content
    .querySelectorAll('.proposalBtn')
    .forEach((btn) => btn.addEventListener('click', handleProposalBtnClick));

  /* LAUNCHING TIMER */
  timer(10000);
};

const handleProposalBtnClick = (event) => {
  /* STOPPING COUNTDOWN */
  clearInterval(countdown);
  document
    .querySelector('.progress-bar')
    .classList.remove('progress-bar-striped');

  const selectedProposal = event.target;
  /* DISABLE BUTTONS */
  content
    .querySelectorAll('.proposalBtn')
    .forEach((btn) => btn.setAttribute('disabled', ''));
  /* HIGHLIGHT SELECTED BUTTON (WITH CORRECT COLOR) */
  selectedProposal.classList.remove('btn-outline-primary');
  if (quizz.checkProposalAnswer(selectedProposal.innerText)) {
    quizz.increaseScore(1);
    selectedProposal.classList.add('btn-success');
  } else {
    selectedProposal.classList.add('btn-danger');

    /* OUTLINE RIGHT ANSWER */
    const proposalBtns = document.querySelectorAll('.proposalBtn');
    for (let proposalBtn of proposalBtns) {
      if (quizz.checkProposalAnswer(proposalBtn.innerText)) {
        proposalBtn.classList.add('btn-outline-success');
      }
    }
  }

  /* SHOW NEXT QUESTION BUTTON OR END BUTTON */
  if (quizz.isFinished()) {
    const endQuizzBtn = `
    <button
      id="endQuizzBtn"
      type="button"
      class="btn btn-primary col-6 align-self-end"
    >
      Finir le quizz
    </button>
    `;

    content.querySelector('#proposalList').parentElement.innerHTML +=
      endQuizzBtn;

    /* BIND END QUIZZ BUTTON EVENT */
    content
      .querySelector('#endQuizzBtn')
      .addEventListener('click', handleEndQuizzBtnClick);
  } else {
    renderNextQuestionBtn();
  }
};

const handleNextQuestionBtnClick = () => {
  /* MOVE TO NEXT QUESTION */
  quizz.moveToNextQuestion();
  /* SHOW QUESTION */
  content.innerHTML = renderQuestion(
    quizz.getCurrentIndex(),
    quizz.getCurrentQuestion()
  );

  /* BIND PROPOSAL BUTTONS EVENT */
  content
    .querySelectorAll('.proposalBtn')
    .forEach((btn) => btn.addEventListener('click', handleProposalBtnClick));

  /* LAUNCHING TIMER */
  timer(10000);
};

const handleEndQuizzBtnClick = () => {
  content.innerHTML = renderResults();
  /* BIND PLAY AGAIN BUTTON */
  content
    .querySelector('#homeBtn')
    .addEventListener('click', handleBackHomeBtn);
};

const handleBackHomeBtn = () => {
  content.innerHTML = renderHome();

  /* UPDATE QUESTION NUMBER SELECT WHEN COMPONENT SELECT ON CHANGE */
  document
    .querySelector('#componentSelect')
    .addEventListener('change', updateOptionsOnChange);

  /* START QUIZZ BUTTON */
  const startBtn = document.querySelector('#startQuizzBtn');
  startBtn.onclick = handleStartBtnClick;
};

const updateOptionsOnChange = () => {
  const componentId = Number(document.querySelector('#componentSelect').value);
  const questionNumber = getRanksFrom(componentId, RANK_SECTION.ALL).length;
  const questionNumberSelect = document.querySelector('#questionNumberSelect');
  questionNumberSelect.innerHTML = renderQuestionNumberOptions(questionNumber);
};

const renderHome = () => {
  return `
  <div class="card my-5">
    <div class="card-header">
      <h1 class="display-2">Army Rank Quizz</h1>
    </div>
    <div class="card-body d-flex flex-column align-items-center">
      ${renderOptions()}
      <a href="./components.html">Découvrir les grades</a>
      <button
      class="btn btn-lg btn-primary my-4 px-5"
      id="startQuizzBtn"
      type="button"
      >
      Jouer
      </button>
    </div>
  </div>
    `;
};

const renderOptions = () => {
  return `
    <form class="row">
      <div class="input-group mb-3">
        <label class="input-group-text col-4" for="componentSelect">Composante(s)</label>
        <select class="form-select" id="componentSelect">
          <option value="${COMPONENT.ALL}" selected>Toutes</option>
          <option value="${COMPONENT.AIR}">Air</option>
          <option value="${COMPONENT.LAND}">Terre</option>
          <option value="${COMPONENT.NAVY}">Marine</option>
        </select>
      </div>
      <div class="input-group mb-3">
        <label class="input-group-text col-4" for="difficultySelect">Difficulté</label>
        <select class="form-select" id="difficultySelect">
          <option value="${DIFFICULTY.EASY}" selected>Facile</option>
          <option value="${DIFFICULTY.NORMAL}">Moyenne</option>
          <option value="${DIFFICULTY.HARD}">Difficile</option>
        </select>
      </div>
      <div class="input-group mb-3">
        <label class="input-group-text col-4" for="questionNumberSelect">Nombre de questions</label>
        <select class="form-select" id="questionNumberSelect">
          ${renderQuestionNumberOptions(
            airComponent.getRanksCount() +
              landComponent.getRanksCount() +
              navyComponent.getRanksCount()
          )}
        </select>
      </div>
    </form>
    `;
};

const renderQuestionNumberOptions = (maxNumber) => {
  let options = '';
  for (let i = 5; i < maxNumber; i = i + 5) {
    options += `<option value="${i}">${i}</option>`;
  }
  options += `<option value="${maxNumber}">${maxNumber} (max)</option>`;
  return options;
};

const renderQuestion = (questionNumber, question) => {
  return `
  <div class="card shadow my-3 col-lg-10 mx-auto">
  <div class="row g-0">
  ${renderProgressBar()}
  <div class="col-md-4">
  <img
  src="assets/images/${question.imageSrc}"
  class="img-fluid rounded-start p-1"
  alt="..."
  />
  </div>
  <div class="col-md-8 d-flex flex-column">
  
  <h2 class="card-header h4 text-muted">Question ${questionNumber + 1}</h2>
          <div class="card-body d-flex flex-column align-items-center">
          <h3 class="card-title">${question.title}</h3>
          <div id="proposalList" class="btn-group-vertical col-10 my-auto">
          ${renderProposals(question.proposals)}
          </div>
          </div>
          </div>
          </div>
          </div>
          `;
};

const renderProposals = (proposals) => {
  let str = '';
  for (const proposal of proposals) {
    str += `
      <button type="button" class="btn btn-outline-primary my-1 proposalBtn">
      ${proposal}
      </button>`;
  }
  return str;
};

const renderProgressBar = () => {
  return `<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
</div>`;
};

const renderResults = () => {
  return `
  <div class="card my-5">
  <div class="card-header">
      <h1 class="display-2">Army Rank Quizz - Résultat</h1>
      </div>
    <div class="card-body d-flex flex-column align-items-center">
    <p class="display-5">
    Score: ${quizz.getScore()} / ${quizz.getQuestionCount()}
    </p>
    <button
        class="btn btn-lg btn-primary my-4 px-5"
        id="homeBtn"
        type="button"
        >
        Menu
        </button>
        </div>
        </div>
        `;
};

const renderNextQuestionBtn = () => {
  const nextQuestionBtn = `
    <button
      id="nextQuestionBtn"
      type="button"
      class="btn btn-primary col-6 align-self-end"
    >
      Question suivante
    </button>
    `;

  content.querySelector('#proposalList').parentElement.innerHTML +=
    nextQuestionBtn;

  /* BIND NEXT QUESTION BUTTON EVENT */
  content
    .querySelector('#nextQuestionBtn')
    .addEventListener('click', handleNextQuestionBtnClick);
};

const timer = (duration) => {
  const progressBar = document.querySelector('.progress-bar');
  progressBar.style.width = 100 + '%';
  progressBar.innerText = `${duration / 1000}s.`;
  progressBar.ariaValueNow = 100;

  let interval = 100;
  let timeLeft = duration;

  countdown = setInterval(() => {
    timeLeft -= interval;
    let progressWidth = (timeLeft / duration) * 100;

    if (timeLeft > 0) {
      progressBar.style.width = progressWidth + '%';
      progressBar.innerText = `${timeLeft / 1000}s.`;
      progressBar.ariaValueNow = progressWidth;
    } else {
      clearInterval(countdown);
      progressBar.style.width = 0 + '%';
      progressBar.innerText = `Terminé`;
      progressBar.ariaValueNow = 0;

      /* DISABLE BUTTONS */
      content
        .querySelectorAll('.proposalBtn')
        .forEach((btn) => btn.setAttribute('disabled', ''));
    }
  }, interval);
};

let quizz;

let content = document.querySelector('#content');
content.innerHTML = renderHome();

/* UPDATE QUESTION NUMBER SELECT WHEN COMPONENT SELECT ON CHANGE */
document
  .querySelector('#componentSelect')
  .addEventListener('change', updateOptionsOnChange);

/* START QUIZZ BUTTON */
const startBtn = document.querySelector('#startQuizzBtn');
startBtn.onclick = handleStartBtnClick;

/* TIMER SHIT */
var countdown;
