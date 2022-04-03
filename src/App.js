import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './containers/Home'
import Login1 from './containers/Login1'
import Login2 from './containers/Login2'
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

					<Route path="/login-1" element={<Login1 />} />
					<Route path="/login-2" element={<Login2 />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
