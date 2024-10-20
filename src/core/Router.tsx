import { Routes, Route, Navigate } from 'react-router-dom';
import InProgress from '@components/InProgress';
import About from '@pages/About';

export default function Router() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Navigate to="/about" />} />
      <Route path="*" element={<InProgress />} />
    </Routes>
  );
}
