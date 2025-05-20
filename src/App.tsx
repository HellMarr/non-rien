import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import AutoAudio from './components/AutoAudio'
import './App.css'

function AppContent() {
  const { name } = useParams();
  const buttonText = name ? `Message pour ${name}` : 'Non rien';

  return (
    <div className="app">
      <AutoAudio buttonText={buttonText} />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/:name" element={<AppContent />} />
      </Routes>
    </Router>
  )
}

export default App
