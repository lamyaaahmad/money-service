// import { TabContainer } from "react-bootstrap";
import "../Style/HomeSlide.scss";
import Carousel from "react-bootstrap/Carousel";
import TT from "./TT";

function HomeSlide() {
  return (
    <div className="home-slide">
      <Carousel>
        <Carousel.Item>
          <TT />
        </Carousel.Item>
        <Carousel.Item>
          <TT />
        </Carousel.Item>
        <Carousel.Item>
          <TT />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HomeSlide;
