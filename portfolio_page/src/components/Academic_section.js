export default function AcademicSection( { heading, title, link, pdf, description} ){
  return(
    <div className="academic">
      <h2> {heading} </h2>
      <h3> {title} </h3>
      <p> {description} </p>
    </div>
  )
}