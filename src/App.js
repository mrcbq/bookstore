import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} basename="/https://mrcbq.github.io/bookstore/" />
        <Route path="/categories" element={<Categories />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </HashRouter>
  );
}

export default App;
