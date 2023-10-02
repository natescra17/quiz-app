class Option {
    constructor(text, isCorrect) {
        // Generate random id
        this.id = Math.floor(Math.random() * (1000 - 1)) + 1;
        this.text = text;
        this.isCorrect = isCorrect;
        this.isSelected = false;
    }
}

export default Option;
