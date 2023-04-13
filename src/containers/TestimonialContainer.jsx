import { Testimonial } from "../components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const TestimonialContainer = ({ testimonials }) => {
    return (
        <div className="bg-[#00000066] px-9 py-14">
            <Carousel responsive={responsive} infinite={true} arrows={false} showDots={true}>
                {
                    testimonials.map((testimonial, i) => (
                        <Testimonial  key={i} testimonial={testimonial} />
                    ))
                }
            </Carousel>
        </div>
    );
};

export default TestimonialContainer;