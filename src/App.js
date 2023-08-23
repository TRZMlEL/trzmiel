import './App.css';
import mateuszTrzmiel from './img/MateuszTrzmiel.png';
import separator from './img/Separator.png';
import code from './img/code.png';

// pamiętaj robić npm run deploy

function App() {
  return (
    <div className="bg-background text-text">
      <header className="flex justify-between align-end pl-webborder pr-webborder pt-webborder">
        <h3 className='text-3xl'>TRZMIEL</h3>
        <p className='text-2xl' >About me</p>
        <p className='text-2xl' >Skills</p>
        <p className='text-2xl' >Projects</p>
        <p className='text-2xl' >Contact me</p>
      </header>
        <div className='h-0.5vmin bg-text ml-webborder mr-webborder'></div>
      <main className='w-vw h-auto flex flex-col'>
        <section className='w-vw h-90vmin flex flex-wrap'>
          <div className='w-1/2 h-5/6  flex items-center justify-center flex-col -translate-y-20'>
            <h1 className='text-5xl z-10'>
              MATEUSZ<br />
              TRZMIEL
            </h1>
            <div className='text-2xl bg-halfprimary rounded-2xl w-fit flex items-center justify-center'>
              <h2>Frontend Developer and Photographer</h2>
            </div>
          </div>
          <div className='w-1/2 h-5/6  flex items-center justify-center'>
            <img alt="Matuesz Trzmiel Photo" src={mateuszTrzmiel} className='w-mojezdjecie -translate-y-16'/>
          </div>
          <img alt="" src={separator} className='w-full absolute -bottom-12'/>
        </section>
        <section className='w-vw h-80vmin bg-primary flex flex-wrap p-webborder' >
          <img alt="Code" src={code} className='w-1/2 h-65vmin mb-webborder rounded-3xl object-cover pr-webborder'/>
          <p className='text-3xl text-secondary w-1/2 pl-webborder'>
          Hi, 👋I've been learning programming for half a year to become
            a frontend developer, in the meantime, since programming, I also deal with photography.<br />
          <a href="https://github.com/TRZMlEL">See my work --&gt;</a>
          </p>
        </section>
        <section>
          <div>
            <h2>My GitHub profile</h2>
            <a href='https://github.com/TRZMlEL'>click here</a>
          </div>
          <div>
            <h2>20</h2>
            <a>repositories</a>
          </div>
          <div>
            <h2>My CV</h2>
            <a>click here</a>
          </div>
          <div>
            <h2>Contact</h2>
            <a>click here</a>
          </div>
        </section>
        <section>
          <h2>Languages and tools:</h2>
          <div>
            <img align="left" alt="HTML" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" />
            <img align="left" alt="CSS" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" />
            <img align="left" alt="JavaScript" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
            <img align="left" alt="Tailwindcss" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
            <img align="left" alt="Git" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
            <img align="left" alt="Figma" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
            <img align="left" alt="GitHub" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
            <img align="left" alt="VisualStudioCode" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
            <img align="left" alt="Linux" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
          </div>
        </section>
        <section>
          <h2>CODING PROJECTS:</h2>
          <div>
            <h3>Sliding Puzzle</h3>
            <a href='https://trzmlel.github.io/SlidingPuzzle/'>Open --&gt;</a>
            <a href='https://github.com/TRZMlEL/SlidingPuzzle'>Repository --&gt;</a>
          </div>
          <div>
            <h3>Sliding Puzzle</h3>
            <a href='https://trzmlel.github.io/SlidingPuzzle/'>Open --&gt;</a>
            <a href='https://github.com/TRZMlEL/SlidingPuzzle'>Repository --&gt;</a>
          </div>
          <div>
            <h3>Sliding Puzzle</h3>
            <a href='https://trzmlel.github.io/SlidingPuzzle/'>Open --&gt;</a>
            <a href='https://github.com/TRZMlEL/SlidingPuzzle'>Repository --&gt;</a>
          </div>
        </section>
        <section>
          <h2>PHOTOS:</h2>
          <img />
          <img />
          <img />
          <img />
          <img />
          <img />
        </section>
        <section>
          <h2>CONTACT:</h2>
          <div>
            <input type="email" value="email" />
            <input value="topic" />
            <input value="message" />
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
