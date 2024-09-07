import { Routes, Route } from 'react-router-dom';
import InProgress from '@components/InProgress';

export default function Router() {
  return (
    <Routes>
      {/* TODO: Add routes here */}
      <Route path="*" element={<InProgress />} />
    </Routes>
  );
}
