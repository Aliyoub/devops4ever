import { NextResponse } from "next/server";
import { questions } from "../../../quiz/kubernetes/cluster-architecture/questionsClusterArchitecture";

export async function GET() {
  // Rajout de token pour renforcer la sécurité
  const userId: string = "devops4ever"; // A remplacer par les infos d'authentification
  // Exemple de données retournées
  if (userId === "devops4ever") {
    // Créer une nouvelle version de l'objet sans le champ "answer"
    const questionsWithoutAnswer = questions.map(({ answer, ...rest }) => rest);
    return NextResponse.json(questionsWithoutAnswer, { status: 200 });
  } else
    return NextResponse.json(
      { message: "Méthode non autorisée" },
      { status: 405 }
    );
}

// import { NextResponse } from "next/server";
// import { questions } from "@/questions";

// ✅ GET : Renvoie les questions sans les réponses
// export async function GET() {
//   const questionsWithoutAnswer = questions.map(({ answer, ...rest }) => rest);
//   return NextResponse.json(questionsWithoutAnswer, { status: 200 });
// }

// ✅ POST : Vérifie si la réponse soumise est correcte
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { question_id, userAnswer } = body;

    // Trouver la question correspondant à l'ID
    const question = questions.find((q) => q.question_id === question_id);

    if (!question) {
      return NextResponse.json(
        { error: "Question not found" },
        { status: 404 }
      );
    }

    const userGoodAnswers = [];
    const userBadAnswers = [];
    // Vérification de la réponse
    const isCorrect = question.answer === userAnswer;
    isCorrect
      ? userGoodAnswers.push(userAnswer)
      : userBadAnswers.push(userAnswer);
    return NextResponse.json({
      userGoodAnswers: userGoodAnswers,
      userBadAnswers: userBadAnswers,
      correct: isCorrect,
      message: isCorrect ? "Correct Answer!" : "Incorrect Answer",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request format" },
      { status: 400 }
    );
  }
}
