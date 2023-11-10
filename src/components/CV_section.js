export default function CVSection( { heading, Timeline, reverse }){

  const dates = Object.keys(Timeline).reverse()
  const titles = Object.values(Timeline)
  console.log(reverse, dates)
  return(
    <div className= "CV-section">
      <h1> {heading} </h1>
      {reverse === true ? Object.keys(Timeline).map((key) => {
        return <h3 key={key}>{key} | {Timeline[key]}</h3>
        }) : 
      Object.keys(Timeline).reverse().map((key) => {
        console.log(key)
        return <h3 key={key}>{key} | {Timeline[key]}</h3>
        })
      }

    </div>
  )

}