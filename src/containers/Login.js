import LogoLgDark from '../assets/images/logo-lg-dark.png'
import LogoLgLight from '../assets/images/logo-lg-light.png'
import FavIcon from '../assets/images/fav-icon.png'
import useDarkMode from './../useDarkMode'

const Login = () => {
	const [colorTheme, setTheme] = useDarkMode()

	return (
		<section className="login position-relative">
			<div className="position-absolute top-0 end-0 p-4">
				<div className="dark-mode-toggle">
					<div className="form-check form-switch">
						<input className="form-check-input" type="checkbox" role="switch" onClick={() => setTheme(colorTheme)} />
					</div>
				</div>
			</div>
			<div className="container">
				<div className="col-md-10 m-auto">
					<div className="login-main shadow-lg p-md-5 p-4">
						<form>
							<div className="d-lg-block d-none">
								<a href="index.html" className="light-mode-logo">
									<img src={LogoLgDark} alt="logo" className="img-fluid" />
								</a>
								<a href="index.html" className="dark-mode-logo">
									<img src={LogoLgLight} alt="logo" className="img-fluid" />
								</a>
							</div>
							<a href="index.html" className="d-block d-lg-none">
								<img src={FavIcon} alt="logo" className="img-fluid d-lg-none d-inline" />
							</a>

							<h1 className="form-heading">Welcome</h1>
							<input type="email" className="form-control form-control-lg" placeholder="Enter your email" />
							<input type="password" className="form-control form-control-lg" placeholder="Enter your password" />
							<input type="password" className="form-control form-control-lg" placeholder="Re-enter your password" />
							<div className="form-check d-flex justify-content-center">
								<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
								<label className="form-check-label ms-2" for="flexCheckDefault">
									<em>I agree to all the terms and conditions</em>
								</label>
							</div>
							<div className="form-btn-box mt-3 position-relative">
								<button className="btn btn-lg w-100 login-btn">Signin</button>
								<i className="fas fa-caret-right"></i>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Login
