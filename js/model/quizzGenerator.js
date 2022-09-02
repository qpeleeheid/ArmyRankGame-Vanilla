import { COMPONENT, RANK_SECTION } from './rank.js';
import { Question } from './question.js';
import { Quizz } from './quizz.js';
import { airComponent } from '../../assets/data/airComponent.js';
import { landComponent } from '../../assets/data/landComponent.js';
import { navyComponent } from '../../assets/data/navyComponent.js';

export const DIFFICULTY = {
  EASY: 1,
  NORMAL: 2,
  HARD: 3,
  EXTREME: 4,
};
Object.freeze(DIFFICULTY);

export function quizzGenerator(
  questionNumber = 5,
  componentId = COMPONENT.ALL,
  rankSectionId = RANK_SECTION.ALL,
  difficulty = DIFFICULTY.NORMAL
) {
  /* 1. get the ranks from the given component and section */
  const availableRanks = getRanksFrom(componentId, rankSectionId);

  /* 1.5. verify question number is not bigger than the max number of available ranks */
  if (questionNumber > availableRanks.length) {
    questionNumber = availableRanks;
  }

  /* 2. select the ranks (good answer)
          -> unique rank selection
  */
  const chosenRanks = selectUniqueRandomRanks(questionNumber, availableRanks);

  /* 3. create the questions by adding fake response
          -> unique ranks proposals selection
          -> see difficulty 
              -> easy: 2 proposals from all components, all rank sections
              -> normal: 4 proposals from all components, all rank sections
              -> hard: 4 proposals from specific component, all rank sections
              -> extreme: 4 proposals from specific component, specific rank section
  */
  const questions = generateQuestions(chosenRanks, difficulty);

  return new Quizz(questions);
}

export const getRanksFrom = (componentId, rankSectionId) => {
  let component;
  switch (componentId) {
    case COMPONENT.AIR:
      component = airComponent;
      break;
    case COMPONENT.LAND:
      component = landComponent;
      break;
    case COMPONENT.NAVY:
      component = navyComponent;
      break;
    default:
    case COMPONENT.ALL:
      switch (rankSectionId) {
        case RANK_SECTION.COM_OFFICER:
          return airComponent.commissionnedOfficers
            .concat(landComponent.commissionnedOfficers)
            .concat(navyComponent.commissionnedOfficers);
        case RANK_SECTION.NON_COM_OFFICIER:
          return airComponent.nonCommissionnedOfficers
            .concat(landComponent.nonCommissionnedOfficers)
            .concat(navyComponent.nonCommissionnedOfficers);
        case RANK_SECTION.SOLDIER:
          return airComponent.soldiers
            .concat(landComponent.soldiers)
            .concat(navyComponent.soldiers);
        default:
        case RANK_SECTION.ALL:
          return airComponent
            .getAllRanks()
            .concat(landComponent.getAllRanks())
            .concat(navyComponent.getAllRanks());
      }
  }

  switch (rankSectionId) {
    case RANK_SECTION.COM_OFFICER:
      return component.commissionnedOfficers.slice();
    case RANK_SECTION.NON_COM_OFFICIER:
      return component.nonCommissionnedOfficers.slice();
    case RANK_SECTION.SOLDIER:
      return component.soldiers.slice();
    default:
    case RANK_SECTION.ALL:
      return component.getAllRanks();
  }
};

const selectUniqueRandomRanks = (number, ranks) => {
  const selectedRanks = [];
  for (let i = 0; i < number; i++) {
    let randomIndex = getRandomInt(ranks.length);
    selectedRanks.push(ranks.splice(randomIndex, 1)[0]);
  }
  return selectedRanks;
};

const generateQuestions = (answerRanks, difficulty) => {
  let proposalNumber = 4;
  const questions = [];
  for (const answerRank of answerRanks) {
    let proposalRanks;

    switch (difficulty) {
      case DIFFICULTY.EASY:
        proposalNumber = 2;
        proposalRanks =
          answerRank.componentId == COMPONENT.ALL
            ? getRanksFrom(COMPONENT.ALL, RANK_SECTION.ALL)
            : getRanksFrom(answerRank.componentId, RANK_SECTION.ALL);
        break;

      case DIFFICULTY.NORMAL:
        proposalRanks = getRanksFrom(answerRank.componentId, RANK_SECTION.ALL);
        break;

      case DIFFICULTY.HARD:
        proposalRanks = getRanksFrom(
          answerRank.componentId,
          answerRank.rankSectionId
        );

        break;
    }

    let answeredRank = proposalRanks.splice(
      proposalRanks.findIndex((rank) => answerRank.imageSrc == rank.imageSrc),
      1
    );
    let proposals = [answeredRank[0].frenchName];

    for (let i = 1; i < proposalNumber; i++) {
      proposals.push(
        proposalRanks.splice(getRandomInt(proposalRanks.length), 1)[0]
          .frenchName
      );
    }

    questions.push(
      new Question(
        'Quel est ce grade ?',
        answerRank.imageSrc,
        shuffleArray(proposals),
        answerRank.frenchName
      )
    );
  }
  return questions;
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};
