import React from "react";

const Experience = () => (
  <section className="my-8">
    <h2 className="text-2xl font-semibold mb-2">Experience</h2>
    <div className="space-y-4">
      <div>
        <h3 className="font-bold">Treasurer</h3>
        <p>DIU CIS Club — Dhaka, Bangladesh</p>
        <p className="text-sm text-gray-500">October 2024 – Present</p>
        <ul className="list-disc ml-5">
          <li>Manage financial operations and budgets for the club.</li>
          <li>
            Organize tech events and workshops focused on computing, AI, and
            emerging technologies.
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold">Co-Founder</h3>
        <p>Team CodeMars — Dhaka, Bangladesh</p>
        <p className="text-sm text-gray-500">January 2023 – March 2023</p>
        <ul className="list-disc ml-5">
          <li>
            Co-founded an e-learning platform aimed at teaching coding skills to
            beginners.
          </li>
          <li>
            Led the project from concept to execution, including platform design
            and curriculum development.
          </li>
          <li>
            Gained valuable insights into the challenges of scaling educational
            platforms.
          </li>
          <li>
            Despite pausing the project due to low enrollment, we learned key
            lessons about product-market fit and audience targeting.
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Experience;
