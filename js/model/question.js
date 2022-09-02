export class Question {
  constructor(title, imageSrc, proposals, answer) {
    this.title = title;
    this.imageSrc = imageSrc;
    this.proposals = proposals;
    this.answer = answer;
  }

  checkAnswer(proposal) {
    return proposal == this.answer;
  }
}
