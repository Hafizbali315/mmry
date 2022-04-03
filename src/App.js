import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './containers/Home'
import Login from './containers/Login'
import LoginAlt from './containers/LoginAlt'
import VideoView from './containers/VideoView'
import Profile from './containers/Profile'
import Layout from './containers/Layout'

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="" element={<Layout />}>
						<Route index element={<Home />} />

						<Route path="/profile" element={<Profile />} />
						<Route path="/video-view" element={<VideoView />} />
					</Route>

					<Route path="/login" element={<Login />} />
					<Route path="/login-alt" element={<LoginAlt />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
