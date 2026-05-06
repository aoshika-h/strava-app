import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from 'react-ga4';
import Header from './components/Header'
import ActivityList from './pages/ActivityList'
import ActivityDetail from "./pages/ActivityDetail";
import Dashboard from "./pages/Dashboard"

function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: 'Pageview', page: location.pathname });
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <Header title='strava app router' />
      <PageTracker />
      <Routes>
        <Route path="/" element={<ActivityList />} />
        <Route path="/activity/:id" element={<ActivityDetail />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;