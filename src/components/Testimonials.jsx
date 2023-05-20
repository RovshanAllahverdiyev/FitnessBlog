import SectionHead from "./SectionHead";
import { ImQuotesLeft } from "react-icons/im";
import Card from "../UI/Card";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { testimonials } from "../data";
import { useState } from "react";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const { name, avatar, id, job, quote } = testimonials[index];

  const prevTestimonialHandler = () => {
    setIndex(prev => prev - 1)

    if(index <= 0 ) {
        setIndex(testimonials.length - 1)
    }

  }

  const nextTestimonialHandler = () => {
    setIndex(prev => prev + 1)

    if(index >= testimonials.length - 1) {
        setIndex(0)
    }
  }

  return (
    <section className="testimonials container">
      <div className="testimonials__container">
        <SectionHead icon={<ImQuotesLeft />} title="Testimonials" className='testimonials__head' />

        <Card className="testimonials">
          <div className="testimonials__avatar">
            <img src={avatar} alt={name} />
          </div>

        <p className="testimonials__quote"> {`"${quote}"`}</p>
        <h5>{name}</h5>
        <small className="testimonials__title">{job}</small>
        </Card>

        <div className="testimonials__btn-container">
            <button className="testimonials__btn">
                <IoIosArrowDropleftCircle onClick={prevTestimonialHandler} />
            </button>
            <button className="testimonials__btn">
                <IoIosArrowDroprightCircle onClick={nextTestimonialHandler}  />
            </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
