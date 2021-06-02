import { useEffect, useState } from "react";

export default function Slider({ imagesName }) {
  const [slide, setSlide] = useState(0);
  const [images, setImages] = useState(imagesName);

  useEffect(() => {
    let timer = setInterval(() => {
      setSlide((slide) => (slide + 1) % images.length);
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="slider">
      <img src={`/images/slider/${images[slide]}`} alt={images[slide]} />
      <h1> Accelerate Your Entire Mobile Team Workflow</h1>

      <ul className="dots">
        {images.map((image, index) => {
          return (
            <li
              key={image}
              className={slide == index ? "active" : ""}
              onClick={() => setSlide(index)}
            ></li>
          );
        })}
      </ul>
    </div>
  );
}
