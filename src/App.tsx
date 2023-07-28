import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Main } from './pages/Main';
import { FindAnimalName } from './pages/FindAnimalName';
import { ColorsAndWord } from 'pages/ColorsAndWord';
import { AnswerProvider } from 'contexts/answer-context';

function App() {
  return (
    <BrowserRouter>
      <AnswerProvider>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/findName' element={<FindAnimalName />} />
          <Route path='/colorsWord' element={<ColorsAndWord />} />
        </Routes>
      </AnswerProvider>
    </BrowserRouter>
  );
}

export default App;
