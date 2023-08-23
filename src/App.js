import './App.css';
import mateuszTrzmiel from './img/MateuszTrzmiel.png';
import separator from './img/Separator.png';
import code from './img/code.png';

// pamiętaj robić npm run deploy

function App() {
  return (
    <div className="w-vw bg-background text-text">
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
        <section className='bg-background w-vw h-80vmin p-webborder flex flex-wrap items-stretch justify-around gap-6vmin'>
          <div className='w-4/5 bg-accent text-3xl rounded-3xl flex items-center justify-end '>
            <div className='flex justify-center flex-col items-center mr-webborder'>
              <h2>My GitHub profile</h2>
              <a href='https://github.com/TRZMlEL'>click here</a>
            </div>
          </div>
          <div className='w-1/5 bg-text text-3xl rounded-3xl text-secondary flex flex-col items-center justify-center'>
            <h2 className='text-4xl'>20</h2>
            <a>repositories</a>
          </div>
          <div className='w-2/3 bg-primary text-3xl rounded-3xl text-secondary flex justify-end items-center'>
            <div className='flex justify-center flex-col items-center mr-webborder'>
              <h2>My CV</h2>
              <a>click here</a>
            </div>
          </div>
          <div className='w-1/3 bg-accent text-3xl rounded-3xl flex justify-start items-center'>
            <div className='flex justify-center flex-col items-center ml-webborder'>
              <h2>Contact</h2>
              <a>click here</a>
            </div>
          </div>
        </section>
        <section className='bg-primary text-secondary text-2xl p-webborder font-bold'>
          <h2>Languages and tools:</h2>
          <div className='flex gap-6vmin mt-webborder'>
            <img className='w-8vmin' align="left" alt="HTML" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" />
            <img className='w-8vmin' align="left" alt="CSS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" />
            <img className='w-8vmin' align="left" alt="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
            <img className='w-8vmin' align="left" alt="Tailwindcss" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
            <img className='w-8vmin' align="left" alt="Git" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
            <img className='w-8vmin' align="left" alt="Figma" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
            <img className='w-8vmin' align="left" alt="GitHub" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
            <img className='w-8vmin' align="left" alt="VisualStudioCode" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
            <img className='w-8vmin' align="left" alt="Linux" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
          </div>
        </section>
        <section className='h-85vmin flex items-center justify-center gap-6vmin flex-col p-webborder'>
          <h2 className='text-3xl font-semibold'>CODING PROJECTS:</h2>
          <div className='flex gap-6vmin h-75vmin items-stretch text-secondary'>
            <div className='flex justify-end items-center flex-col w-40vmin bg-primary rounded-3xl p-webborder pt-3vmin pb-3vmin'>
              <img className='h-full w-full object-cover rounded-3xl mb-3vmin' src='https://source.unsplash.com/random' />
              <h3 className='text-2xl font-semibold'>Sliding Puzzle</h3>
              <a className='text-1.5xl' href='https://trzmlel.github.io/SlidingPuzzle/'>Open --&gt;</a>
              <a className='text-1.5xl' href='https://github.com/TRZMlEL/SlidingPuzzle'>Repository --&gt;</a>
            </div>
            <div className='flex justify-end items-center flex-col w-40vmin bg-primary rounded-3xl p-webborder pt-3vmin pb-3vmin'>
              <img className='h-full w-full object-cover rounded-3xl mb-3vmin' src='https://source.unsplash.com/random' />
              <h3 className='text-2xl font-semibold'>Sliding Puzzle</h3>
              <a className='text-1.5xl' href='https://trzmlel.github.io/SlidingPuzzle/'>Open --&gt;</a>
              <a className='text-1.5xl' href='https://github.com/TRZMlEL/SlidingPuzzle'>Repository --&gt;</a>
            </div>
            <div className='flex justify-end items-center flex-col w-40vmin bg-primary rounded-3xl p-webborder pt-3vmin pb-3vmin'>
              <img className='h-full w-full object-cover rounded-3xl mb-3vmin' src='https://source.unsplash.com/random' />
              <h3 className='text-2xl font-semibold'>Sliding Puzzle</h3>
              <a className='text-1.5xl' href='https://trzmlel.github.io/SlidingPuzzle/'>Open --&gt;</a>
              <a className='text-1.5xl' href='https://github.com/TRZMlEL/SlidingPuzzle'>Repository --&gt;</a>
            </div>
          </div>
        </section>
        <section className='h-70vmin flex justify-center items-center flex-col'>
          <h2  className='text-3xl font-semibold'>PHOTOS:</h2>
          <div className='h-55vmin w-full flex flex-wrap gap-6vmin'>
          <img className='h-1/3 w-1/3 rounded-es-full object-cover' src='https://source.unsplash.com/random' />
          <img className='h-1/3 w-2/3 rounded-tl-full object-cover' src='https://source.unsplash.com/random' />
          <img className='h-1/3 w-1/5 rounded-bl-full object-cover' src='https://source.unsplash.com/random' />
          <img className='h-1/3 w-4/5 rounded-ee-full object-cover' src='https://source.unsplash.com/random' />
          </div>
        </section>
        <section className='h-80vmin flex justify-center items-center flex-col mb-webborder'>
          <h2 className='text-3xl font-semibold'>CONTACT:</h2>
          <div className='h-70vmin w-120vmin bg-primary'>
            <input type="email" value="email" />
            <input value="topic" />
            <input value="message" />
            <button>SEND</button>
          </div>
        </section>
      </main>
      <footer className='h-40vmin bg-accent rounded-t-3xl mt-webborder'></footer>
    </div>
  );
}

export default App;
