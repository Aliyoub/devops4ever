"use client";
// pages/index.js
import Head from "next/head";
import Quiz from "./Quiz";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Application de Quiz</title>
        <meta
          name="description"
          content="Une application de quiz interactive avec animations."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Bienvenue sur l'application de Quiz</h1>
        <Quiz />
      </main>
    </div>
  );
}
