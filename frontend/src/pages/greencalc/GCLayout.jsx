import { Outlet } from 'react-router-dom';
import { GCProvider } from '../../context/GreenCalcContext';
import GCBottomNav from '../../components/GCBottomNav';
import '../../greencalc.css';

export default function GCLayout() {
  return (
    <GCProvider>
      <div className="gc-app">
        <div className="gc-content">
          <Outlet />
        </div>
        <GCBottomNav />
      </div>
    </GCProvider>
  );
}
