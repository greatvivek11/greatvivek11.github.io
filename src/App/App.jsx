import { lazy, Suspense } from 'react';
import './App.css';
const NavbarComponent = lazy(() => import('../Components/NavbarComponent'));
const FooterComponent = lazy(() => import('../Components/FooterComponent'));
const ScrollProgressBar = lazy(() => import('../Components/ScrollProgressBar'));

const Routes = lazy(() => import('../Components/Routes'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <ScrollProgressBar />
        <NavbarComponent />
        <Routes />
        <FooterComponent />
      </Suspense>
    </div>
  )
}

export default App;
