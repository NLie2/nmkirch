import { Link } from 'react-router-dom'

import Poetry from './Poetry'


export default function Personal(){
  return(
    <div className="personal middle"> 
        <h1> Poetry and Stuff I like </h1>

        <h2> Poetry </h2>
        <h3> ... I wrote </h3>
        <Poetry 
          titlesAndLinks= { [ 
            {title: "wealthy raven", poem: `
            Raven, raven by the pond 
            Come to sit where I belong
            Call me princess, guard your queen
            Visit me by the window seem
            
            Tell me tales of other ravens
            And how you've seen and roamed the heavens
            Tell me I could climb a tree
            Fairytales that tell of me
            
            Lead me to a closed off garden
            Hide me in your feathered garments
            Let me tell you of a time
            When my red hair wasn't mine!
            
            Raven raven i can't see you
            Im a mute swan you're an eagle
            Like to hunt for my own fish
            But you may dream my secret wish
            `}, 
            {title: "soap bubble vacuum cleaner", poem: `
            You scream
            I stare
            I whisper and 
            You see me 

            Bubbly laughter 
            Drying tears 
            Jungle gyms that 
            taste of minty cigarettes 
            and sadness

            Cat and a wolf met in the forest once 
            and they 
            painted ancient gods with eyelashes and olive-oil  
            took icy showers of moistened kisses 
            read an open-ended bed time story and 
            knotted eyes like scoobie-doo 

            A good place to hide would be
            behind a wall of glass 
            where I’d think I would 
            observe you through a one-way mirror

            Mind that cats only fall asleep 
            when you least expect it 
            and that it takes a while for wolves to howl 
            when they aren’t lonely 

            Lifeguards secretly dream of drowning corpses 
            and your lovely face will be even prettier tomorrow 
            In stiller waters, 
            silly girls can dare to take a swim
            `}, 
            {title: "family vacation", poem: `
            
            On camping grounds, It's always quiet but you're never alone.
  
            Freckled men and women are mumbling flemish words to each other, 
            or sitting by the bar without talking at all. 
            Lanky teenagers are motionlessly tossing around balls 
            and lingering around the swings at the playground. 

            There's young boy showering with his mother in the women's bathroom 
            and I can hear their modest laughter as I brush my teeth above a small grey sink.  

            At night, a certain privacy arises in the dark as you hear the others breathing next to you. 
            The deprivation of privacy during daylight 
            makes being alone with your thoughts a luxury at nighttime 
            and you savour these quiet moments before drifting off to sleep. 

            Noone talks. 
            You do your thing in peaceful silence. 
            Slowly eating breakfast or mutely swinging swings. 

            `}, 
            {title: "bubble gum baby", poem: `
            Fresh and minty
            Wet and juicy 
            Gooey chewy 
            Bubble gum 

            Anyone could try me 
            Anyone could taste me 
            Anyone could chew me 
            Anyone could. 

            I will be however you want me 
            bend, stretch, mold, divide 
            Wrap around your tongue 
            Say hello to your gum

            And very slowly, 
            Very surely, 
            I will grow quite tired 
            And all that fresh and minty taste 
            will slowly fade away.

            Icky sticky 
            Yucky Chucky 
            Hard and ugly
            Bubble gum 

            Feel free to spit me 
            You’ve had your fun with me and now 
            We both know that I am done.

            I will pay you with my puppy eyes if you do it tonight still 
            being so very tasty was after all 
            only fun in hindsight
            `}
          ]}
        />
        <h3> ... I would read if I were you </h3>
        
        <Poetry 
          titlesAndLinks= { [ 
            {title: "Wear Sunscreen by Mary Schmich", link: "https://www.chicagotribune.com/columns/chi-schmich-sunscreen-column-column.html"},
            {title: "For M by Mikko Harvey", link: "https://www.foundryjournal.com/harvey.html"}
          ]}
        />

        <h2> Books that changed me </h2>
        <ul>
          <li> <Link to="https://www.goodreads.com/en/book/show/123471">I am a Strange Loup by Douglas Hofstadter</Link></li>
          <li> <Link to="https://www.goodreads.com/book/show/10225972-briefe-an-einen-jungen-dichter"> Letters to a Young Poet by Rainer Maria Rilke</Link></li>
          <li> <Link to="https://www.goodreads.com/book/show/91950.The_Myth_of_Sisyphus"> The Myth of Sysiphus by Albert Camus </Link></li>
        </ul>

        <h2> Podcasts I enjoy listening to </h2>
        <ul>
          <li> <Link to=""> Hardcore History by Dan Carlin</Link></li>
          <li> <Link to=""> Making Sense by Sam Harris </Link></li>
          <li> <Link to=""> The Myth of Sysiphus by Albert Camus </Link></li>
        </ul>

        <h2> Artists I like  </h2>
        <ul>
          <li>  Bob Dylan </li>
          <li>  Cage The Elephant </li>
        </ul>
    </div>
  )
}