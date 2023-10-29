import CVSection from './CV_section'

export default function CV(){
  return(
    <div className="CV middle"> 
      <CVSection 
        heading={"Education"}
        Timeline = {{
          "2022 - 2024": "Msc in Artificial Intelligence", 
          "2021 - 2022":  "Premaster in Computer Science",
          "2018 - 2021":  "BA in Philosophy of Psychology",
          "2017 - 2020":  "Bsc in Psychology"
        }}
        reverse = {false}
      />
      <CVSection 
        heading = {"Work Experience"}
        Timeline = {{
          "September 2021 - July 2022": "Student Ambassador, Erasmus University Rotterdam", 
          "May 2022 - July 2023":  "Software Development Intern, Varias",
          "October 2023 - present":  "Teaching Assistant General Assembly Software Engineering Immersive Bootcamp",
          "September 2023 - present":  "Research Intern, Institute for Artificial Intelligance and Medical Decision Support, Medical University of Vienna"
        }}
        reverse = {true}
      />
      <CVSection 
        heading = {"Extracurricular Activities and Voluntary Work"}
        Timeline = {{
          "September 2020 - July 2021": "Bookclub committee, PISE", 
          "September 2020 - September 2021": "Editor in Chief, Erasmus Student Journal of Philosophy", 
          "March 2022 - July 2023":  "Co-founder and boardmember, Effective Altruism Utrecht"
        }}
        reverse = {true}
      />
    </div>
  )
}