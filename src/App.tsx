import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Main } from './pages/Main';
import { FindAnimalName } from './pages/FindAnimalName';
import { ColorsAndWord } from 'pages/ColorsAndWord';
import { InstantMemory } from 'pages/InstantMemory';
import { AnswerProvider } from 'contexts/answer-context';
import { InstantMemory } from 'pages/InstantMemory';

function App() {
  return (
    <BrowserRouter>
      <AnswerProvider>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/findName' element={<FindAnimalName />} />
          <Route path='/colorsWord' element={<ColorsAndWord />} />
          <Route path='/instantMemory' element={<InstantMemory />} />
        </Routes>
      </AnswerProvider>
    </BrowserRouter>
  );
}

export default App;
