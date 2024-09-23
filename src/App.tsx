import './App.css'
import BlurIn from "@/components/magicui/blur-in";
import FlickeringGrid from "@/components/magicui/flickering-grid";

function App() {

  return (
    <>
    <div className='Background'>
    <FlickeringGrid
        className="z-0 absolute inset-0 size-full"
        squareSize={40}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.1}
        flickerChance={0.1}
      /> 
      <h1>
        <BlurIn word={"Isaac Gemal"}></BlurIn>
      </h1>
      <h4>
        <BlurIn duration={1.5} word={"Builds stuff"}></BlurIn>
      </h4>
      <div>
        <h2>Welcome to my website!</h2>
      </div>
    </div>
    </>
  )
}

export default App
