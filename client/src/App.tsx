import Canvas from './canvas';
import CustomizerPage from './pages/CustomizerPage';
import Home from './pages/Home';

function App() {
  return (
    <main className='app transition-all ease-in'>
      <Home />
      <Canvas />
      <CustomizerPage />
    </main>
  );
}

export default App;
