import { useState } from 'react'
import './App.css'
import BlurIn from "@/components/magicui/blur-in";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome</h1>
      <h1>
      <BlurIn word={"Isaac Gemal"}></BlurIn>
      </h1>
      <h4>
        <BlurIn duration={1.5} word={"Builds stuff"}></BlurIn>
      </h4>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
