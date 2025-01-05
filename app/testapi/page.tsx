"use client";

import React, { useEffect, useState } from "react";

const Page = () => {
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    fetch("/api/quiz/cluster-architecture")
      .then((response) => response.json())
      .then((data) => {
        setQuiz(data);
        console.log("data quiz", data);
      });
    {
      console.log("data quiz", quiz);
    }
  }, []);

  return <div>Test Api</div>;
};

export default Page;
