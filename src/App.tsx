import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SelamatIdulFitriPage from '@/pages/Ied';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelamatIdulFitriPage />} />
      </Routes>
    </Router>
  );
}

export default App;
