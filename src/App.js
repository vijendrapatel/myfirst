import logo from './logo.svg';
import './App.css';
import { Wave } from 'react-animated-text';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
        <Wave text="Dekha.. Maine Project Deploy kr diya" />
        </p>
        <p>
        {/* <Wave text="Dekha.. Maine Project Deploy kr diya" />
         */}
        <Wave text="- Vijendra Patel" />

        </p>

      </header>
    </div>
  );
}

export default App;
