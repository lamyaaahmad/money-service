// import { TabContainer } from "react-bootstrap";
import "../Style/HomeSlide.scss";
import Carousel from "react-bootstrap/Carousel";
import SlideInfo from "./SlideInfo";

function HomeSlide() {
  return (
    <div className="home-slide">
      <Carousel>
        <Carousel.Item>
          <SlideInfo />
        </Carousel.Item>
        <Carousel.Item>
          <SlideInfo />
        </Carousel.Item>
        <Carousel.Item>
          <SlideInfo />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HomeSlide;
