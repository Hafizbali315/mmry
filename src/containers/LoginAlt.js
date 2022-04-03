import LogoLgDark from '../assets/images/logo-lg-dark.png'
import LogoLgLight from '../assets/images/logo-lg-light.png'
import FavIcon from '../assets/images/fav-icon.png'
import useDarkMode from './../useDarkMode'

const Login2 = () => {
	const [colorTheme, setTheme] = useDarkMode()

	return (
		<section class="login login-alt position-relative">
			<div class="position-absolute top-0 end-0 p-4">
				<div class="dark-mode-toggle">
					<div class="form-check form-switch">
						<input class="form-check-input" type="checkbox" role="switch" onClick={() => setTheme(colorTheme)} />
					</div>
				</div>
			</div>
			<div class="container">
				<div class="col-md-10 m-auto">
					<div class="login-main shadow-lg p-md-5 p-4">
						<form>
							<div class="d-lg-block d-none">
								<a href="index.html" class="light-mode-logo">
									<img src={LogoLgDark} alt="logo" class="img-fluid" />
								</a>
								<a href="index.html" class="dark-mode-logo">
									<img src={LogoLgLight} alt="logo" class="img-fluid" />
								</a>
							</div>
							<a href="index.html" class="d-block d-lg-none">
								<img src={FavIcon} alt="logo" class="img-fluid d-lg-none d-inline" />
							</a>

							<h1 class="form-heading">Welcome</h1>
							<input type="email" class="form-control form-control-lg" placeholder="Enter your email" />
							<input type="password" class="form-control form-control-lg" placeholder="Enter your password" />
							<input type="password" class="form-control form-control-lg" placeholder="Re-enter your password" />
							<div class="form-check d-flex justify-content-center">
								<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
								<label class="form-check-label ms-2" for="flexCheckDefault">
									<em>I agree to all the terms and conditions</em>
								</label>
							</div>
							<div class="form-btn-box mt-3 position-relative">
								<button class="btn btn-lg w-100 login-btn">Signin</button>
								<i class="fas fa-caret-right"></i>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Login2
