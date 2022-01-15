import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from 'react-router-dom';

import pic2 from './../../../../images/contacts/pic-2.jpg';
import pic3 from './../../../../images/contacts/pic-3.jpg';
import pic4 from './../../../../images/contacts/pic-4.jpg';
import pic5 from './../../../../images/contacts/pic-5.jpg';
import pic7 from './../../../../images/contacts/pic-7.jpg';

const TestimonialOwl = () =>{
	const settings = {
		dots: false,
		infinite: true,
		arrows: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
				  slidesToShow: 5,
				  slidesToScroll: 1,
				  
				},
			},
			{
				breakpoint: 1024,
				settings: {
				  slidesToShow: 4,
				  slidesToScroll: 1,				  
				},
			},
			
			{
				breakpoint: 768,
				settings: {
				  slidesToShow: 3,
				  slidesToScroll: 1,
				},
			},
			{
				breakpoint: 400,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 1,
				},
			},
		],
	};
	return(
		<>
			<Slider className="testimonial-two px-4 owl-carousel contacts-slider" {...settings}>
				<div className="items">
					<div className="text-center">
						<img className="mb-3 rounded-circle mx-auto" src={pic5} alt="" />
						<h5 className="mb-0"><Link to={"#"} className="text-black">Samuel</Link></h5>
						<span className="fs-12">@sam224</span>
					</div>
				</div>
				<div className="items">
					<div className="text-center">
						<img className="mb-3 rounded-circle mx-auto" src={pic2} alt="" />
						<h5 className="mb-0"><Link to={"#"} className="text-black">Cindy</Link></h5>
						<span className="fs-12">@cindyss</span>
					</div>
				</div>
				<div className="items">
					<div className="text-center">
						<img className="mb-3 rounded-circle mx-auto" src={pic3} alt="" />
						<h5 className="mb-0"><Link to={"#"} className="text-black" >David</Link></h5>
						<span className="fs-12">@davidxc</span>
					</div>
				</div>
				<div className="items">
					<div className="text-center">
						<img className="mb-3 rounded-circle mx-auto" src={pic4} alt="" />
						<h5 className="mb-0"><Link to={"#"} className="text-black">Martha</Link></h5>
						<span className="fs-12">@marthaa</span>
					</div>
				</div>
				<div className="items">
					<div className="text-center">
						<img className="mb-3 rounded-circle mx-auto" src={pic7} alt="" />
						<h5 className="mb-0"><Link to={"#"} className="text-black">Olivia</Link></h5>
						<span className="fs-12">@oliv62</span>
					</div>
				</div>
			</Slider>
		</>
	)
}
export default TestimonialOwl;