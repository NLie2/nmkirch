export default function CVSection( { heading, Timeline, reverse }){

  const dates = Object.keys(Timeline)
  const titles = Object.values(Timeline)

  return(
    <div className= "CV-section">
      <h1> {heading} </h1>
      {reverse ? Object.keys(Timeline).map((key) => (
        <h3 key={key}>{key} | {Timeline[key]}</h3>
      )) : 
      Object.keys(Timeline).reverse().map((key) => (
        <h3 key={key}>{key} | {Timeline[key]}</h3>
      ))
      }

    </div>
  )

}