import { useState } from 'react'
import ReactPlayer from 'react-player/youtube'

import ProfileVideoViewHeader from './../components/ProfileVideoViewHeader'

// import UserAvatar from '../assets/images/user-avatar.png'

import Card1Img from '../assets/images/3d-card/img-1.png'
import Card2Img from '../assets/images/3d-card/img-2.png'
import Card3Img from '../assets/images/3d-card/img-3.png'
import Card4Img from '../assets/images/3d-card/img-4.png'

const VideoView = () => {
	const [showYoutubePlayer, setShowYoutubePlayer] = useState()

	return (
		<div>
			<ProfileVideoViewHeader />

			{/* <!-- === banner start === --> */}
			<div className="video-banner">
				<div className="video-full">
					<div className="wrapper">
						<div className="video-main">
							{showYoutubePlayer ? (
								<div></div>
							) : (
								<>
									<div className="promo-video">
										<div className="waves-block">
											<div className="waves wave-1"></div>
											<div className="waves wave-2"></div>
											<div className="waves wave-3"></div>
											<div className="waves wave-4"></div>
										</div>
									</div>
									<a
										className="video bla-1"
										href="#youtube"
										// target="_blank"
										// rel="noreferrer"
										onClick={() => setShowYoutubePlayer(true)}
									>
										<i className="fas fa-play"></i>
									</a>
								</>
							)}

							{showYoutubePlayer && (
								<div classNameName=" position-relative">
									<ReactPlayer url="https://www.youtube.com/watch?v=17nTHPPMIYo" style={{ maxWidth: '90vw' }} />

									<div
										classNameName="cancel position-absolute  "
										style={{ top: '-40px', right: '-30px', fontSize: '30px', color: 'red', fontWeight: 'bold', cursor: 'pointer' }}
										onClick={() => setShowYoutubePlayer(false)}
									>
										{' '}
										X{' '}
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
				<div className="contaier container-lg py-5 position-relative">
					<div className="row d-xl-flex d-none">
						<div className="col-xl-8">
							<div className="text">
								<h4 className="banner-sub-title">Justin Bieber</h4>
								<h1 className="banner-title">Beauty and a Beat</h1>
							</div>
						</div>
						<div className="col-xl-4">
							<a href="#a">
								<div className="card-video card-horizontal mb-4">
									<div className="img border-radius-20">
										<div className="thumbnail position-relative">
											<img src={Card1Img} alt="card-thumbnail" className="w-100" />
											<div className="overlay"></div>
											<span className="video-length">24:08</span>
										</div>
									</div>
									<div className="text d-flex">
										<div className="flex-grow-1">
											<h3 className="title">Never Say Never ft. Jaden Smith (Official Music Video) </h3>
											<p className="creator-name">Justin Bieber</p>
										</div>
									</div>
								</div>
							</a>
							<a href="#a">
								<div className="card-video card-horizontal mb-4">
									<div className="img border-radius-20">
										<div className="thumbnail position-relative">
											<img src={Card2Img} alt="card-thumbnail" className="w-100" />
											<div className="overlay"></div>
											<span className="video-length">24:08</span>
										</div>
									</div>
									<div className="text d-flex">
										<div className="flex-grow-1">
											<h3 className="title">Never Say Never ft. Jaden Smith (Official Music Video) </h3>
											<p className="creator-name">Justin Bieber</p>
										</div>
									</div>
								</div>
							</a>
							<a href="#a">
								<div className="card-video card-horizontal mb-4">
									<div className="img border-radius-20">
										<div className="thumbnail position-relative">
											<img src={Card3Img} alt="card-thumbnail" className="w-100" />
											<div className="overlay"></div>
											<span className="video-length">24:08</span>
										</div>
									</div>
									<div className="text d-flex">
										<div className="flex-grow-1">
											<h3 className="title">Never Say Never ft. Jaden Smith (Official Music Video) </h3>
											<p className="creator-name">Justin Bieber</p>
										</div>
									</div>
								</div>
							</a>
							<a href="#a">
								<div className="card-video card-horizontal mb-4">
									<div className="img border-radius-20">
										<div className="thumbnail position-relative">
											<img src={Card4Img} alt="card-thumbnail" className="w-100" />
											<div className="overlay"></div>
											<span className="video-length">24:08</span>
										</div>
									</div>
									<div className="text d-flex">
										<div className="flex-grow-1">
											<h3 className="title">Never Say Never ft. Jaden Smith (Official Music Video) </h3>
											<p className="creator-name">Justin Bieber</p>
										</div>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default VideoView
