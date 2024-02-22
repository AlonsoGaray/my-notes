import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Notes/home';
import Archived from './components/Notes/archived';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/archived" element={<Archived />} />
    </Routes>
  </BrowserRouter>
);

export default App;
