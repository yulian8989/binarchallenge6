import React from 'react'
import Main from './components/Main';
import {Routes,Route} from 'react-router-dom'
import MovieDetail from './components/MovieDetail'

function App() {
  return (
    <div >
      <Routes>

        <Route path="/" element={<Main/>} />
        <Route path="/movieDetail/:id" element={<MovieDetail/>} />
      </Routes>
      

    </div>
  );
}

export default App;
