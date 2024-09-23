import './App.css'
import BlurIn from "@/components/magicui/blur-in";
import FlickeringGrid from "@/components/magicui/flickering-grid";
import BlurFade from "@/components/magicui/blur-fade";

const images = [
  'https://placehold.co/400x400.png',
  'https://placehold.co/400x400.png',
  'https://placehold.co/400x400.png'
];

function App() {

  return (
    <>
      <div>
        <FlickeringGrid
          className="z-0 absolute inset-0 size-full"
          squareSize={40}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.1}
          flickerChance={0.1}
        />
        <div>
          <h3>Welcome to my website!</h3>
        </div>
        <h1>
          <BlurIn word={"Isaac Gemal"}></BlurIn>
        </h1>
        <h1>
          <BlurIn duration={1.5} word={"Builds stuff"}></BlurIn>
        </h1>
          <br></br>
        <div>
          <section id="photos">
            <div className="columns-2 gap-20 sm:columns-3">
              {images.map((imageUrl, idx) => (
                <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
                  <img
                    className="mb-4 size-full rounded-lg object-contain"
                    src={imageUrl}
                  />
                </BlurFade>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default App
