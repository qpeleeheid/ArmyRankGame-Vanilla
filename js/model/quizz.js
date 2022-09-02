import { Question } from './question.js';

export class Quizz {
  constructor(questions) {
    this.currentQuestionIndex = 0;
    this.questions = questions;
    this.score = 0;
  }

  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  getCurrentIndex() {
    return this.currentQuestionIndex;
  }

  getScore() {
    return this.score;
  }

  checkProposalAnswer(proposal) {
    return this.questions[this.currentQuestionIndex].checkAnswer(proposal);
  }

  increaseScore(scoreUpgrade) {
    this.score += scoreUpgrade;
  }

  moveToNextQuestion() {
    if (this.currentQuestionIndex < this.questions.length) {
      this.currentQuestionIndex++;
    }
  }

  isFinished() {
    return this.currentQuestionIndex >= this.questions.length - 1;
  }

  getQuestionCount() {
    return this.questions.length;
  }
}
