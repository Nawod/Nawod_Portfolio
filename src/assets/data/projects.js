import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Freedom Play',
    desc:
      "AI based hand gesture tracking program for control media players' functions. ( Play/Pause, Volume control, Brightness control).",
    img: UTrackerImg,
    link: 'https://github.com/Nawod/Freedom-Play',
  },
  {
    id: uuidv4(),
    name: 'Autonomous CyberAI Website',
    desc:
      'A responsive static website for Autonomous Cyber AI research showcase.',
    img: GreenCtgImg,
    link: 'https://github.com/Nawod/Autonomous_CyberAI_Website',
  },
  {
    id: uuidv4(),
    name: 'Neuro Realistic Detection System',
    desc:
      'NLP based malicious traffics and URL classification extension for ELK stack.(elastic search)',
    img: CoinTrackerImg,
    link: 'https://github.com/Nawod/Neuro-Realistic-Detection-System',
  },
  {
    id: uuidv4(),
    name: 'Watch Store',
    desc: 'A Watch items preview page that build using React JS',
    img: CavinImg,
    link: 'https://github.com/Nawod/watch_store',
  },
  {
    id: uuidv4(),
    name: 'Escape Room',
    desc:
      'A capture the flag challenge that made for test basic cyber security knowledge.',
    img: CavinImg,
    link: 'https://github.com/Nawod/escape_room',
  },
  {
    id: uuidv4(),
    name: 'The Miller App',
    desc:
      "An android app which made for mange miller's works. Developed using Flutter",
    img: ProjectImg,
    link: 'https://github.com/Nawod/the_miller_app',
  },
  {
    id: uuidv4(),
    name: 'Teachgram',
    desc: 'TeachGram is an online platform to conduct online classes.',
    img: ProjectImg,
    link: 'https://github.com/Nawod/teachgram',
  },
  {
    id: uuidv4(),
    name: 'Guess The Number',
    desc: 'A simple number guessing game which created with python',
    img: ProjectImg,
    link: 'https://github.com/Nawod/GuessTheNumber-python-',
  },
];

export default projects;
