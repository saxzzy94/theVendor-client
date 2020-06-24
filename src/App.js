import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Vanguard from "./pages/news/Vanguard";
import Punch from "./pages/news/Punch";
import Thisday from "./pages/news/Thisday";
import Thenation from "./pages/news/Thenation";

import Footer from "./layout/Footer";
import { Toolbar } from "./layout/sidenav/Toolbar";
import Header from "./layout/Header";
import Landing from "./pages/landing/Landing";

function App() {
	return (
		<Router>
			<Header />
			<div className='container-fluid'>
				<div className='row flex-md-nowrap'>
					<Toolbar />
					<Switch>
						<Route path='/' exact component={Landing} />
						<div className=' col-12 col-md-10 '>
							<Route path='/vanguard' component={Vanguard} />
							<Route path='/punch' component={Punch} />
							<Route path='/thisday' component={Thisday} />
							<Route path='/thenation' component={Thenation} />
						</div>
					</Switch>
				</div>
			</div>
			<Footer />
		</Router>
	);
}

export default App;
