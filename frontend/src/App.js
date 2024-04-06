import './App.css';
import Scenes from './Components/Scenes/Animation';
import Featured from './Components/Games/Featured';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <div>
      {loading ? (
        <div>hello world</div>
      ) : (
        <div>
          <Scenes />
          <Featured />
        </div>
      )}
    </div>
  );
}

export default App;
