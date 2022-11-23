// Components
import Image from "next/image";

// Images
import Qr from "../public/qr-code.svg";
import Oval from "../public/oval.svg";
import Oval2 from "../public/oval2.svg";

export default function HomePage() {
  return (
    <div className="container">
      <div className="component">
        <div className="qr">
          <Image className="oval oval-1" src={Oval}></Image>
          <Image className="oval oval-2" src={Oval2}></Image>
          <Image className="qr-image" src={Qr}></Image>
        </div>
        <div className="content">
          <h1>Improve your front-end skills by building projects</h1>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}
