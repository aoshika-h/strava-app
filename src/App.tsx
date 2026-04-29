import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import ActivityList from './pages/ActivityList'
import ActivityDetail from "./pages/ActivityDetail";
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <BrowserRouter>
      <Header title='strava app router' />
      <Routes>
        <Route path="/" element={<ActivityList />} />
        <Route path="/activity/:id" element={<ActivityDetail />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;