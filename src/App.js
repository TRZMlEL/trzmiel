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
      <div className='h-0.5 bg-text ml-webborder mr-webborder'></div>
      <main className='w-screen h-auto flex flex-col'>
      <section className='w-screen h-screen flex flex-wrap'>
        <div className='w-1/2 h-5/6  flex items-center justify-center flex-col'>
          <h1 className='text-5xl z-10'>
            MATEUSZ<br />
            TRZMIEL
          </h1>
          <div className='text-2xl bg-halfprimary rounded-2xl w-fit flex items-center justify-center'>
            <h2>Frontend Developer and Photographer</h2>
          </div>
        </div>
        <div className='w-1/2 h-5/6  flex items-center justify-center'>
          <img alt="Matuesz Trzmiel Photo" src={mateuszTrzmiel} className='w-mojezdjecie'/>
        </div>
        <img alt="" src={separator} className='w-full absolute -bottom-28'/>
      </section>
        <section className='bg-primary flex flex-wrap pl-webborder pr-webborder' >
          <img alt="Code" src={code} className='w-1/2 pr-webborder mb-webborder rounded-3xl object-cover'/>
          <p className='text-3xl text-secondary w-1/2 pl-webborder'>
          Hi, 👋I've been learning programming for half a year to become
           a frontend developer, in the meantime, since programming, I also deal with photography.<br />
          <a>See my work</a>
          </p>
        </section>
        <section>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
