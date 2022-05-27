
import './App.css';

let student: string = 'John';
let age: number = 44;
let isSmart: boolean = true;

let students: string[] = ['Harris', 'Joe'];
let fees: number[] = [12, 3456, 23, 436];

interface Person {
  name: string,
  job?: string,
  employed: string | boolean,
  age: number,
  location?: string | number
}

const person: Person = {
  name: 'Bill',
  employed: true,
  age: 45,
  location: 33
}

const handleAddUser = (firstName: string, age: number, address: string):string => {
  const total : number = 50;
  console.log(firstName, age, address);
  return address;
}

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
