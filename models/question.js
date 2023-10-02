class Question {
    constructor(category, difficulty, question, options) {
        // Generate random id
        this.id = Math.floor(Math.random() * (1000 - 1)) + 1;
        this.category = category;
        this.difficulty = difficulty;
        this.question = question;
        this.options = options;
    }
}

export default Question;
