import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import { Contact } from "./components/Contact";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Banner></Banner>
			<Experience />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
