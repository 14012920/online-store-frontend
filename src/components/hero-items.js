import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
const externaImageLoader = ({ src }) => `${src}`;
const HeroItems = ({heroSection}) => {
  console.log("heroSection",heroSection)
  return (
    <Carousel
      autoPlay
      infiniteLoop
      swipeable
      showThumbs={false}
      showArrows={true}
      showStatus={false}
      showIndicators={false}
    >{heroSection.map((item)=> <div className="h-72 px-2 lg:h-96">
    <Image src={item?.image} loader={externaImageLoader} alt="1" fill />
  </div>)}
      
    </Carousel>
  );
};
export default HeroItems;
