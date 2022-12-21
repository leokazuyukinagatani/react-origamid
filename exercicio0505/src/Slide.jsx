import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import styles from "./Slide.module.css";

export function Slide({ slides }) {
  const [active, setActive] = useState(0);
  const [position, setPosition] = useState(0);
  const contentRef = useRef();

  function slidePrev() {
    if (active > 0) setActive((active) => active - 1);
  }

  function slideNext() {
    if (active < slides.length - 1) setActive((active) => active + 1);
  }

  useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  return (
    <section className={styles.container}>
      <div
        ref={contentRef}
        className={styles.content}
        style={{ transform: `translateX(${position}px)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={styles.item}>
            {slide.text}
          </div>
        ))}
      </div>
      <nav className={styles.nav}>
        <button onClick={slidePrev}>Anterior</button>
        <button onClick={slideNext}>Próximo</button>
      </nav>
    </section>
  );
}
