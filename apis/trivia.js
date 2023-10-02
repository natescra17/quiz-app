import { get } from "./index";
import { URLS } from "./constants";
import Option from "../models/option";
import Question from "../models/question";

export default async function getTrivia() {
    try {
        const data = await get(URLS.trivia);
        const { results } = data;

        const trivia = [];

        results.forEach((element) => {
            const options = [];
            options.push(new Option(element.correct_answer, true));
            element.incorrect_answers.forEach((opt) => {
                options.push(new Option(opt, false));
            });
            options.sort((a, b) => a.id - b.id);

            const question = new Question(
                element.category,
                element.difficulty,
                element.question.replace(/&quot;/g, ""),
                options
            );

            trivia.push(question);
        });
        return trivia;
    } catch (error) {
        return error;
    }
}
