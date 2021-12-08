import './App.css';
import Main from './components/Main/Main';
import background from './world-pattern.png';

function App() {
  return (
    <div className="main" style={{ backgroundImage: `url(${background})` }}>
      <h1>Countries and their Flags</h1>
      <Main />
    </div>
  );
}

export default App;
