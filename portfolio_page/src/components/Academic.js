import AcademicSection from "./Academic_section"

export default function Academic(){
  return(
    <div className="academic middle">
      
      <h1> Academic Achievements and Publications </h1> 
        <h2> Theses </h2>
        <AcademicSection 
          title= {"The Effect of Message Sentiment on the Virality of Twitter Messages"}
          description={"Bachelors Thesis in Psychology"}
        />
        <AcademicSection 
          title= {"Psychology and Phenomenology of Religious Experiences - Investigations Into Religious Experiences and Arguments Against Epistemological Reductionism"}
          description={"Bachelors Thesis in Philosophy of Psychology"}
          link= {"https://thesis.eur.nl/pub/61183/NathalieMariaKirch_475068_BachelorThesis.pdf"}
        />

      <h2> Publications </h2>
      <AcademicSection 
          title= {"Psychology and Phenomenology of Religious Experiences"}
          description={"A shortened version of my Philosophy Bachelor's thesis was published in the Erasmus Student Journal of Philosophy and is also available on Google Scholar"}
          link = {"https://www.eur.nl/en/esphil/media/2022-02-nathalie-maria-kirch"}
        />

      {/* <h2> Blog Posts </h2> */}
    </div>
  )
}