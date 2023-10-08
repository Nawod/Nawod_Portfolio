import { v4 as uuidv4 } from 'uuid';
import Watch from '../images/watch.png';
import HandTracking from '../images/handTracking.png';
import CyberAI from '../images/cyberAI.png';
import NRDS from '../images/nrds.png';
import TeachgramUI from '../images/teachgramUI.png';
import EscapeRoom from '../images/escaperoom.jpg';
import CryptoUI from '../images/crypto.png';
import PictipUI from '../images/pictip.png';
import PortfolioUI from '../images/portfolio.png';
import Flutter from '../images/flutter.png';
import Teachgram from '../images/teachgram.png';
import Python from '../images/python.png';
import Snakey from '../images/snakey.png';
import SkatingAR from '../images/skating_ar.png';
import Twite from '../images/twite.png';
import Waytohome from '../images/waytohome.png';
import C from '../images/c.png';
import SimpleStore from '../images/simpleStore.png';
import Bodimak from '../images/bodimak.png';

const projects = [
  {
    id: uuidv4(),
    name: 'The Miller App',
    desc:
      "An android app which made for mange miller's works. Developed using Flutter",
    img: Flutter,
    link: 'https://github.com/Nawod/the_miller_app',
  },
  {
    id: uuidv4(),
    name: 'TeachGram',
    desc: 'TeachGram is an online platform to conduct online classes.',
    img: Teachgram,
    link: 'https://github.com/Nawod/teachgram',
  },
  {
    id: uuidv4(),
    name: 'Guess The Number',
    desc: 'A simple number guessing game which created with python',
    img: Python,
    link: 'https://github.com/Nawod/GuessTheNumber-python-',
  },
  {
    id: uuidv4(),
    name: 'Simple Store',
    desc:
      'A simple program which included insert, update, delete, search functions. Built with C# and SQL database.',
    img: SimpleStore,
    link: 'https://github.com/Nawod/SimpleStore-C-',
  },
  {
    id: uuidv4(),
    name: 'Snakey',
    desc: 'A Snake game that built with JAVA.',
    img: Snakey,
    link: 'https://github.com/Nawod/Snakey-JAVA-',
  },
  {
    id: uuidv4(),
    name: 'Skating AR',
    desc: 'An AR game which made with the Spark AR.',
    img: SkatingAR,
    link: 'https://github.com/Nawod/skating_AR',
  },
  {
    id: uuidv4(),
    name: 'IPC Program',
    desc:
      'C based program which done inter process communication. The program can share case studies between lecturer and student.',
    img: C,
    link: 'https://github.com/Nawod/IPC_Program',
  },
  {
    id: uuidv4(),
    name: 'Crypto Market UI',
    desc: 'A crypto marketing web application UI/UX.',
    img: CryptoUI,
    link:
      'https://www.behance.net/gallery/124896191/Dashboard-for-a-crypto-marketing-web-application',
  },
  {
    id: uuidv4(),
    name: 'PicTip UI',
    desc: 'A social media web application UI/UX.',
    img: PictipUI,
    link:
      'https://www.behance.net/gallery/124586137/Social-Media-Web-Application-UIWireframes',
  },
  {
    id: uuidv4(),
    name: 'Portfolio UI',
    desc: 'A social media web application UI/UX.',
    img: PortfolioUI,
    link:
      'https://www.behance.net/gallery/124427335/Responsive-Portfolio-website',
  },
  {
    id: uuidv4(),
    name: 'TeachGram UI',
    desc: 'UI/UX interfaces for online learning platform',
    img: TeachgramUI,
    link:
      'https://www.behance.net/gallery/125023009/Learning-Management-System-UI',
  },
  {
    id: uuidv4(),
    name: 'Watch Store',
    desc: 'A Watch store items preview page that build using React JS',
    img: Watch,
    link: 'https://github.com/Nawod/watch_store',
  },
  {
    id: uuidv4(),
    name: 'Escape Room',
    desc:
      'A capture the flag challenge that made for test basic cyber security knowledge.',
    img: EscapeRoom,
    link: 'https://github.com/Nawod/escape_room',
  },
  {
    id: uuidv4(),
    name: 'Twite Twitty',
    desc: 'An endless flying game like Flappy Bird',
    img: Twite,
    link: 'https://twite-twitty.netlify.app/',
  },
  {
    id: uuidv4(),
    name: 'The Way To Home',
    desc: 'Construct 2 based 2D web game',
    img: Waytohome,
    link: 'https://thewaytohome.netlify.app/',
  },
  {
    id: uuidv4(),
    name: 'Neuro Realistic Detection System',
    desc:
      'NLP based malicious traffics and URL classification extension for ELK stack.(elastic search)',
    img: NRDS,
    link: 'https://github.com/Nawod/Neuro-Realistic-Detection-System',
  },
  {
    id: uuidv4(),
    name: 'Freedom Play',
    desc:
      "AI based hand gesture tracking program for control media players' functions. ( Play/Pause, Volume control, Brightness control).",
    img: HandTracking,
    link: 'https://github.com/Nawod/Freedom-Play',
  },
  {
    id: uuidv4(),
    name: 'Autonomous CyberAI Website',
    desc:
      'A responsive static website for Autonomous Cyber AI research showcase.',
    img: CyberAI,
    link: 'https://autonomous-cyberai.netlify.app/',
  },
  {
    id: uuidv4(),
    name: 'Bodimak',
    desc:
      'A web application that makes an environment to rent and sell boarding places.',
    img: Bodimak,
    link: 'https://bodimak.vercel.app/',
  },
];

export default projects;
