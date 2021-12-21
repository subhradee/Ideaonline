<<<<<<< HEAD
import React from 'react'
import Mainindex from './components/mainindex';
import Login from './components/login';

=======
import React from "react";
import Mainindex from "./components/mainindex";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
>>>>>>> 9e1550ffe63ad5b6d22d3e8713b51764d352f590
function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Mainindex />} />

					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
				</Routes>
			</BrowserRouter>
			{/* <Mainindex /> */}
		</>
	);
}

export default App;
