import Header from "./components/Header/Header";
import "./App.css";
import GlowingCursor from "./components/GlowingCursor";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<>
			<GlowingCursor />
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default App;
