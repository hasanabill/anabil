import React from "react";

const achievements = [
  "Fun With Code programming contest — 2nd place",
  "NASA Space App Challenge Hackathon – Selected for In-Person Competition",
  "Code Samurai – Finalist",
  "International Collegiate Programming Contest (ICPC) – Participant",
  "Standup Hackathon – Top 10",
];

const Achievements = () => (
  <section className="my-8">
    <h2 className="text-2xl font-semibold mb-2">Competitions & Achievements</h2>
    <ul className="list-disc ml-5">
      {achievements.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </section>
);

export default Achievements;
