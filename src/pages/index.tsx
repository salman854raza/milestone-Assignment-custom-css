"use client";

import Link from "next/link";
import Typewriter from "typewriter-effect";
import "./index.css";
const Home = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <a className="brand">
            <div className="avatar">
              <img
                src="/images/salman.jpg"
                alt="salman avatar"
                className="avatar-img"
              />
              <span className="status-indicator"></span>
            </div>
            <span className="brand-name">Salman Raza</span>
          </a>
          <nav className="nav">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/aboutus" className="nav-link">About Us</Link>
            <Link href="/contactus" className="nav-link">Contact Us</Link>
            <Link href="/privacypolicy" className="nav-link">Privacy Policy</Link>
          </nav>
          <div className="buttons">
            <button className="btn login">Login</button>
            <button className="btn signup">Sign Up</button>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <img
            className="hero-image"
            alt="hero"
            src="/images/salman.jpg"
          />
          <div className="hero-content">
            <h1 className="hero-title">
              <Typewriter
                options={{
                  strings: [
                    "Lecturer in Chemistry",
                    "Digital Entrepreneur",
                    "SEO Specialist",
                    "Web Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="hero-description">
              I am Salman Raza, a passionate and digital-oriented electronics engineer with over a decade of experience...
            </p>
            <div className="subscribe">
              <input type="text" placeholder="Enter your email" />
              <button className="btn subscribe-btn">Subscribe Now</button>
            </div>
            <div className="store-buttons">
              <button className="store-btn google">Get it on Google Play</button>
              <button className="store-btn apple">Download on the App Store</button>
            </div>
          </div>
        </div>
      </section>

      
    <section className="contact-us-section">
      <div className="container">
        <div className="header">
          <h1>Contact Us</h1>
          <p>
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.
          </p>
        </div>
        <div className="form-container">
          <div className="form-group">
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
          </div>
          <div className="textarea-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <div className="button-group">
            <button>Submit</button>
          </div>
          <div className="contact-info">
            <a href="mailto:example@email.com">example@email.com</a>
            <p>
              49 Smith St.<br />Saint Cloud, MN 56301
            </p>
            <div className="social-icons">
              <a href="#"><svg>&gt-- SVG content here --&gt;</svg></a>
              <a href="#"><svg>&gt-- SVG content here --&gt;</svg></a>
              <a href="#"><svg>&gt-- SVG content here --&gt;</svg></a>
              <a href="#"><svg>&gt-- SVG content here --&gt;</svg></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    <section className="section">
      <div className="container">
        <div className="text-center">
          <h1 className="heading">Project Features & Commands</h1>
          <p className="description">
            Explore the essential features of each TypeScript project and easily
            run them using the npx commands provided below.
          </p>
        </div>
        <div className="flex">
          {[
            { command: "npx run start:calculator" },
            { command: "npx run start:atm" },
            { command: "npx run start:Currency" },
            { command: "npx run start:todo-list" },
            { command: "npx run start:OopBank" },
            { command: "npx run start:Guessing-Game" },
          ].map((item, index) => (
            <div key={index} className="card">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span>{item.command}</span>
            </div>
          ))}
        </div>
        <div className="button-container">
          <a
            href="https://github.com"
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://download.logo.wine/logo/GitHub/GitHub-Logo.wine.png"
              alt="GitHub Logo"
            />
            <span>
              <span className="text-xs">GitHub</span>
              <span className="title">@Salman Raza</span>
            </span>
          </a>
        </div>
      </div>
    </section>

    
      {/* LinkedIn button */}
      <div>
        <a href="https://www.linkedin.com">
          <button className="linkedin-button">Visit my LinkedIn account</button>
        </a>
      </div>

      {/* Typewriter Section */}
      <div className="flex-center">
        <h1 className="heading">
          What is{" "}
          <Typewriter
            options={{
              strings: ["Website", "Transport", "Event"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        <div className="grid">
          <img
            className="image-rounded"
            src="/images/images.png"
            alt="Website"
          />
          <img
            className="image-rounded"
            src="/images/img2.png"
            alt="Transport"
          />
          <img
            className="image-rounded"
            src="/images/img1.png"
            alt="Event"
          />
        </div>
      </div>

      {/* Image card */}
      <div className="image-card">
        <div>
          <img
            src="/images/Next.png"
            alt="Next.js"
            className="rounded-lg"
          />
        </div>
        <h3>What's New in Next.js</h3>
        <p>
          Exploring Next.js in 2024 while learning it easily.
        </p>
        <button>Read More</button>
      </div>
    {/* </div> */}
    </>
  );
};

export default Home;




   
