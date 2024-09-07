import { Routes, Route, Navigate } from 'react-router-dom';
import InProgress from '@components/InProgress';

export default function Router() {
  return (
    <Routes>
      {/* TODO: Add routes here */}
      <Route path="/home" element={<div>Hello</div>} />
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="*" element={<InProgress />} />
    </Routes>
  );
}
