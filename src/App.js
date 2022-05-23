
import './App.css';
import photo from './photo.png'

function App() {
  return (
    <div className="Main">
      <nav className="NavBar">
       
          
<a href='Info'>Info</a>
<a href='Projects'>Projects</a>
<a href='Skils'>Skils</a>
<a href='Footer'>Contact Me</a>
  
      </nav>
      <div className='Info'>
        <h1>Information About Me</h1>
        <img src={photo} alt="portfolio">
        </img>
        
      </div>
      <div className='Projects'>
        experience work
      </div>
      <div className='Skils'>
        skils
      </div>
      <div className='Footer'>
Footer
      </div>
    </div>
  );
}

export default App;
