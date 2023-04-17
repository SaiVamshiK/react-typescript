import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';

function App() {
  return (
    <div className="App">
      <Greet name="Vamshi" count={10} isLoggedIn={true}/>
      <Person firstName="KL" lastName="Rahul"/>
    </div>
  );
}

export default App;
