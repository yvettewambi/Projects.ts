export type Question = {
  category: string;
  correctAnswer: string;
  difficulty: string;
  wrondAnswer: string[];
  question: string;
  type: string;
};
export type QuestionState = Question & { answers: string[] };
export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  TOUGH = "hard",
}
export const fetchQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const endpoint = `https://opentdb.com/api.php?amount=20&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  console.log(data);
};
