import React from 'react';
import CVSection from './CV_section';

export default function CV() {
  return (
    <div className="CV middle">
      <CVSection 
        heading={"Education"}
        toggleExpand={true}
        Timeline={{
          "2024 – present": {
            title: "King’s College UKRI CDT in Safe and Trusted Artificial Intelligence, Computer Science MPhil/PhD",
            points: [
              "Topic: ‘Towards Robust Reasoning in Language Models via Mechanistic Interpretability’",
              <p>Supervisor: <a href="https://www.cl.cam.ac.uk/~hy260/" target="_blank" rel="noopener noreferrer">Helen Yannakoudakis</a></p>,
              "Won one of 3 available fully funded positions out of more than 100 applicants"
            ]
          },
          "2022 - 2024": {
            title: "Master of Artificial Intelligence, Utrecht University",
            points: [
              "Grade Point Average: 8.0 (10= highest, 5= lowest)"
            ]
          },
          "2018 - 2021": {
            title: "Bachelor of Philosophy of Psychology, Erasmus University Rotterdam",
            points: [
              "Grade Point Average: 8.45",
              "Thesis grade: 9.0 | Topic: Phenomenology of Religious Experiences"
            ]
          },
          "2017 - 2020": {
            title: "Bachelor of Psychology (specialization Cognitive Psychology), Erasmus University Rotterdam",
            points: [
              "Grade Point Average: 7.6",
              "Thesis grade: 8.9 | Topic: The Effect Sentiment on Virality of Twitter Messages"
            ]
          }
        }}
      />
      <CVSection 
        heading={"Professional Experience"}
        toggleExpand={true}
        Timeline={{
          "July 2024 – August 2024": {
            title: "Cambridge ERA:AI Fellowship AI Technical Governance Research Fellow",
            points: [
              "Topic: White-Box Evaluations of LLMs",
              <p>Supervisor: <a href="https://stephencasper.com/" target="_blank" rel="noopener noreferrer">Stephen Casper</a></p>,
              "Won one of 25 places out of over 600 applications"
            ]
          },
          "September 2023 – May 2024": {
            title: "Institute for Artificial Intelligence, Medical University of Vienna",
            points: [
              "Writing AI master’s thesis on ethical benchmarking and scalable oversight in large language-based systems"
            ]
          },
          "October 2023 – April 2024": {
            title: "Teaching Assistant, General Assembly",
            points: [
              "Helping students understand concepts in computer science and web development (Django, React, Express.js, Flask)"
            ]
          },
          "May 2022 – July 2023": {
            title: "Junior Software Developer, Varias",
            points: [
              "Research & development, product validation",
              "Full-stack development in various languages (Python | TypeScript | JavaScript | HTML)"
            ]
          }
        }}
      />
      <CVSection 
        heading={"Honours Programmes and Awards"}
        Timeline={{
          "February – April 2024": {
            title: "ATHENA Fellowship, Oxford, UK",
            points: [
              "Mentorship program offering networking and development opportunities for technically qualified women in early AI safety careers"
            ]
          },
          "March 2023": {
            title: "Existential Risk Workshop, Boston, Massachusetts",
            points: [
              "Collaborated with Bio risk and AI safety professionals from MIT and NYU"
            ]
          },
          "September 2022 – March 2023": {
            title: "Open Philanthropy University Organizer Fellowship",
            points: [
              "Awarded for organizing the AI safety Team Utrecht"
            ]
          },
          "September 2019 – July 2020": {
            title: "Research Trainee Programme",
            points: [
              "Voluntary track for highly qualified students at the Erasmus School of Social and Behavioral Sciences",
              "Assisted in data collection and analysis of a research project within numerical cognition"
            ]
          }
        }}
      />
      <CVSection 
        heading={"Extracurricular Activities"}
        Timeline={{
          "Effective Altruism Utrecht": {
            title: "Co-founder and board member",
            points: [
              "Student association for sharing resources and organizing events relating to effective altruism",
              "Group grew to 40+ members within one year"
            ]
          },
          "AI Safety Team Utrecht": {
            title: "Co-founder and board member",
            points: [
              "Facilitated two iterations of the AGI safety fundamentals curriculum, teaching machine-learning fundamentals and AI safety risks"
            ]
          },
          "Erasmus Student Journal of Philosophy": {
            title: "Editor in chief",
            points: []
          }
        }}
      />
      <CVSection 
        heading={"Skills and Interests"}
        toggleExpand={true}
        Timeline={{
          "Technical Expertise": {
            title: "",
            points: [
              "Machine Learning: PyTorch, TensorFlow, Training and Fine-tuning LLMs",
              "Programming Languages: Python, JavaScript, R, C#, C, Java (Beginner), Haskell (Beginner)",
              "Web Development Frameworks: Django, React, Express.js, Flask"
            ]
          },
          "Languages": {
            title: "",
            points: ["German, English, Dutch, French"]
          },
        }}
      />
    </div>
  );
}
