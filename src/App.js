
import './App.css';
import Card from './compontents/Card';
import NavBar from './compontents/NavBar';
import Players from './compontents/Players';
import image1 from './images/image1.png'
import image2 from './images/image2.png'
import image3 from './images/image3.png'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Players/>
      <div className="card-info">
      <Card 
      img={image1} 
      rating="5.0"
       reviewCount={6}
       country="USA"
       title="Life lessons with Katie Zaferes"
       price={136}  />
       <Card 
      img={image2} 
      rating="5.0"
       reviewCount={30}
       country="USA"
       title="Learn wedding photography"
       price={125}  />
       <Card 
      img={image3} 
      rating="4.8"
       reviewCount={2}
       country="USA"
       title="Group Mountain Biking"
       price={50} />
       </div>
      </div>
  );
}

export default App;
