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
			<div class="profile-banner"></div>

			{/* <!-- === profile-info-full section start === --> */}
			<section class="profile-info-full mb-5">
				<div class="container">
					<div class="card profile-info-card shadow">
						<div class="profile-info">
							<div class="user-avatar">
								<img src={UserAvatar} alt="user-avatar" class="img-fluid shadow-lg" />
							</div>
							<h2 class="user-name">Justin Bieber</h2>
							<p class="user-description">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit repellat, animi eum, tempora explicabo minima adipisci
								eos at voluptatibus iure quis fugit deserunt aliquam deleniti illum sapiente ipsa cupiditate sequi!
							</p>
						</div>

						<div class="row g-4 py-5 px-lg-4">
							<div class="col-lg-4 col-sm-6">
								<a href="#a">
									<div class="card-video darkMode-elable">
										<div class="img border-radius-20">
											<div class="thumbnail position-relative">
												<img src={Card1Img} alt="card-thumbnail" class="w-100" />
												<div class="overlay"></div>
												<span class="video-length">24:08</span>
											</div>
										</div>
										<div class="text d-flex">
											<div class="flex-grow-1">
												<h3 class="title">Namver Say Naver (Official Music video)</h3>
												<p class="creator-name">Justin Bieber ft.Joden Smith</p>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div class="col-lg-4 col-sm-6">
								<a href="#a">
									<div class="card-video darkMode-elable">
										<div class="img border-radius-20">
											<div class="thumbnail position-relative">
												<img src={Card2Img} alt="card-thumbnail" class="w-100" />
												<div class="overlay"></div>
												<span class="video-length">24:08</span>
											</div>
										</div>
										<div class="text d-flex">
											<div class="flex-grow-1">
												<h3 class="title">Namver Say Naver (Official Music video)</h3>
												<p class="creator-name">Justin Bieber ft.Joden Smith</p>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div class="col-lg-4 col-sm-6">
								<a href="#a">
									<div class="card-video darkMode-elable">
										<div class="img border-radius-20">
											<div class="thumbnail position-relative">
												<img src={Card3Img} alt="card-thumbnail" class="w-100" />
												<div class="overlay"></div>
												<span class="video-length">24:08</span>
											</div>
										</div>
										<div class="text d-flex">
											<div class="flex-grow-1">
												<h3 class="title">Namver Say Naver (Official Music video)</h3>
												<p class="creator-name">Justin Bieber ft.Joden Smith</p>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div class="col-lg-4 col-sm-6">
								<a href="#a">
									<div class="card-video darkMode-elable">
										<div class="img border-radius-20">
											<div class="thumbnail position-relative">
												<img src={Card1Img} alt="card-thumbnail" class="w-100" />
												<div class="overlay"></div>
												<span class="video-length">24:08</span>
											</div>
										</div>
										<div class="text d-flex">
											<div class="flex-grow-1">
												<h3 class="title">Namver Say Naver (Official Music video)</h3>
												<p class="creator-name">Justin Bieber ft.Joden Smith</p>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div class="col-lg-4 col-sm-6">
								<a href="#a">
									<div class="card-video darkMode-elable">
										<div class="img border-radius-20">
											<div class="thumbnail position-relative">
												<img src={Card2Img} alt="card-thumbnail" class="w-100" />
												<div class="overlay"></div>
												<span class="video-length">24:08</span>
											</div>
										</div>
										<div class="text d-flex">
											<div class="flex-grow-1">
												<h3 class="title">Namver Say Naver (Official Music video)</h3>
												<p class="creator-name">Justin Bieber ft.Joden Smith</p>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div class="col-lg-4 col-sm-6">
								<a href="#a">
									<div class="card-video darkMode-elable">
										<div class="img border-radius-20">
											<div class="thumbnail position-relative">
												<img src={Card3Img} alt="card-thumbnail" class="w-100" />
												<div class="overlay"></div>
												<span class="video-length">24:08</span>
											</div>
										</div>
										<div class="text d-flex">
											<div class="flex-grow-1">
												<h3 class="title">Namver Say Naver (Official Music video)</h3>
												<p class="creator-name">Justin Bieber ft.Joden Smith</p>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div class="col-lg-4 col-sm-6">
								<a href="#a">
									<div class="card-video darkMode-elable">
										<div class="img border-radius-20">
											<div class="thumbnail position-relative">
												<img src={Card1Img} alt="card-thumbnail" class="w-100" />
												<div class="overlay"></div>
												<span class="video-length">24:08</span>
											</div>
										</div>
										<div class="text d-flex">
											<div class="flex-grow-1">
												<h3 class="title">Namver Say Naver (Official Music video)</h3>
												<p class="creator-name">Justin Bieber ft.Joden Smith</p>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div class="col-lg-4 col-sm-6">
								<a href="#a">
									<div class="card-video darkMode-elable">
										<div class="img border-radius-20">
											<div class="thumbnail position-relative">
												<img src={Card2Img} alt="card-thumbnail" class="w-100" />
												<div class="overlay"></div>
												<span class="video-length">24:08</span>
											</div>
										</div>
										<div class="text d-flex">
											<div class="flex-grow-1">
												<h3 class="title">Namver Say Naver (Official Music video)</h3>
												<p class="creator-name">Justin Bieber ft.Joden Smith</p>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div class="col-lg-4 col-sm-6">
								<a href="#a">
									<div class="card-video darkMode-elable">
										<div class="img border-radius-20">
											<div class="thumbnail position-relative">
												<img src={Card3Img} alt="card-thumbnail" class="w-100" />
												<div class="overlay"></div>
												<span class="video-length">24:08</span>
											</div>
										</div>
										<div class="text d-flex">
											<div class="flex-grow-1">
												<h3 class="title">Namver Say Naver (Official Music video)</h3>
												<p class="creator-name">Justin Bieber ft.Joden Smith</p>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div class="col-lg-4 col-sm-6">
								<a href="#a">
									<div class="card-video darkMode-elable">
										<div class="img border-radius-20">
											<div class="thumbnail position-relative">
												<img src={Card1Img} alt="card-thumbnail" class="w-100" />
												<div class="overlay"></div>
												<span class="video-length">24:08</span>
											</div>
										</div>
										<div class="text d-flex">
											<div class="flex-grow-1">
												<h3 class="title">Namver Say Naver (Official Music video)</h3>
												<p class="creator-name">Justin Bieber ft.Joden Smith</p>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div class="col-lg-4 col-sm-6">
								<a href="#a">
									<div class="card-video darkMode-elable">
										<div class="img border-radius-20">
											<div class="thumbnail position-relative">
												<img src={Card2Img} alt="card-thumbnail" class="w-100" />
												<div class="overlay"></div>
												<span class="video-length">24:08</span>
											</div>
										</div>
										<div class="text d-flex">
											<div class="flex-grow-1">
												<h3 class="title">Namver Say Naver (Official Music video)</h3>
												<p class="creator-name">Justin Bieber ft.Joden Smith</p>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div class="col-lg-4 col-sm-6">
								<a href="#a">
									<div class="card-video darkMode-elable">
										<div class="img border-radius-20">
											<div class="thumbnail position-relative">
												<img src={Card3Img} alt="card-thumbnail" class="w-100" />
												<div class="overlay"></div>
												<span class="video-length">24:08</span>
											</div>
										</div>
										<div class="text d-flex">
											<div class="flex-grow-1">
												<h3 class="title">Namver Say Naver (Official Music video)</h3>
												<p class="creator-name">Justin Bieber ft.Joden Smith</p>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div class="col-lg-4 col-sm-6">
								<a href="#a">
									<div class="card-video darkMode-elable">
										<div class="img border-radius-20">
											<div class="thumbnail position-relative">
												<img src={Card1Img} alt="card-thumbnail" class="w-100" />
												<div class="overlay"></div>
												<span class="video-length">24:08</span>
											</div>
										</div>
										<div class="text d-flex">
											<div class="flex-grow-1">
												<h3 class="title">Namver Say Naver (Official Music video)</h3>
												<p class="creator-name">Justin Bieber ft.Joden Smith</p>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div class="col-lg-4 col-sm-6">
								<a href="#a">
									<div class="card-video darkMode-elable">
										<div class="img border-radius-20">
											<div class="thumbnail position-relative">
												<img src={Card2Img} alt="card-thumbnail" class="w-100" />
												<div class="overlay"></div>
												<span class="video-length">24:08</span>
											</div>
										</div>
										<div class="text d-flex">
											<div class="flex-grow-1">
												<h3 class="title">Namver Say Naver (Official Music video)</h3>
												<p class="creator-name">Justin Bieber ft.Joden Smith</p>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div class="col-lg-4 col-sm-6">
								<a href="#a">
									<div class="card-video darkMode-elable">
										<div class="img border-radius-20">
											<div class="thumbnail position-relative">
												<img src={Card3Img} alt="card-thumbnail" class="w-100" />
												<div class="overlay"></div>
												<span class="video-length">24:08</span>
											</div>
										</div>
										<div class="text d-flex">
											<div class="flex-grow-1">
												<h3 class="title">Namver Say Naver (Official Music video)</h3>
												<p class="creator-name">Justin Bieber ft.Joden Smith</p>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div class="col-lg-4 col-sm-6">
								<a href="#a">
									<div class="card-video darkMode-elable">
										<div class="img border-radius-20">
											<div class="thumbnail position-relative">
												<img src={Card1Img} alt="card-thumbnail" class="w-100" />
												<div class="overlay"></div>
												<span class="video-length">24:08</span>
											</div>
										</div>
										<div class="text d-flex">
											<div class="flex-grow-1">
												<h3 class="title">Namver Say Naver (Official Music video)</h3>
												<p class="creator-name">Justin Bieber ft.Joden Smith</p>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div class="col-lg-4 col-sm-6">
								<a href="#a">
									<div class="card-video darkMode-elable">
										<div class="img border-radius-20">
											<div class="thumbnail position-relative">
												<img src={Card2Img} alt="card-thumbnail" class="w-100" />
												<div class="overlay"></div>
												<span class="video-length">24:08</span>
											</div>
										</div>
										<div class="text d-flex">
											<div class="flex-grow-1">
												<h3 class="title">Namver Say Naver (Official Music video)</h3>
												<p class="creator-name">Justin Bieber ft.Joden Smith</p>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div class="col-lg-4 col-sm-6">
								<a href="#a">
									<div class="card-video darkMode-elable">
										<div class="img border-radius-20">
											<div class="thumbnail position-relative">
												<img src={Card3Img} alt="card-thumbnail" class="w-100" />
												<div class="overlay"></div>
												<span class="video-length">24:08</span>
											</div>
										</div>
										<div class="text d-flex">
											<div class="flex-grow-1">
												<h3 class="title">Namver Say Naver (Official Music video)</h3>
												<p class="creator-name">Justin Bieber ft.Joden Smith</p>
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
