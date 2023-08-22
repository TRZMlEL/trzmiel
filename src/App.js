import './App.css';
import mateuszTrzmiel from './img/MateuszTrzmiel.png';
import separator from './img/Separator.png';

// pamiętaj robić npm run deploy

function App() {
  return (
    <div className="App bg-background text-text">
      <header className="flex justify-between align-end pl-webborder pr-webborder pt-webborder">
      <h3 className='text-3xl'>TRZMIEL</h3>
      <p className='text-2xl' >About me</p>
      <p className='text-2xl' >Skills</p>
      <p className='text-2xl' >Projects</p>
      <p className='text-2xl' >Contact me</p>
      </header>
      <div className='h-0.5 w-100% bg-text ml-webborder mr-webborder'></div>
      <main>
        <section className='w-screen h-screen'>
          <div className=' top-48 left-32 absolute flex flex-col'>
            <h1 className='text-5xl'>
              MATEUSZ<br />
              TRZMIEL
            </h1>
            <div className='text-2xl bg-primary rounded-2xl w-fit left-32 flex align-center justify-center'><h2>Frontend Developer and Photographer</h2></div>
          </div>
          <img alt="Matuesz Trzmiel Photo" src={mateuszTrzmiel} className='w-mojezdjecie right-32 absolute'/>
          <img alt="Matuesz Trzmiel Photo" src={separator} className='absolute -bottom-32 w-100%'/>
        </section>
        <section className='bg-primary' >
          <p className='text-3xl text-secondary'>
          Hi, <s>👋</s>I've been learning programming for half a year to become
           a frontend developer, in the meantime, since programming, I also deal with photography.<br />
          <a>See my work</a>
          </p>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
