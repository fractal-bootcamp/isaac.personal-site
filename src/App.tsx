import './App.css'
import BlurIn from "@/components/magicui/blur-in";
import FlickeringGrid from "@/components/magicui/flickering-grid";
import BlurFade from "@/components/magicui/blur-fade";

const images = [
  'https://placehold.co/400x400.png',
  'https://placehold.co/400x400.png',
  'https://placehold.co/400x400.png',
  'https://placehold.co/400x400.png',
  'https://placehold.co/400x400.png',
  'https://placehold.co/400x400.png',
];

function App() {
  return (
    <div className="relative min-h-screen"> {/* Wrapper for content */}
      <FlickeringGrid
        className="z-0 fixed inset-0"  
        squareSize={40}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.1}
        flickerChance={0.1}
      />
      <div className="relative z-10"> {/* Wrapper for actual content */}
        <div>
          <h3>Welcome to my website!</h3>
        </div>
        <h1>
          <BlurIn word={"Isaac Gemal"}></BlurIn>
        </h1>
        <h1>
          <BlurIn duration={1.5} word={"ships fast"}></BlurIn>
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
        <footer>
          <a href="https://github.com/isaacgemal" target="_blank" className="social-link github-link">
            <i className="fab fa-github"></i> GitHub 
          </a>
          <a href="https://x.com/Aizkmusic" target="_blank" className="social-link twitter-link">
            <i className="fab fa-x-twitter"></i> Twitter 
          </a>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/marked/2.0.3/marked.min.js"></script>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"></link>
        </footer>
      </div>
    </div>
  );
}

export default App;
