import './App.css';
import Chip from './component/Chip';
import './App.css';

const App = () => {
  const items = ['John Doe', 'Jane Smith', 'Nick Giannopoulos', 'Alice Johnson'];

  return (
    <div className="App">
      <Chip items={items} />
    </div>
  );
}

export default App;
