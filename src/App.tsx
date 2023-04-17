import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

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
  const name = {
    firstName: "KL",
    lastName: "Rahul"
  };
  const statusValue = "success";
  return (
    <div className="App">
      <Greet name="Vamshi" count={10} isLoggedIn={true}/>
      <Person personName = {name}/>
      <PersonList listNames={nameList}/>
      <Status status={statusValue}/>
      <Heading>Something here</Heading>
    </div>
  );
}

export default App;
