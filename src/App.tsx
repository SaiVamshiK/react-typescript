import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  return (
    <div className="App">
      <Greet name="Vamshi" count={10} isLoggedIn={true}/>
      <Person firstName="KL" lastName="Rahul"/>
      <PersonList nameList={["MS Dhoni","Virat Kohli","Rohit Sharma"]}/>
    </div>
  );
}

export default App;
