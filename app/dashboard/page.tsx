"use client";

import React from "react";
import { styled } from "styled-components";
import ProgressChart from "../../components/ProgressChart/ProgressChart";
import SkillBreakdown from "../../components/SkillBreakdown/SkillBreakdown";
import { scoresData } from "./scoresData";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: #333;
  //   color: #333;
`;

const Title = styled.h1`
  color: #3b8fef;
`;

const Section = styled.div`
  width: 80%;
  margin: 20px 0;
  padding: 20px;
  border-radius: 10px;
  //   background: #3B8FEF;
  background: linear-gradient(135deg, #3b8fef, #fca4f0);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 25px;
`;

const Dashboard: React.FC = () => {
  // Pour récupérer le nom de chaque tableau qui se trouve dans l'objet scoresData
  const scoresDataElements = Object.keys(scoresData);
  return (
    <DashboardContainer>
      <Title>SUIVI DES PERFORMANCES - DevOps4Ever</Title>
      <Section>
        <h2
          style={{
            color: "#FCA4F0",
            fontSize: 18,
            fontWeight: "bolder",
            textAlign: "center",
          }}
        >
          PROGRESSION PAR THÈME
        </h2>
        {scoresDataElements.map((theme, index) => (
          <div key={index}>
            <h3
              style={{ color: "#fca4f0", fontSize: 16, fontWeight: "bolder" }}
            >
              {theme}
            </h3>
            <ProgressChart theme={`${theme}`} />
          </div>
        ))}
      </Section>
      <Section>
        <h2
          style={{
            color: "#FCA4F0",
            fontSize: 18,
            fontWeight: "bolder",
            textAlign: "center",
          }}
        >
          RÉSUMÉ DES COMPÉTENCES
        </h2>
        <SkillBreakdown />
      </Section>
    </DashboardContainer>
  );
};

export default Dashboard;
