import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Vanguard from "./pages/news/Vanguard";
import Punch from "./pages/news/Punch";
import Thisday from "./pages/news/Thisday";
import Thenation from "./pages/news/Thenation";

import Footer from "./layout/Footer";

import Header from "./layout/Header";
import Local from "./pages/landing/Local";
import Foreign from "./pages/landing/Foreign";

function App() {
	return (
		<Router>
			<Header />
			<main role='main' className='container'>
				<div className='row'>
					<Switch>
						<Route path='/' exact component={Local} />
						<Route path='/world' component={Foreign} />
						<div className=' col-12 col-md-10 '>
							<Route path='/vanguard' component={Vanguard} />
							<Route path='/punch' component={Punch} />
							<Route path='/thisday' component={Thisday} />
							<Route path='/thenation' component={Thenation} />
						</div>
					</Switch>
				</div>
			</main>
			<Footer />
		</Router>
	);
}

export default App;
