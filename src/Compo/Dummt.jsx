import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Dummt = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.from(boxRef.current, {
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 80%", 
      },
      opacity: 90,
      y: 100,
      duration: 1,
    });
  }, []);

  return (
    <div ref={boxRef} className="w-40 h-40 bg-green-400 m-40">
      Scroll Animate!
      <div className="bg-red-600 h-">

      </div>
    </div>
  );
};

export default Dummt;
