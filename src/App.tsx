import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  const nameList = [
    {
      firstName: "MS",
      lastName: "Dhoni"
    },
    {
      firstName: "Virat",
      lastName: "Kohli"
    },
    {
      firstName: "Rohit",
      lastName: "Rohit"
    }
  ];
  return (
    <div className="App">
      <Greet name="Vamshi" count={10} isLoggedIn={true}/>
      <Person firstName="KL" lastName="Rahul"/>
      <PersonList listNames={nameList}/>
    </div>
  );
}

export default App;
