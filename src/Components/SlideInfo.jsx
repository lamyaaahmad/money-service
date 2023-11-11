import { Link } from "react-router-dom";
import phone from "../images/phone.png";
import "../Style/SlideInfo.scss";

function SlideInfo() {
  return (
    <div className="slide-info">
      <div className="text">
        <h1>فرصتك لربح ايفون 15</h1>
        <h5>
          لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة هو النص الوهمي Ipsum
          Lorem الطباعة والتنضيد. كان ، القيا
        </h5>
        <Link className="more-info">المزيد</Link>
      </div>
      <div className="image">
        <img src={phone} alt="" />
      </div>
    </div>
  );
}

export default SlideInfo;
