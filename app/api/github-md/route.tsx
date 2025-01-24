// app/api/github-md/route.ts
import { NextResponse } from "next/server";
// (Facultatif) Pour parser le Markdown en HTML, on peut ajouter remark et remark-html
import { remark } from "remark";
import remarkHtml from "remark-html";
import * as cheerio from "cheerio";

export async function GET() {
  try {
    // 1. URL brute du fichier .md sur GitHub (raw)
    const githubFileUrl =
      "https://raw.githubusercontent.com/abiForSofteam/kubernetes/refs/heads/main/architecture.md";

    // 2. Fetch du contenu Markdown
    const res = await fetch(githubFileUrl);
    if (!res.ok) {
      return NextResponse.json(
        { error: "Impossible de récupérer le fichier" },
        { status: 404 }
      );
    }
    const mdContent = await res.text();

    // 3. (Optionnel) Transformer le Markdown en HTML avec remark
    const processed = await remark().use(remarkHtml).process(mdContent);

    // 4. Convertir le résultat en string
    const htmlContent = processed.toString();

    // 3. Utilisation de cheerio pour styliser les titres en rouge
    const $ = cheerio.load(htmlContent);
    $("ol").each((_: any, el: any) => {
      $(el).attr(
        "style",
        "padding:2rem;padding-top:0; list-style-type: \\1F44D "
      );
    });
    $("p strong").each((_: any, el: any) => {
      $(el).attr("style", "color: #fca4f0;");
    });

    $("li").each((_: any, el: any) => {
      $(el).attr("style", "margin-top: 7px; margin-bottom: 7px");
    });

    $("li strong").each((_: any, el: any) => {
      $(el).attr("style", "color: #fca4f0");
    });

    const finalHtml = $.html();

    // 5. Renvoyer la réponse (au choix : JSON, HTML, etc.)
    //    Ici, on renvoie un objet JSON avec le HTML final.
    return NextResponse.json({
      rawMarkdown: mdContent,
      convertedHtml: htmlContent,
      html: finalHtml,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
