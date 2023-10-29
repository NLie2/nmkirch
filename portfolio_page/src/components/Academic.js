import AcademicSection from "./Academic_section"

export default function Academic(){
  return(
    <div className="academic">
      
      <h1> Academic Achievements and Publications </h1> 
        <h2> Theses </h2>
        <AcademicSection 
          title= {"The Effect of Message Sentiment on the Virality of Twitter Messages"}
          description={"Bachelors Thesis in Psychology"}
        />
        <AcademicSection 
          title= {"Psychology and Phenomenology of Religious Experiences - Investigations Into Religious Experiences and Arguments Against Epistemological Reductionism"}
          description={"Bachelors Thesis in Philosophy of Psychology"}
        />

      <h2> Publications </h2>
      <AcademicSection 
          title= {"Psychology and Phenomenology of Religious Experiences"}
          description={"My Philosophy Bachelor's thesis was published in the Erasmus Student Journal of Philosophy and is also available on Google Scholar"}
        />

      {/* <h2> Blog Posts </h2> */}
    </div>
  )
}