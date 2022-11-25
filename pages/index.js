// Components
import Image from "next/image";
import Head from "next/head";

// Images
import Qr from "../public/qr-code.svg";
import Oval from "../public/oval.svg";
import Oval2 from "../public/oval2.svg";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>QR Code by Frontend Mentor</title>
        <meta
          name="description"
          content="This is a mockup challange from Frontend Mentor. The challange was built by me, Paul Caine a junior frontend developer"
        />
      </Head>
      <div className="container">
        <div className="component">
          <div className="qr">
            <Image className="oval oval-1" src={Oval} alt=""></Image>
            <Image className="oval oval-2" src={Oval2} alt=""></Image>
            <Image className="qr-image" src={Qr} alt=""></Image>
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
    </>
  );
}
