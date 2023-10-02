import Option from "../../models/option";
import Question from "../../models/question";

export const correct_responses = [
    "That's absolutely right!",
    "You nailed it! Correct!",
    "Great job, that's the correct answer!",
    "You're on fire! That's correct!",
    "Correct! You're doing fantastic!",
    "Bingo! That's the right answer.",
    "You've got it! Well done!",
    "You're showing off your knowledge! Correct!",
    "Excellent choice! That's correct.",
    "You're on the right track! Correct!"
];

export const incorrect_responses = [
    "Oops, that's not quite right.",
    "Close, but not the correct answer.",
    "Sorry, that's not the right one.",
    "Almost there! But not quite.",
    "Incorrect. Don't give up!",
    "Not the answer we were looking for.",
    "No, that's not the right answer.",
    "Unfortunately, that's incorrect.",
    "Sorry, that's not what we were looking for.",
    "That's not it, but don't give up!",
    "Wrong answer, but you can do it!",
    "Oops, not quite on the mark."
];

export const GAME = [
    new Question(
        "Entertainment: Japanese Anime & Manga",
        "hard",
        "In 'Highschool of the Dead', where did Komuro and Saeko establish to meet after the bus explosion?",
        [
            new Option("Eastern Police Station", true),
            new Option("The Center Mall", false),
            new Option("Komuro's House", false),
            new Option("On The Main Bridge", false)
        ]
    ),
    new Question(
        "History",
        "hard",
        "When was the city of Rome, Italy founded?",
        [
            new Option("753 BCE", true),
            new Option("902 BCE", false),
            new Option("524 BCE", false),
            new Option("697 BCE", false)
        ]
    )
];
