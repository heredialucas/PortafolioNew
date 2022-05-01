import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 70,
      strings: ["Heredia Lucas", "Full Stack"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer"></div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>
            Hi! How are you?
            <br /> I'm <span ref={textRef}></span>
          </h1>
        </div>
      </div>
    </div>
  );
}
