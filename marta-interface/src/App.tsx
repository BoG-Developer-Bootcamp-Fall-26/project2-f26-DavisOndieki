import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import LinesPage from './pages/LinesPage'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />

                <Route
                    path="/lines/gold"
                    element={<LinesPage key="gold" initialColor="gold" />}
                />

                <Route
                    path="/lines/red"
                    element={<LinesPage key="red" initialColor="red" />}
                />

                <Route
                    path="/lines/green"
                    element={<LinesPage key="green" initialColor="green" />}
                />

                <Route
                    path="/lines/blue"
                    element={<LinesPage key="blue" initialColor="blue" />}
                />

                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}