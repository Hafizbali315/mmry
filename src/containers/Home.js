import HomeHeader from './../components/HomeHeader'

import Card1Img from '../assets/images/3d-card/img-1.png'
import Card2Img from '../assets/images/3d-card/img-2.png'
import Card3Img from '../assets/images/3d-card/img-3.png'
import Card4Img from '../assets/images/3d-card/img-4.png'

const Home = () => {
	return (
		<div>
			<HomeHeader />

			<section className="card-3d-box my-5 pt-5">
				<div className="container">
					<div className="row">
						<div className="col-md-4 col-sm-6">
							<a href="#1">
								<div className="card-3d position-relative shadow-lg">
									<img src={Card1Img} alt="card-img" className="w-100 back-img" />
									<img src={Card1Img} alt="card-img" className="w-100 middle-img" />
									<div className="position-relative main-img-box">
										<img src={Card1Img} alt="card-img" className="w-100 main-img" />
										<h3 className="card-title">Hip Hop</h3>
									</div>
								</div>
							</a>
						</div>
						<div className="col-md-4 col-sm-6">
							<a href="#2">
								<div className="card-3d position-relative shadow-lg">
									<img src={Card2Img} alt="card-img" className="w-100 back-img" />
									<img src={Card2Img} alt="card-img" className="w-100 middle-img" />
									<div className="position-relative main-img-box">
										<img src={Card2Img} alt="card-img" className="w-100 main-img" />
										<h3 className="card-title">Hip Hop</h3>
									</div>
								</div>
							</a>
						</div>
						<div className="col-md-4 col-sm-6">
							<a href="#3">
								<div className="card-3d position-relative shadow-lg">
									<img src={Card3Img} alt="card-img" className="w-100 back-img" />
									<img src={Card3Img} alt="card-img" className="w-100 middle-img" />
									<div className="position-relative main-img-box">
										<img src={Card3Img} alt="card-img" className="w-100 main-img" />
										<h3 className="card-title">Hip Hop</h3>
									</div>
								</div>
							</a>
						</div>

						<div className="col-md-4 col-sm-6">
							<a href="#4">
								<div className="card-3d position-relative shadow-lg">
									<img src={Card4Img} alt="card-img" className="w-100 back-img" />
									<img src={Card4Img} alt="card-img" className="w-100 middle-img" />
									<div className="position-relative main-img-box">
										<img src={Card4Img} alt="card-img" className="w-100 main-img" />
										<h3 className="card-title">Hip Hop</h3>
									</div>
								</div>
							</a>
						</div>
						<div className="col-md-4 col-sm-6">
							<a href="#5">
								<div className="card-3d position-relative shadow-lg">
									<img src={Card1Img} alt="card-img" className="w-100 back-img" />
									<img src={Card1Img} alt="card-img" className="w-100 middle-img" />
									<div className="position-relative main-img-box">
										<img src={Card1Img} alt="card-img" className="w-100 main-img" />
										<h3 className="card-title">Hip Hop</h3>
									</div>
								</div>
							</a>
						</div>
						<div className="col-md-4 col-sm-6">
							<a href="#6">
								<div className="card-3d position-relative shadow-lg">
									<img src={Card2Img} alt="card-img" className="w-100 back-img" />
									<img src={Card2Img} alt="card-img" className="w-100 middle-img" />
									<div className="position-relative main-img-box">
										<img src={Card2Img} alt="card-img" className="w-100 main-img" />
										<h3 className="card-title">Hip Hop</h3>
									</div>
								</div>
							</a>
						</div>
						<div className="col-md-4 col-sm-6">
							<a href="#7">
								<div className="card-3d position-relative shadow-lg">
									<img src={Card3Img} alt="card-img" className="w-100 back-img" />
									<img src={Card3Img} alt="card-img" className="w-100 middle-img" />
									<div className="position-relative main-img-box">
										<img src={Card3Img} alt="card-img" className="w-100 main-img" />
										<h3 className="card-title">Hip Hop</h3>
									</div>
								</div>
							</a>
						</div>
						<div className="col-md-4 col-sm-6">
							<a href="#8">
								<div className="card-3d position-relative shadow-lg">
									<img src={Card4Img} alt="card-img" className="w-100 back-img" />
									<img src={Card4Img} alt="card-img" className="w-100 middle-img" />
									<div className="position-relative main-img-box">
										<img src={Card4Img} alt="card-img" className="w-100 main-img" />
										<h3 className="card-title">Hip Hop</h3>
									</div>
								</div>
							</a>
						</div>
						<div className="col-md-4 col-sm-6">
							<a href="#9">
								<div className="card-3d position-relative shadow-lg">
									<img src={Card1Img} alt="card-img" className="w-100 back-img" />
									<img src={Card1Img} alt="card-img" className="w-100 middle-img" />
									<div className="position-relative main-img-box">
										<img src={Card1Img} alt="card-img" className="w-100 main-img" />
										<h3 className="card-title">Hip Hop</h3>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Home
