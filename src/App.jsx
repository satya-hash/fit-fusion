import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ExerciseDetails from "./pages/ExerciseDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/exercise/:id" element={<ExerciseDetails />} />
			</Routes>
			<Footer />
			<ScrollToTop />
		</div>
	);
}

export default App;
