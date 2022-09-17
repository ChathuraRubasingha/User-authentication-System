import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Layout from './pages/Layout'
import Addtext from './pages/Addtext'

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Route path="/login" exact component={Login} />
				<Route path="/register" exact component={Register} />
				<Route path="/home" exact component={Layout} />
				<Route path="/addtext" exact component={Addtext} />
			</BrowserRouter>
		</div>
	)
}

export default App
