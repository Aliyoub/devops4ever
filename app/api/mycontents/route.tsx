import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/abiForSofteam/contents/refs/heads/main/labels-and-selectors.txt"
    );

    if (!response.ok) {
      return NextResponse.json(
        { status: response.status },
        { error: "Impossible de récupérer le fichier" }
      );
    }

    if (!response.body) {
      return NextResponse.json({ error: err.message }, { status: 500 });
      //   return res.status(500).json({ error: "No response body available" });
    }

    // Les navigateurs comme Chrome ou Edge peuvent traiter environ 200 000 à 250 000 caractères,
    // soit environ 200 Ko en UTF-8.
    // La limite peut être plus faible si le texte est complexe ou contient des caractères multi-octets.

    const reader = response.body.getReader();
    const byteLimit = 200000; // Nombre d'octets à récupérer
    const chunks = [];
    let totalBytesRead = 0;

    while (true) {
      const { done, value } = await reader.read();
      if (done || totalBytesRead >= byteLimit) {
        break;
      }

      if (value) {
        const bytesToRead = Math.min(byteLimit - totalBytesRead, value.length);
        chunks.push(value.slice(0, bytesToRead));
        totalBytesRead += bytesToRead;
      }
    }

    const limitedContent = Buffer.concat(chunks).toString("utf-8");
    // res.status(200).json({ content: limitedContent });
    return NextResponse.json({ content: limitedContent });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
