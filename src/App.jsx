import { useState } from 'react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import './styles/hero.css';
import './styles/footer.css';
import './styles/project.css'; // Corrected the missing .css extension
import Project from './components/Project';


function App() {
  return (
    <>
      <Hero />
      <Project/>
      <Footer />
    </>
  );
}

export default App;







// const [count, setCount] = useState(0)
{/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCounts((counts) => counts - 1)}>
          count is {counts}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}