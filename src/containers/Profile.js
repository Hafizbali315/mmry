import ProfileVideoViewHeader from './../components/ProfileVideoViewHeader'

import UserAvatar from '../assets/images/user-avatar.png'
import Card1Img from '../assets/images/3d-card/img-1.png'
import Card2Img from '../assets/images/3d-card/img-2.png'
import Card3Img from '../assets/images/3d-card/img-3.png'

const Profile = () => {
	return (
		<div className="profile">
			<ProfileVideoViewHeader />

			{/* Profile Banner */}
			<div className="profile-banner"></div>

			{/* <!-- === profile-info-full section start === --> */}
			<section className="profile-info-full mb-5">
				<div className="container">
					<div className="card profile-info-card shadow">
						<div className="profile-info">
							<div className="user-avatar">
								<img src={UserAvatar} alt="user-avatar" className="img-fluid shadow-lg" />
							</div>
							<h2 className="user-name">Justin Bieber</h2>
							<p className="user-description">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit repellat, animi eum, tempora explicabo minima adipisci
								eos at voluptatibus iure quis fugit deserunt aliquam deleniti illum sapiente ipsa cupiditate sequi!
							</p>
						</div>

						<div className="row g-4 py-5 px-lg-4">
							<div className="col-lg-4 col-sm-6">
								<a href="#a">
									<div className="card-video darkMode-elable">
										<div className="img border-radius-20">
											<div className="thumbnail position-relative">
												<img src={Card1Img} alt="card-thumbnail" className="w-100" />
												<div className="overlay"></div>
												<span className="video-length">24:08</span>
											</div>
										</div>
										<div className="text d-flex">
											<div className="flex-grow-1">
												<h3 className="title">Namver Say Naver (Official Music video)</h3>
												<p className="creator-name">Justin Bieber ft.Joden Smith</p>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div className="col-lg-4 col-sm-6">
								<a href="#a">
									<div className="card-video darkMode-elable">
										<div className="img border-radius-20">
											<div className="thumbnail position-relative">
												<img src={Card2Img} alt="card-thumbnail" className="w-100" />
												<div className="overlay"></div>
												<span className="video-length">24:08</span>
											</div>
										</div>
										<div className="text d-flex">
											<div className="flex-grow-1">
												<h3 className="title">Namver Say Naver (Official Music video)</h3>
												<p className="creator-name">Justin Bieber ft.Joden Smith</p>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div className="col-lg-4 col-sm-6">
								<a href="#a">
									<div className="card-video darkMode-elable">
										<div className="img border-radius-20">
											<div className="thumbnail position-relative">
												<img src={Card3Img} alt="card-thumbnail" className="w-100" />
												<div className="overlay"></div>
												<span className="video-length">24:08</span>
											</div>
										</div>
										<div className="text d-flex">
											<div className="flex-grow-1">
												<h3 className="title">Namver Say Naver (Official Music video)</h3>
												<p className="creator-name">Justin Bieber ft.Joden Smith</p>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div className="col-lg-4 col-sm-6">
								<a href="#a">
									<div className="card-video darkMode-elable">
										<div className="img border-radius-20">
											<div className="thumbnail position-relative">
												<img src={Card1Img} alt="card-thumbnail" className="w-100" />
												<div className="overlay"></div>
												<span className="video-length">24:08</span>
											</div>
										</div>
										<div className="text d-flex">
											<div className="flex-grow-1">
												<h3 className="title">Namver Say Naver (Official Music video)</h3>
												<p className="creator-name">Justin Bieber ft.Joden Smith</p>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div className="col-lg-4 col-sm-6">
								<a href="#a">
									<div className="card-video darkMode-elable">
										<div className="img border-radius-20">
											<div className="thumbnail position-relative">
												<img src={Card2Img} alt="card-thumbnail" className="w-100" />
												<div className="overlay"></div>
												<span className="video-length">24:08</span>
											</div>
										</div>
										<div className="text d-flex">
											<div className="flex-grow-1">
												<h3 className="title">Namver Say Naver (Official Music video)</h3>
												<p className="creator-name">Justin Bieber ft.Joden Smith</p>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div className="col-lg-4 col-sm-6">
								<a href="#a">
									<div className="card-video darkMode-elable">
										<div className="img border-radius-20">
											<div className="thumbnail position-relative">
												<img src={Card3Img} alt="card-thumbnail" className="w-100" />
												<div className="overlay"></div>
												<span className="video-length">24:08</span>
											</div>
										</div>
										<div className="text d-flex">
											<div className="flex-grow-1">
												<h3 className="title">Namver Say Naver (Official Music video)</h3>
												<p className="creator-name">Justin Bieber ft.Joden Smith</p>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div className="col-lg-4 col-sm-6">
								<a href="#a">
									<div className="card-video darkMode-elable">
										<div className="img border-radius-20">
											<div className="thumbnail position-relative">
												<img src={Card1Img} alt="card-thumbnail" className="w-100" />
												<div className="overlay"></div>
												<span className="video-length">24:08</span>
											</div>
										</div>
										<div className="text d-flex">
											<div className="flex-grow-1">
												<h3 className="title">Namver Say Naver (Official Music video)</h3>
												<p className="creator-name">Justin Bieber ft.Joden Smith</p>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div className="col-lg-4 col-sm-6">
								<a href="#a">
									<div className="card-video darkMode-elable">
										<div className="img border-radius-20">
											<div className="thumbnail position-relative">
												<img src={Card2Img} alt="card-thumbnail" className="w-100" />
												<div className="overlay"></div>
												<span className="video-length">24:08</span>
											</div>
										</div>
										<div className="text d-flex">
											<div className="flex-grow-1">
												<h3 className="title">Namver Say Naver (Official Music video)</h3>
												<p className="creator-name">Justin Bieber ft.Joden Smith</p>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div className="col-lg-4 col-sm-6">
								<a href="#a">
									<div className="card-video darkMode-elable">
										<div className="img border-radius-20">
											<div className="thumbnail position-relative">
												<img src={Card3Img} alt="card-thumbnail" className="w-100" />
												<div className="overlay"></div>
												<span className="video-length">24:08</span>
											</div>
										</div>
										<div className="text d-flex">
											<div className="flex-grow-1">
												<h3 className="title">Namver Say Naver (Official Music video)</h3>
												<p className="creator-name">Justin Bieber ft.Joden Smith</p>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div className="col-lg-4 col-sm-6">
								<a href="#a">
									<div className="card-video darkMode-elable">
										<div className="img border-radius-20">
											<div className="thumbnail position-relative">
												<img src={Card1Img} alt="card-thumbnail" className="w-100" />
												<div className="overlay"></div>
												<span className="video-length">24:08</span>
											</div>
										</div>
										<div className="text d-flex">
											<div className="flex-grow-1">
												<h3 className="title">Namver Say Naver (Official Music video)</h3>
												<p className="creator-name">Justin Bieber ft.Joden Smith</p>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div className="col-lg-4 col-sm-6">
								<a href="#a">
									<div className="card-video darkMode-elable">
										<div className="img border-radius-20">
											<div className="thumbnail position-relative">
												<img src={Card2Img} alt="card-thumbnail" className="w-100" />
												<div className="overlay"></div>
												<span className="video-length">24:08</span>
											</div>
										</div>
										<div className="text d-flex">
											<div className="flex-grow-1">
												<h3 className="title">Namver Say Naver (Official Music video)</h3>
												<p className="creator-name">Justin Bieber ft.Joden Smith</p>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div className="col-lg-4 col-sm-6">
								<a href="#a">
									<div className="card-video darkMode-elable">
										<div className="img border-radius-20">
											<div className="thumbnail position-relative">
												<img src={Card3Img} alt="card-thumbnail" className="w-100" />
												<div className="overlay"></div>
												<span className="video-length">24:08</span>
											</div>
										</div>
										<div className="text d-flex">
											<div className="flex-grow-1">
												<h3 className="title">Namver Say Naver (Official Music video)</h3>
												<p className="creator-name">Justin Bieber ft.Joden Smith</p>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div className="col-lg-4 col-sm-6">
								<a href="#a">
									<div className="card-video darkMode-elable">
										<div className="img border-radius-20">
											<div className="thumbnail position-relative">
												<img src={Card1Img} alt="card-thumbnail" className="w-100" />
												<div className="overlay"></div>
												<span className="video-length">24:08</span>
											</div>
										</div>
										<div className="text d-flex">
											<div className="flex-grow-1">
												<h3 className="title">Namver Say Naver (Official Music video)</h3>
												<p className="creator-name">Justin Bieber ft.Joden Smith</p>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div className="col-lg-4 col-sm-6">
								<a href="#a">
									<div className="card-video darkMode-elable">
										<div className="img border-radius-20">
											<div className="thumbnail position-relative">
												<img src={Card2Img} alt="card-thumbnail" className="w-100" />
												<div className="overlay"></div>
												<span className="video-length">24:08</span>
											</div>
										</div>
										<div className="text d-flex">
											<div className="flex-grow-1">
												<h3 className="title">Namver Say Naver (Official Music video)</h3>
												<p className="creator-name">Justin Bieber ft.Joden Smith</p>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div className="col-lg-4 col-sm-6">
								<a href="#a">
									<div className="card-video darkMode-elable">
										<div className="img border-radius-20">
											<div className="thumbnail position-relative">
												<img src={Card3Img} alt="card-thumbnail" className="w-100" />
												<div className="overlay"></div>
												<span className="video-length">24:08</span>
											</div>
										</div>
										<div className="text d-flex">
											<div className="flex-grow-1">
												<h3 className="title">Namver Say Naver (Official Music video)</h3>
												<p className="creator-name">Justin Bieber ft.Joden Smith</p>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div className="col-lg-4 col-sm-6">
								<a href="#a">
									<div className="card-video darkMode-elable">
										<div className="img border-radius-20">
											<div className="thumbnail position-relative">
												<img src={Card1Img} alt="card-thumbnail" className="w-100" />
												<div className="overlay"></div>
												<span className="video-length">24:08</span>
											</div>
										</div>
										<div className="text d-flex">
											<div className="flex-grow-1">
												<h3 className="title">Namver Say Naver (Official Music video)</h3>
												<p className="creator-name">Justin Bieber ft.Joden Smith</p>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div className="col-lg-4 col-sm-6">
								<a href="#a">
									<div className="card-video darkMode-elable">
										<div className="img border-radius-20">
											<div className="thumbnail position-relative">
												<img src={Card2Img} alt="card-thumbnail" className="w-100" />
												<div className="overlay"></div>
												<span className="video-length">24:08</span>
											</div>
										</div>
										<div className="text d-flex">
											<div className="flex-grow-1">
												<h3 className="title">Namver Say Naver (Official Music video)</h3>
												<p className="creator-name">Justin Bieber ft.Joden Smith</p>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div className="col-lg-4 col-sm-6">
								<a href="#a">
									<div className="card-video darkMode-elable">
										<div className="img border-radius-20">
											<div className="thumbnail position-relative">
												<img src={Card3Img} alt="card-thumbnail" className="w-100" />
												<div className="overlay"></div>
												<span className="video-length">24:08</span>
											</div>
										</div>
										<div className="text d-flex">
											<div className="flex-grow-1">
												<h3 className="title">Namver Say Naver (Official Music video)</h3>
												<p className="creator-name">Justin Bieber ft.Joden Smith</p>
											</div>
										</div>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Profile
