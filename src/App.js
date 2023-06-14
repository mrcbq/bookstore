import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Categories from './components/Categories';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Books />}
          basename="/https://mrcbq.github.io/bookstore/"
        />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
