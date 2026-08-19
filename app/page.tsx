"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const perfumes = [
    {
      name: "NOIR",
      subtitle: "THE DARK SIGNATURE",
      description:
        "A deep, magnetic fragrance created for unforgettable presence.",
         image:"/tesla1.jpg",
    },
    {
      name: "ÉCLAT",
      subtitle: "LIGHT. REFINED.",
      description:
        "A luminous composition where precision meets effortless elegance.",
      image:
        "/tesla2.jpg"    },
    {
      name: "VELOCITY",
      subtitle: "ENGINEERED TO MOVE",
      description:
        "Bold energy captured in a refined and powerful signature scent.",
      image:
        "/tesla3.jpg",
    },
    {
      name: "AURA",
      subtitle: "PRESENCE WITHOUT WORDS",
      description:
        "An elegant trail designed to stay long after you leave.",
      image:
        "/tesla1.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const changePerfume = (index: number) => { 
    setIsVisible(false);

    setTimeout(() => {
      setCurrent(index);
      setIsVisible(true);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changePerfume((current + 1) % perfumes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  const nextPerfume = () => {
    changePerfume((current + 1) % perfumes.length);
  };

  const previousPerfume = () => {
    changePerfume(
      (current - 1 + perfumes.length) % perfumes.length
    );
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <main className="page">

      {/* NAVBAR */}

      <nav className="navbar">

        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >
          TESLA
        </a>

        {/* MOBILE MENU BUTTON */}

        <button
          className={`menu-toggle ${
            menuOpen ? "open" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* NAVIGATION LINKS */}

        <div
          className={`nav-links ${
            menuOpen ? "menu-open" : ""
          }`}
        >
          <a
            href="#home"
            onClick={closeMenu}
          >
            HOME
          </a>

          <a
            href="#collection"
            onClick={closeMenu}
          >
            COLLECTION
          </a>

          <a
            href="#story"
            onClick={closeMenu}
          >
            STORY
          </a>

          <a
            href="#discover"
            onClick={closeMenu}
          >
            DISCOVER
          </a>
        </div>

        <div className="nav-space"></div>

      </nav>


      {/* HERO SECTION */}

      <section
        className="hero"
        id="home"
      >

        <div className="hero-content">

          <p className="eyebrow">
            TESLA PARFUM — 2026
          </p>

          <h1>
            THE SCENT
            <br />
            <span>OF MOTION.</span>
          </h1>

          <p className="description">
            A fragrance engineered for those who move first.
            Precision, power and presence — captured in a bottle.
          </p>

          <a
            href="#collection"
            className="discover-btn"
          >
            DISCOVER THE COLLECTION
            <span>→</span>
          </a>


          {/* SLIDER CONTROLS */}

          <div className="slider-info">

            <button
              className="arrow-btn"
              onClick={previousPerfume}
              aria-label="Previous perfume"
            >
              ←
            </button>

            <div className="counter">
              0{current + 1}
              <span>/ 04</span>
            </div>

            <div className="slider-lines">

              {perfumes.map((_, index) => (
                <button
                  key={index}
                  className={`slider-line ${
                    current === index
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    changePerfume(index)
                  }
                  aria-label={`Show perfume ${
                    index + 1
                  }`}
                />
              ))}

            </div>

            <button
              className="arrow-btn"
              onClick={nextPerfume}
              aria-label="Next perfume"
            >
              →
            </button>

          </div>

        </div>


        {/* HERO IMAGE */}

        <div className="hero-image-container">

          <div className="glow"></div>

          <div className="image-ring"></div>

          <img
            src={perfumes[current].image}
            alt={perfumes[current].name}
            className={`perfume-image ${
              isVisible
                ? "image-visible"
                : "image-hidden"
            }`}
          />

          {/* PRODUCT INFORMATION */}

          <div
            className={`product-info ${
              isVisible
                ? "info-visible"
                : "info-hidden"
            }`}
          >

            <p>
              {perfumes[current].subtitle}
            </p>

            <h2>
              {perfumes[current].name}
            </h2>

            <span>
              {perfumes[current].description}
            </span>

          </div>

        </div>

      </section>


      {/* COLLECTION */}

      <section
        className="collection"
        id="collection"
      >

        <div className="section-heading">

          <p className="section-label">
            THE COLLECTION
          </p>

          <h2>
            FOUR EXPRESSIONS.
            <br />
            <span>ONE IDENTITY.</span>
          </h2>

        </div>


        <div className="collection-grid">

          {perfumes.map((perfume, index) => (

            <button
              className={`collection-card ${
                current === index
                  ? "selected"
                  : ""
              }`}
              key={perfume.name}
              onClick={() => {

                changePerfume(index);

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });

              }}
            >

              <img
                src={perfume.image}
                alt={perfume.name}
              />

              <div className="card-overlay">

                <span>
                  0{index + 1}
                </span>

                <div>

                  <p>
                    {perfume.subtitle}
                  </p>

                  <h3>
                    {perfume.name}
                  </h3>

                </div>

              </div>

            </button>

          ))}

        </div>

      </section>


      {/* STORY */}

      <section
        className="story"
        id="story"
      >

        <div className="story-title">

          <p className="section-label">
            THE PHILOSOPHY
          </p>

          <h2>
            ENGINEERED
            <br />
            <span>FOR PRESENCE.</span>
          </h2>

        </div>


        <div className="story-content">

          <div className="story-number">
            01
          </div>

          <p className="story-text">
            Luxury is not about excess.
            It is about precision.
          </p>

          <p className="story-text small">
            Every note is carefully composed to create a
            fragrance that feels as powerful as it is refined.
            Designed for movement. Created for presence.
          </p>

        </div>

      </section>


      {/* DISCOVER */}

      <section
        className="discover"
        id="discover"
      >

        <div className="discover-content">

          <p className="section-label">
            TESLA PARFUM
          </p>

          <h2>
            A NEW KIND
            <br />
            <span>OF LUXURY.</span>
          </h2>

          <p>
            Where technology meets timeless elegance.
          </p>

          <a
            href="#collection"
            className="discover-btn"
          >
            EXPLORE COLLECTION
            <span>→</span>
          </a>

        </div>

      </section>


      {/* FOOTER */}

      <footer>

        <div className="footer-logo">
          TESLA
        </div>

        <p>
          THE SCENT OF MOTION.
        </p>

        <span>
          © 2026
        </span>

      </footer>

    </main>
  );
}