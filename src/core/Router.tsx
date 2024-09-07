import { Routes, Route, Navigate } from 'react-router-dom';
import InProgress from '@components/InProgress';

export default function Router() {
  return (
    <Routes>
      {/* TODO: Add routes here */}
      <Route path="/about" element={<div>Hello</div>} />
      <Route path="/" element={<Navigate to="/about" />} />
      <Route path="*" element={<InProgress />} />
    </Routes>
  );
}
