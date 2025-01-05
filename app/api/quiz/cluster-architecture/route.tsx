import { NextResponse } from "next/server";
import { questions } from "../../../quiz/kubernetes/cluster-architecture/questionsClusterArchitecture";

export async function GET() {
  // Rajout de token pour renforcer la sécurité
  const userId: string = "devops4ever"; // A remplacer par les infos d'authentification
  // Exemple de données retournées
  if (userId === "devops4ever")
    return NextResponse.json(questions, { status: 200 });
  else
    return NextResponse.json(
      { message: "Méthode non autorisée" },
      { status: 405 }
    );
}
