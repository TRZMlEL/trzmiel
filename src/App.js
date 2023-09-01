import React from 'react';
import mateuszTrzmiel from './img/mateuszTrzmiel.png';
import homeHex from './img/homeHex.png';
import Contact from './Contact';
import CodingProjects from './CodingProjects';
import Photos from './Photos';
import footer from './img/footer.png';
import HexSkillsDecoration from './img/HexSkillsDecoration.png';
import HexDecoration from './img/HexDecoration.png';

function App() {
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='bg-dark w-screen text-light font-Lato'>
      <header className='ml-8rem mr-8rem h-4rem flex justify-end flex-col'>
        <nav className='flex w-full items-end justify-between'>
          <h2 className='text-4xl tracking-tight font-semibold leading-none hover:text-color'>TRZMIEL</h2>
          <div className='hidden lg:flex text-2xl h-full gap-1rem font-semibold leading-none items-end'>
            <p className='hover:underline underline-offset-1' onClick={() => scrollToSection('about')}>About me</p>
            <p className='hover:underline underline-offset-1' onClick={() => scrollToSection('skills')}>Skills</p>
            <p className='hover:underline underline-offset-1' onClick={() => scrollToSection('projects')}>Projects</p>
            <p className='hover:underline underline-offset-1' onClick={() => scrollToSection('contact')}>Contact</p>
          </div>
          <div className='flex h-full gap-1rem'>
            <a href='https://www.facebook.com/TRZMlEL/' target='_blank' rel='noopener noreferrer'>
              <svg className='h-3rem w-3rem fill-light hover:fill-color' alt='Facebook' xmlns="http://www.w3.org/2000/svg">
              <path d="M48 34.4865C48 43.2225 42.792 48.4305 34.056 48.4305H31.2C29.88 48.4305 28.8 47.3505 28.8 46.0305V32.1825C28.8 31.5345 29.328 30.9825 29.976 30.9825L34.2 30.9105C34.536 30.8865 34.824 30.6465 34.896 30.3105L35.736 25.7265C35.808 25.2945 35.472 24.8865 35.016 24.8865L29.904 24.9585C29.232 24.9585 28.704 24.4305 28.68 23.7825L28.584 17.9025C28.584 17.5185 28.896 17.1825 29.304 17.1825L35.064 17.0865C35.472 17.0865 35.784 16.7745 35.784 16.3665L35.688 10.6065C35.688 10.1985 35.376 9.88648 34.968 9.88648L28.488 9.98251C24.504 10.0545 21.336 13.3185 21.408 17.3025L21.528 23.9025C21.552 24.5745 21.024 25.1025 20.352 25.1265L17.472 25.1745C17.064 25.1745 16.752 25.4865 16.752 25.8945L16.824 30.4545C16.824 30.8625 17.136 31.1745 17.544 31.1745L20.424 31.1265C21.096 31.1265 21.624 31.6545 21.648 32.3025L21.864 45.9825C21.888 47.3265 20.808 48.4305 19.464 48.4305H13.944C5.208 48.4305 0 43.2225 0 34.4625V14.3745C0 5.63848 5.208 0.430481 13.944 0.430481H34.056C42.792 0.430481 48 5.63848 48 14.3745V34.4865Z"/>
              </svg></a>

            <a href='https://www.linkedin.com/in/mateusztrzmiel/' target='_blank' rel='noopener noreferrer'>
              <svg className='h-3rem w-3rem fill-light hover:fill-color' alt='LinkedIN' xmlns="http://www.w3.org/2000/svg">
              <path d="M32.4004 14.8307C30.3565 14.8237 28.3313 15.2198 26.4407 15.9963C24.55 16.7728 22.8311 17.9144 21.3821 19.3559C19.9331 20.7974 18.7827 22.5105 17.9965 24.3971C17.2103 26.2837 16.8038 28.3068 16.8003 30.3507V46.0306C16.8003 46.6671 17.0532 47.2776 17.5032 47.7276C17.9533 48.1777 18.5638 48.4306 19.2003 48.4306H24.8003C25.4368 48.4306 26.0473 48.1777 26.4974 47.7276C26.9475 47.2776 27.2003 46.6671 27.2003 46.0306V30.3507C27.1998 29.6237 27.3525 28.9049 27.6484 28.2409C27.9444 27.5769 28.3769 26.9828 28.9178 26.4972C29.4588 26.0116 30.096 25.6455 30.788 25.4227C31.4799 25.1998 32.211 25.1253 32.9337 25.204C34.2297 25.3673 35.4208 26.0005 36.2809 26.9835C37.1411 27.9666 37.6106 29.2311 37.6004 30.5373V46.0306C37.6004 46.6671 37.8532 47.2776 38.3033 47.7276C38.7534 48.1777 39.3639 48.4306 40.0004 48.4306H45.6004C46.2369 48.4306 46.8474 48.1777 47.2975 47.7276C47.7476 47.2776 48.0004 46.6671 48.0004 46.0306V30.3507C47.9969 28.3068 47.5905 26.2837 46.8043 24.3971C46.0181 22.5105 44.8676 20.7974 43.4186 19.3559C41.9697 17.9144 40.2507 16.7728 38.3601 15.9963C36.4694 15.2198 34.4442 14.8237 32.4004 14.8307Z"/>
              <path d="M9.60004 17.2303H2.40001C1.07452 17.2303 0 18.3048 0 19.6303V46.0301C0 47.3556 1.07452 48.4301 2.40001 48.4301H9.60004C10.9255 48.4301 12 47.3556 12 46.0301V19.6303C12 18.3048 10.9255 17.2303 9.60004 17.2303Z"/>
              <path d="M6.00002 12.4304C9.31375 12.4304 12 9.74414 12 6.43045C12 3.11676 9.31375 0.430481 6.00002 0.430481C2.6863 0.430481 0 3.11676 0 6.43045C0 9.74414 2.6863 12.4304 6.00002 12.4304Z"/>
              </svg></a>
            <a href='https://www.instagram.com/TRZMlEL/' target='_blank' rel='noopener noreferrer'>
            <svg className='h-3rem w-3rem fill-light hover:fill-color' alt='Instagram' xmlns="http://www.w3.org/2000/svg">
            <path d="M34.073 0.430481H13.951C5.2106 0.430481 0 5.63848 0 14.3745V34.4625C0 43.2225 5.2106 48.4305 13.951 48.4305H34.049C42.7893 48.4305 47.9999 43.2225 47.9999 34.4865V14.3745C48.0239 5.63848 42.8133 0.430481 34.073 0.430481ZM24.012 33.7425C18.8734 33.7425 14.6953 29.5665 14.6953 24.4305C14.6953 19.2945 18.8734 15.1185 24.012 15.1185C29.1505 15.1185 33.3286 19.2945 33.3286 24.4305C33.3286 29.5665 29.1505 33.7425 24.012 33.7425ZM38.227 12.1425C38.107 12.4305 37.9389 12.6945 37.7228 12.9345C37.4827 13.1505 37.2185 13.3185 36.9304 13.4385C36.6423 13.5585 36.3301 13.6305 36.0179 13.6305C35.3696 13.6305 34.7693 13.3905 34.3131 12.9345C34.097 12.6945 33.9289 12.4305 33.8088 12.1425C33.6888 11.8545 33.6168 11.5425 33.6168 11.2305C33.6168 10.9185 33.6888 10.6065 33.8088 10.3185C33.9289 10.0065 34.097 9.76648 34.3131 9.52648C34.8654 8.97448 35.7058 8.71048 36.4742 8.87848C36.6423 8.90248 36.7863 8.95048 36.9304 9.02248C37.0745 9.07048 37.2185 9.14248 37.3626 9.23848C37.4827 9.31048 37.6027 9.43048 37.7228 9.52648C37.9389 9.76648 38.107 10.0065 38.227 10.3185C38.3471 10.6065 38.4191 10.9185 38.4191 11.2305C38.4191 11.5425 38.3471 11.8545 38.227 12.1425Z"/>
            </svg></a>
          </div>
        </nav>
        <div className='w-full h-0.25rem bg-light mt-0.5rem'></div>
      </header>
      <main>
        <section className='w-full flex' id='home'>
          <img className='z-0 absolute h-32rem w-32rem bottom-3rem right-8rem' src={ homeHex } alt=' ' />
          <div className='w-screen pt-2rem pb-2rem md:w-1/2 flex flex-col items-start justify-center md:pl-8rem md:pr-8rem pl-2rem pr-2rem z-10'>
            <p className='text-3xl font-medium'>Hi, my name is</p>
            <h1 className='text-5xl md:text-8xl font-bold tracking-tight'>MATEUSZ<br />TRZMIEL</h1>
            <p className='text-3xl font-medium leading-8'> and I am learning to become a Frontend Developer. In the meantime, alongside programming, I also have a passion for photography.</p>
          </div>
          <div className='hidden md:flex w-1/2 z-10 items-end justify-center'>
            <img className='hidden md:block w-3/5' src={ mateuszTrzmiel } alt='Moje zdjęcie' />
          </div>
        </section>
        <section className=' z-40 relative section bg-color w-screen pl-2rem pr-2rem lg:pl-16rem lg:pr-16rem pt-4rem pb-4rem' id='about'>
          <img className=' absolute w-10rem -translate-x-16rem -translate-y-11rem' alt=' ' src={ HexDecoration } />
          <p className=' z-40 text-dark text-3xl font-semibold target:bg-color'>Currently, I am attending the Zespół Szkół Technicznych w Ostrowie Wielkopolskim im. Waldemara Gostomczyka, where I am studying Computer Science. It was my passion for video games that initially led me to this field, rather than programming. It was during my time at the school that I first held a camera in my hands, which helped me see the world around me in a different light. For the past six months, I have been focusing on learning frontend development.</p>
        </section>
        <section className='pt-4rem pb-4rem lg:pr-16rem lg:pl-16rem flex flex-wrap z-10 text-dark' id='skills1'>
        <h4 className='hidden lg:block -rotate-90 absolute -left-10rem font-bold text-6xl text-center translate-y-15rem opacity-40'>CREATE WITH ME</h4>
          <div className='z-20 relative w-2/3 pr-1rem pb-1rem'>
            <div className='h-16rem bg-color rounded-lg flex p-4rem justify-end items-center'>
              <svg className='absolute -translate-x-20rem translate-y-2rem' width="300" height="300" viewBox="0 0 262 262" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M176.618 239.257C173.734 239.257 170.967 238.112 168.928 236.072C166.888 234.032 165.743 231.266 165.743 228.382V200.106C166.08 196.854 165.732 193.566 164.721 190.457C163.709 187.347 162.057 184.484 159.87 182.053C158.516 180.585 157.593 178.772 157.201 176.813C156.809 174.855 156.965 172.826 157.65 170.95C158.335 169.074 159.524 167.423 161.086 166.177C162.648 164.932 164.522 164.141 166.504 163.891C193.04 160.738 217.509 152.255 217.509 106.252C217.517 97.6615 214.982 89.2607 210.223 82.109C205.831 75.5254 204.227 67.4693 205.764 59.7058C206.744 54.6414 206.744 49.436 205.764 44.3716C197.62 47.125 189.953 51.1238 183.034 56.2257C181.726 57.1546 180.229 57.7826 178.649 58.0646C177.07 58.3467 175.448 58.2758 173.899 57.857C154.273 52.3112 133.494 52.3112 113.867 57.857C112.319 58.2758 110.696 58.3467 109.117 58.0646C107.538 57.7826 106.04 57.1546 104.732 56.2257C97.7711 51.0647 90.0224 47.0618 81.7851 44.3716C80.7509 49.4307 80.7509 54.6467 81.7851 59.7058C83.2107 67.5671 81.5345 75.6749 77.1087 82.3265C72.3699 89.5284 69.8374 97.9574 69.8222 106.578C69.8222 148.883 90.2678 160.194 120.936 164.109C122.943 164.358 124.841 165.161 126.416 166.429C127.991 167.697 129.182 169.379 129.854 171.287C130.486 173.137 130.608 175.124 130.206 177.038C129.804 178.952 128.894 180.722 127.57 182.162C125.455 184.423 123.831 187.098 122.802 190.018C121.772 192.938 121.359 196.04 121.589 199.127V228.382C121.589 231.266 120.443 234.032 118.403 236.072C116.364 238.112 113.598 239.257 110.713 239.257C107.829 239.257 105.063 238.112 103.023 236.072C100.984 234.032 99.8381 231.266 99.8381 228.382V222.183C89.1516 223.412 78.3271 221.98 68.3278 218.014C58.3285 214.049 49.4647 207.673 42.5252 199.454C38.9581 195.5 34.6784 192.253 29.9098 189.883C28.5245 189.526 27.2231 188.9 26.0798 188.04C24.9366 187.18 23.9739 186.103 23.2468 184.871C22.5197 183.639 22.0424 182.276 21.8421 180.859C21.6419 179.443 21.7226 178.001 22.0796 176.615C22.4366 175.23 23.063 173.929 23.923 172.785C24.7831 171.642 25.8598 170.68 27.0918 169.952C28.3239 169.225 29.6871 168.748 31.1036 168.548C32.5201 168.348 33.9622 168.428 35.3475 168.785C43.7133 171.833 51.1885 176.916 57.0981 183.576C67.9734 194.451 78.8487 204.021 99.5118 200.106C99.1486 194.267 100 188.416 102.013 182.923C79.61 177.268 47.6366 161.173 47.6366 106.796C47.6079 93.9155 51.3919 81.3148 58.5119 70.5811C59.8344 68.5997 60.3409 66.1842 59.9257 63.8384C57.7281 52.0993 58.9745 39.9751 63.5146 28.9287C64.1314 27.4558 65.0651 26.1368 66.2492 25.0654C67.4334 23.9941 68.8389 23.1966 70.366 22.7297C74.0636 21.6422 87.3315 19.4671 112.453 35.7801C132.79 30.8863 153.997 30.8863 174.334 35.7801C199.456 19.4671 212.724 21.5334 216.313 22.7297C217.84 23.1966 219.245 23.9941 220.43 25.0654C221.614 26.1368 222.547 27.4558 223.164 28.9287C227.713 40.011 228.96 52.1725 226.753 63.9472C226.531 65.0081 226.522 66.1027 226.727 67.1671C226.933 68.2314 227.348 69.2442 227.949 70.1461C235.09 80.9106 238.875 93.5523 238.825 106.47C238.825 161.608 207.069 177.594 184.448 182.597C186.441 188.433 187.254 194.606 186.841 200.759V228.382C186.846 231.157 185.79 233.828 183.889 235.85C181.989 237.872 179.388 239.091 176.618 239.257Z" fill="#1A1100"/>
              </svg>
              <div className='w-1/2 h-full flex flex-col items-center justify-center'>
                <p className='text-3xl font-semibold'>My GitHub profile</p>
                <p className='text-3xl font-semibold underline underline-offset-2 hover:text-light'><a href='https://github.com/TRZMlEL' target='_blank' rel='noopener noreferrer'>Click here</a></p>
              </div>
            </div>
          </div>
          <div className='z-20 relative w-1/3 pl-1rem pb-1rem'>
            <div className='h-16rem bg-color rounded-lg flex flex-col items-center justify-center'>
            <p className='text-6xl'>14</p>
            <p className='text-3xl font-semibold'>repositories</p>
            </div>
          </div>
          <div className='z-20 relative w-3/5 pr-1rem pt-1rem'>
            <div className='h-16rem bg-color rounded-lg flex p-4rem justify-end items-center'>
              <p className='absolute font-black -translate-x-8rem translate-y-3rem' style={{ fontSize: '20rem' }}>CV</p>
              <div className='flex flex-col justify-center items-center'>
                <p className='text-3xl font-semibold'>My CV</p>
                <p className='text-3xl font-semibold underline underline-offset-2 hover:text-light'><a href='' target='_blank' rel='noopener noreferrer'>Click here</a></p>
              </div>
            </div>
          </div>
          <div className='w-2/5 pl-1rem pt-1rem'>
            <div className='z-0 h-16rem bg-color rounded-lg'>
              <img className='hidden lg:block z-10 -translate-x-0rem -translate-y-8rem absolute w-35rem' alt=' ' src={ HexSkillsDecoration }/>
            </div>
          </div>
        </section>
        <section className='z-20 relative section pt-4rem pb-4rem lg:pr-16rem lg:pl-16rem bg-color flex flex-col items-center' id="skills">
          <h2 className='text-dark font-semibold text-4xl leading-none mb-2rem'>LANGUAGES AND TOOLS</h2>
          <div className='flex gap-1rem justify-center' >
            <img className='w-5rem h-full' alt="HTML" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" />
            <img className='w-5rem h-full' alt="CSS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" />
            <img className='w-5rem h-full' alt="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
            <img className='w-5rem h-full' alt="Tailwindcss" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
            <img className='w-5rem h-full' alt="Git" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
            <img className='w-5rem h-full' alt="Figma" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
            <img className='w-5rem h-full' alt="GitHub" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
            <img className='w-5rem h-full' alt="VisualStudioCode" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
            <img className='w-5rem h-full' alt="Linux" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
          </div>
        </section>
        <section id="projects" className="section">
          <CodingProjects />
        </section>
        <section id='photos'>
          <Photos />
        </section>
        <section id="contact" className="section">
          <h4 className='hidden lg:block -rotate-90 absolute -left-10rem font-bold text-6xl text-center translate-y-19rem opacity-40'>DIFFERENT  IS  BETTER<br></br> THAN  GOOD</h4>
          <Contact />
        </section>
      </main>
      <footer>
        <img className='w-screen translate-y-4rem' alt=' ' src={ footer } />
      </footer>
    </div>  
  );
}

export default App; 