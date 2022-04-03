import LogoSmDark from '../assets/images/logo-sm-dark.png'
import LogoSmLight from '../assets/images/logo-sm-light.png'
import UserAvatar from '../assets/images/user-avatar.png'
import useDarkMode from './../useDarkMode'

const HomeHeader = () => {
	const [colorTheme, setTheme] = useDarkMode()

	return (
		<>
			<header className="desktop-header d-lg-block d-none">
				<nav className="navbar navbar-expand-lg navbar-light">
					<div className="container-fluid">
						<a href="#top" className="light-mode-logo navbar-brand">
							<img src={LogoSmDark} alt="logo" className="img-fluid" />
						</a>
						<a href="#top" className="dark-mode-logo navbar-brand">
							<img src={LogoSmLight} alt="logo" className="img-fluid" />
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<div className="input-group input-group-lg">
								<span className="input-group-text">
									<i className="far fa-search"></i>
								</span>
								<input
									type="text"
									className="form-control"
									placeholder="Recipient's username"
									aria-label="Recipient's username with two button addons"
								/>
								<button className="btn btn-orange z-index-1001" type="button">
									Search
								</button>
								<button className="btn btn-blue z-index-1002" type="button">
									Expand
								</button>
								<button className="btn btn-purple z-index-1003" type="button">
									Reset
								</button>
							</div>
							<ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
								<li className="nav-item">
									<a className="nav-link ps-3 pe-0" href="#as">
										<svg className="upload-icon" xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 49.721 46.613">
											<defs>
												<linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
													<stop offset="0" stop-color="#ce283c" />
													<stop offset="1" stop-color="#f47b60" />
												</linearGradient>
											</defs>
											<path
												id="Icon_metro-upload"
												data-name="Icon metro-upload"
												d="M24.324,28.717h6.215V16.286h9.323L27.431,3.856,15,16.286h9.323Zm9.323-6.992v4.793l14.23,5.307L27.431,39.448,6.986,31.824l14.23-5.307V21.725L2.571,28.717v12.43l24.86,9.323,24.86-9.323V28.717Z"
												transform="translate(-2.571 -3.856)"
												fill="url(#linear-gradient)"
											/>
										</svg>
									</a>
								</li>
								<li className="nav-item border-end">
									<div className="dark-mode-toggle">
										<div className="form-check form-switch">
											<input className="form-check-input" type="checkbox" role="switch" onClick={() => setTheme(colorTheme)} />
										</div>
									</div>
								</li>
								<li className="nav-item dropdown">
									<a
										className="nav-link dropdown-toggle"
										href="#ca"
										id="navbarDropdown"
										role="button"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										<div className="d-flex align-items-center">
											<div className="user-avatar flex-shrink-0">
												<img src={UserAvatar} alt="avatar" className="img-fluid" />
											</div>
											<div className="text flex-grow-1">
												Hello, <strong>David</strong>
												<i className="fas fa-angle-down ps-2"></i>
											</div>
										</div>
									</a>
									<ul className="dropdown-menu dropdown-menu-end">
										<li>
											<a className="dropdown-item" href="#ac">
												Action
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="#va">
												Another action
											</a>
										</li>
										<li>
											<hr className="dropdown-divider" />
										</li>
										<li>
											<a className="dropdown-item" href="#vas">
												Something else here
											</a>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>

			<header className="mobile-header d-lg-none d-block shadow-sm border-bottom">
				<div className="position-relative">
					<nav className="navbar">
						<div className="container d-flex">
							<button className="btn side-nave-show-btn">
								<i className="fas fa-bars"></i>
							</button>
							<div>
								<a href="index.html" className="light-mode-logo navbar-brand">
									<img src={LogoSmDark} alt="logo" className="img-fluid" />
								</a>
								<a href="index.html" className="dark-mode-logo navbar-brand">
									<img src={LogoSmLight} alt="logo" className="img-fluid" />
								</a>
							</div>
							<ul className="ps-0 d-flex align-items-center">
								<li>
									<button className="btn search-showHide-btn pt-2 px-0 collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne">
										<i className="far fa-search"></i>
									</button>
								</li>
								<li>
									<div className="dark-mode-toggle">
										<div className="form-check form-switch">
											<input className="form-check-input" type="checkbox" role="switch" onClick={() => setTheme(colorTheme)} />
										</div>
									</div>
								</li>
								<li>
									<div className="dropdown">
										<a
											className="dropdown-toggle"
											href="#av"
											id="navbarDropdown"
											role="button"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											<div className="user-avatar flex-shrink-0">
												<img src={UserAvatar} alt="avatar" className="img-fluid" />
											</div>
										</a>
										<ul className="dropdown-menu dropdown-menu-end">
											<li>
												<a className="dropdown-item" href="#vs">
													Action
												</a>
											</li>
											<li>
												<a className="dropdown-item" href="#vsd">
													Another action
												</a>
											</li>
											<li>
												<hr className="dropdown-divider" />
											</li>
											<li>
												<a className="dropdown-item" href="#vsd">
													Something else here
												</a>
											</li>
										</ul>
									</div>
								</li>
							</ul>
						</div>
					</nav>
					<div id="collapseOne" className="mobile-search shadow-sm accordion-collapse collapse">
						<div className="input-group">
							<span className="input-group-text pe-0">
								<i className="far fa-search"></i>
							</span>
							<input type="text" className="form-control" placeholder="Search here" />
							<button className="btn btn-orange z-index-1001" type="button">
								Search
							</button>
							<button className="btn btn-blue z-index-1002" type="button">
								Expand
							</button>
							<button className="btn btn-purple z-index-1003" type="button">
								Reset
							</button>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}

export default HomeHeader
