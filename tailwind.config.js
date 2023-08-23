/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'text': '#EBF1E9',
      'background': '#121910',
      'primary': '#B9D4BA',
      'halfprimary': '#B9D4BA50',
      'secondary': '#101910',
      'accent': '#5D986B',
    },
    fontSize: {
      '1xl': '2vmin',
      '2xl': '4vmin',
      '3xl': '6vmin',
      '4xl': '96px',
      '5xl': '15vmin',
    },
    padding: {
      'webborder': '6vmin',
    },
    margin: {
      'webborder': '6vmin',
    },
    width: {
      'screen': '100vw',
      'mojezdjecie': '60vmin',
      '1/2': '50%',
      '1/3': '33%',
      'full': '100%',
      '1vmin': '1vmin',
      '2vmin': '2vmin',
      '3vmin': '3vmin',
      '4vmin': '4vmin',
      '5vmin': '5vmin',
      '6vmin': '6vmin',
      '7vmin': '7vmin',
      '8vmin': '8vmin',
      '9vmin': '9vmin',
      '10vmin': '10vmin',
      '11vmin': '11vmin',
      '12vmin': '12vmin',
      '13vmin': '13vmin',
      '14vmin': '14vmin',
      '15vmin': '15vmin',
      '16vmin': '16vmin',
      '17vmin': '17vmin',
      '18vmin': '18vmin',
      '19vmin': '19vmin',
      '20vmin': '20vmin',
      '21vmin': '21vmin',
      '22vmin': '22vmin',
      '23vmin': '23vmin',
      '24vmin': '24vmin',
      '25vmin': '25vmin',
      '26vmin': '26vmin',
      '27vmin': '27vmin',
      '28vmin': '28vmin',
      '29vmin': '29vmin',
      '30vmin': '30vmin',
      '31vmin': '31vmin',
      '32vmin': '32vmin',
      '33vmin': '33vmin',
      '34vmin': '34vmin',
      '35vmin': '35vmin',
      '36vmin': '36vmin',
      '37vmin': '37vmin',
      '38vmin': '38vmin',
      '39vmin': '39vmin',
      '40vmin': '40vmin',
      '41vmin': '41vmin',
      '42vmin': '42vmin',
      '43vmin': '43vmin',
      '44vmin': '44vmin',
      '45vmin': '45vmin',
      '46vmin': '46vmin',
      '47vmin': '47vmin',
      '48vmin': '48vmin',
      '49vmin': '49vmin',
      '50vmin': '50vmin',
      '51vmin': '51vmin',
      '52vmin': '52vmin',
      '53vmin': '53vmin',
      '54vmin': '54vmin',
      '55vmin': '55vmin',
      '56vmin': '56vmin',
      '57vmin': '57vmin',
      '58vmin': '58vmin',
      '59vmin': '59vmin',
      '60vmin': '60vmin',
      '61vmin': '61vmin',
      '62vmin': '62vmin',
      '63vmin': '63vmin',
      '64vmin': '64vmin',
      '65vmin': '65vmin',
      '66vmin': '66vmin',
      '67vmin': '67vmin',
      '68vmin': '68vmin',
      '69vmin': '69vmin',
      '70vmin': '70vmin',
      '71vmin': '71vmin',
      '72vmin': '72vmin',
      '73vmin': '73vmin',
      '74vmin': '74vmin',
      '75vmin': '75vmin',
      '76vmin': '76vmin',
      '77vmin': '77vmin',
      '78vmin': '78vmin',
      '79vmin': '79vmin',
      '80vmin': '80vmin',
      '81vmin': '81vmin',
      '82vmin': '82vmin',
      '83vmin': '83vmin',
      '84vmin': '84vmin',
      '85vmin': '85vmin',
      '86vmin': '86vmin',
      '87vmin': '87vmin',
      '88vmin': '88vmin',
      '89vmin': '89vmin',
      '90vmin': '90vmin',
      '91vmin': '91vmin',
      '92vmin': '92vmin',
      '93vmin': '93vmin',
      '94vmin': '94vmin',
      '95vmin': '95vmin',
      '96vmin': '96vmin',
      '97vmin': '97vmin',
      '98vmin': '98vmin',
      '99vmin': '99vmin',
      '100vmin': '100vmin',
      '101vmin': '101vmin',
      '102vmin': '102vmin',
      '103vmin': '103vmin',
      '104vmin': '104vmin',
      '105vmin': '105vmin',
      '106vmin': '106vmin',
      '107vmin': '107vmin',
      '108vmin': '108vmin',
      '109vmin': '109vmin',
      '110vmin': '110vmin',
      '111vmin': '111vmin',
      '112vmin': '112vmin',
      '113vmin': '113vmin',
      '114vmin': '114vmin',
      '115vmin': '115vmin',
      '116vmin': '116vmin',
      '117vmin': '117vmin',
      '118vmin': '118vmin',
      '119vmin': '119vmin',
      '120vmin': '120vmin',
      '121vmin': '121vmin',
      '122vmin': '122vmin',
      '123vmin': '123vmin',
      '124vmin': '124vmin',
      '125vmin': '125vmin',
      '126vmin': '126vmin',
      '127vmin': '127vmin',
      '128vmin': '128vmin',
      '129vmin': '129vmin',
      '130vmin': '130vmin',
      '131vmin': '131vmin',
      '132vmin': '132vmin',
      '133vmin': '133vmin',
      '134vmin': '134vmin',
      '135vmin': '135vmin',
      '136vmin': '136vmin',
      '137vmin': '137vmin',
      '138vmin': '138vmin',
      '139vmin': '139vmin',
      '140vmin': '140vmin',
      '141vmin': '141vmin',
      '142vmin': '142vmin',
      '143vmin': '143vmin',
      '144vmin': '144vmin',
      '145vmin': '145vmin',
      '146vmin': '146vmin',
      '147vmin': '147vmin',
      '148vmin': '148vmin',
      '149vmin': '149vmin',
      '150vmin': '150vmin',
      '151vmin': '151vmin',
      '152vmin': '152vmin',
      '153vmin': '153vmin',
      '154vmin': '154vmin',
      '155vmin': '155vmin',
      '156vmin': '156vmin',
      '157vmin': '157vmin',
      '158vmin': '158vmin',
      '159vmin': '159vmin',
      '160vmin': '160vmin',
      '161vmin': '161vmin',
      '162vmin': '162vmin',
      '163vmin': '163vmin',
      '164vmin': '164vmin',
      '165vmin': '165vmin',
      '166vmin': '166vmin',
      '167vmin': '167vmin',
      '168vmin': '168vmin',
      '169vmin': '169vmin',
      '170vmin': '170vmin',
      '171vmin': '171vmin',
      '172vmin': '172vmin',
      '173vmin': '173vmin',
      '174vmin': '174vmin',
      '175vmin': '175vmin',
      '176vmin': '176vmin',
      '177vmin': '177vmin',
      '178vmin': '178vmin',
      '179vmin': '179vmin',
      '180vmin': '180vmin',
      '181vmin': '181vmin',
      '182vmin': '182vmin',
      '183vmin': '183vmin',
      '184vmin': '184vmin',
      '185vmin': '185vmin',
      '186vmin': '186vmin',
      '187vmin': '187vmin',
      '188vmin': '188vmin',
      '189vmin': '189vmin',
      '190vmin': '190vmin',
      '191vmin': '191vmin',
      '192vmin': '192vmin',
      '193vmin': '193vmin',
      '194vmin': '194vmin',
      '195vmin': '195vmin',
      '196vmin': '196vmin',
      '197vmin': '197vmin',
      '198vmin': '198vmin',
      '199vmin': '199vmin',
      '200vmin': '200vmin',
      'vw': '208.9vmin',
    },
    height: {
      'screen': '100vh',
      'mojezdjecie': '60vmin',
      '1/2': '50%',
      '1/3': '33%',
      'full': '100%',
      '0.5vmin': '0.5vmin',
      '1vmin': '1vmin',
      '2vmin': '2vmin',
      '3vmin': '3vmin',
      '4vmin': '4vmin',
      '5vmin': '5vmin',
      '6vmin': '6vmin',
      '7vmin': '7vmin',
      '8vmin': '8vmin',
      '9vmin': '9vmin',
      '10vmin': '10vmin',
      '11vmin': '11vmin',
      '12vmin': '12vmin',
      '13vmin': '13vmin',
      '14vmin': '14vmin',
      '15vmin': '15vmin',
      '16vmin': '16vmin',
      '17vmin': '17vmin',
      '18vmin': '18vmin',
      '19vmin': '19vmin',
      '20vmin': '20vmin',
      '21vmin': '21vmin',
      '22vmin': '22vmin',
      '23vmin': '23vmin',
      '24vmin': '24vmin',
      '25vmin': '25vmin',
      '26vmin': '26vmin',
      '27vmin': '27vmin',
      '28vmin': '28vmin',
      '29vmin': '29vmin',
      '30vmin': '30vmin',
      '31vmin': '31vmin',
      '32vmin': '32vmin',
      '33vmin': '33vmin',
      '34vmin': '34vmin',
      '35vmin': '35vmin',
      '36vmin': '36vmin',
      '37vmin': '37vmin',
      '38vmin': '38vmin',
      '39vmin': '39vmin',
      '40vmin': '40vmin',
      '41vmin': '41vmin',
      '42vmin': '42vmin',
      '43vmin': '43vmin',
      '44vmin': '44vmin',
      '45vmin': '45vmin',
      '46vmin': '46vmin',
      '47vmin': '47vmin',
      '48vmin': '48vmin',
      '49vmin': '49vmin',
      '50vmin': '50vmin',
      '51vmin': '51vmin',
      '52vmin': '52vmin',
      '53vmin': '53vmin',
      '54vmin': '54vmin',
      '55vmin': '55vmin',
      '56vmin': '56vmin',
      '57vmin': '57vmin',
      '58vmin': '58vmin',
      '59vmin': '59vmin',
      '60vmin': '60vmin',
      '61vmin': '61vmin',
      '62vmin': '62vmin',
      '63vmin': '63vmin',
      '64vmin': '64vmin',
      '65vmin': '65vmin',
      '66vmin': '66vmin',
      '67vmin': '67vmin',
      '68vmin': '68vmin',
      '69vmin': '69vmin',
      '70vmin': '70vmin',
      '71vmin': '71vmin',
      '72vmin': '72vmin',
      '73vmin': '73vmin',
      '74vmin': '74vmin',
      '75vmin': '75vmin',
      '76vmin': '76vmin',
      '77vmin': '77vmin',
      '78vmin': '78vmin',
      '79vmin': '79vmin',
      '80vmin': '80vmin',
      '81vmin': '81vmin',
      '82vmin': '82vmin',
      '83vmin': '83vmin',
      '84vmin': '84vmin',
      '85vmin': '85vmin',
      '86vmin': '86vmin',
      '87vmin': '87vmin',
      '88vmin': '88vmin',
      '89vmin': '89vmin',
      '90vmin': '90vmin',
      '91vmin': '91vmin',
      '92vmin': '92vmin',
      '93vmin': '93vmin',
      '94vmin': '94vmin',
      '95vmin': '95vmin',
      '96vmin': '96vmin',
      '97vmin': '97vmin',
      '98vmin': '98vmin',
      '99vmin': '99vmin',
      '100vmin': '100vmin',
      '101vmin': '101vmin',
      '102vmin': '102vmin',
      '103vmin': '103vmin',
      '104vmin': '104vmin',
      '105vmin': '105vmin',
      '106vmin': '106vmin',
      '107vmin': '107vmin',
      '108vmin': '108vmin',
      '109vmin': '109vmin',
      '110vmin': '110vmin',
      '111vmin': '111vmin',
      '112vmin': '112vmin',
      '113vmin': '113vmin',
      '114vmin': '114vmin',
      '115vmin': '115vmin',
      '116vmin': '116vmin',
      '117vmin': '117vmin',
      '118vmin': '118vmin',
      '119vmin': '119vmin',
      '120vmin': '120vmin',
      '121vmin': '121vmin',
      '122vmin': '122vmin',
      '123vmin': '123vmin',
      '124vmin': '124vmin',
      '125vmin': '125vmin',
      '126vmin': '126vmin',
      '127vmin': '127vmin',
      '128vmin': '128vmin',
      '129vmin': '129vmin',
      '130vmin': '130vmin',
      '131vmin': '131vmin',
      '132vmin': '132vmin',
      '133vmin': '133vmin',
      '134vmin': '134vmin',
      '135vmin': '135vmin',
      '136vmin': '136vmin',
      '137vmin': '137vmin',
      '138vmin': '138vmin',
      '139vmin': '139vmin',
      '140vmin': '140vmin',
      '141vmin': '141vmin',
      '142vmin': '142vmin',
      '143vmin': '143vmin',
      '144vmin': '144vmin',
      '145vmin': '145vmin',
      '146vmin': '146vmin',
      '147vmin': '147vmin',
      '148vmin': '148vmin',
      '149vmin': '149vmin',
      '150vmin': '150vmin',
    }
  },
  plugins: [],
}