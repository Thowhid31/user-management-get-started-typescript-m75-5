
import './App.css';

let student: string = 'John';
let age: number = 44;
let isSmart: boolean = true;

let students: string[] = ['Harris', 'Joe'];
let fees: number[] = [12, 3456, 23, 436];

interface Person {
  name: string,
  job?: string,
  age: number
}

const person: Person = {
  name: 'Bill',
  
  age: 45
}


function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
