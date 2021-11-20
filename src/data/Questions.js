const questions = [
    { text: "Is your business model B2C or B2B or both?", answers: ["B2C", "B2B", "both"], sec: 1, id: 100 },
    { text: "Do you target all age brackets?", answers: ["Yes", "No"], sec: 1, id: 101 },
    { text: "Do you target all industries?", answers: ["Yes", "No"], sec: 1, id: 102 },
    { text: "Did you have an investment?", answers: ["Yes", "No"], sec: 2, id: 103 },
    { text: "how much was the investment?", answers: "", sec: 2, id: 104 },
]

export function getQuestions() {
    return questions;
}

