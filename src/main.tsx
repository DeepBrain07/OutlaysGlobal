import "./assets/styles/index.css";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { SnackbarProvider } from "notistack";
import { logo, chart, profitableTrades } from "./assets/images";
import Button from "./components/Button";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SnackbarProvider>
      <div className="text-white flex flex-col  bg-[#101222] w-[100%] h-full p-4 sm:p-10 relative">
        {/* Header */}
        <div className="flex gap-4 items-center justify-between">
          <div className="flex  sm:flex-nowrap gap-2 sm:gap-8 w-fit justify-center items-center">
            <img src={logo} alt="logo" className="w-[40px] sm:w-[150px]" />
            <div className="flex w-[100%] flex-col justify-center items-center text-center font-extrabold text-[16px] sm:text-[30px] text-[#9B621D]">
              <h2>OUTLAYS GLOBAL</h2>
              <div className="flex items-start gap-2 flex-wrap">
                <h2>SERVICES</h2>
                <span className="text-white pt-1 sm:pt-2 font-normal text-[8px] sm:text-[16px]">
                  Live a Better Life
                </span>
              </div>
            </div>
          </div>

          {/* Hamburger Button (Visible on Small Screens) */}
          <button
            className="fixed right-[20px] top-[20px] md:hidden text-white text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

          {/* Nav bar - Hidden on Small Screens, Shown on Large Screens */}
          <div className="hidden md:flex w-fit h-fit items-center gap-4">
            <Button text="About Us" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}/>
            <Button text="Our Services" onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}/>
            <Button text="Contact Us" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}/>
          </div>
        </div>

        {/* Sliding Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-2/3 bg-[#1a1c2c] shadow-lg p-6 flex flex-col gap-4 transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <button
            className="text-white text-2xl self-end"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>

          {/* Menu Items */}
          <Button text="About Us" onClick={() => {document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }); setIsOpen(false)}}/>
          <Button text="Our Services" onClick={() => {document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }); setIsOpen(false)}}/>
          <Button text="Contact Us" onClick={() => {document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); setIsOpen(false)}}/>
        </div>

        {/* Main */}
        <div className="px-4 flex mt-40 w-full sm:text-[20px] flex-col justify-center gap-20">
            <div className="flex flex-col text-center justify-center items-center gap-4 sm:px-[10vw]">
              <p className="font-bold text-2xl tracking-wide" >Grow Your Capital with Outlays Global Services</p>
              <p>At Outlays Global Services, we help investors build wealth through disciplined, data-driven trading strategies backed by years of real-market experience and consistent results.</p>
              <p>Linking You to a Brighter Tomorrow!</p>
              <Button text="Get Started" className="text-[#9B621D] px-5 mt-4"
                onClick={() => {
                  window.open(
                    "https://wa.me/447453679518?text=" + encodeURIComponent(
                      "Hello, I’m interested in learning more about Outlays Global Services and how I can grow my capital. Could you provide more details?"
                    ), 
                    "_blank"
                  );
                }} 
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-between items-center">
              <div id="about" className="flex flex-col gap-4 sm:w-[60%]">
                <p className="font-bold tracking-wide text-[#9B621D]" >About Outlays Global Services</p>
                <p>At Outlays Global Services, we’re more than just a trading brand—we’re a story of resilience, growth, and unwavering commitment to financial empowerment.</p>
                <p>Founded by Peter, a seasoned trader with over 6 years of experience in the forex and crypto space, Outlays was born out of real-life wins, losses, and lessons. After a tough setback in 2018, Peter rebuilt his trading approach with a focus on discipline, risk management, and long-term value creation.</p>
                <p>Today, Outlays Global Services stands as a trusted bridge between smart investors and sustainable growth opportunities.</p>
                <p>We’re not about hype. We’re about structure, transparency, and real results.</p>
              </div>
              <div
                className="relative pt-20 w-[250px] sm:w-[300px] h-[250px] sm:h-[280px] bg-cover bg-center flex items-center justify-center text-white font-bold text-lg"
                style={{ backgroundImage: `url(${chart})` }}
              >
                {/* <span className="font-semibold text-center">90% <br/> Rating</span> */}
              </div>
            </div>

            <div className="flex flex-col gap-6 items-center">
              <div id="services" className="flex flex-col gap-4">
                <p className="font-bold tracking-wide text-[#9B621D]" >How it Works</p>
                <div className="flex flex-col gap-[4%] sm:flex-row">
                  {/* first column */}
                  <div className="flex flex-col gap-4 sm:w-[48%]">
                    <div>
                      <p>1. Capital Is Pooled & Managed:</p>
                      <p>Investor funds are carefully managed in a dedicated trading account operated by Peter, an experienced trader who uses a data-driven approach in the forex and crypto markets.</p>
                    </div>
                    <div>
                      <p>2. Trading With Strategy & Discipline:</p>
                      <p>Each trade is backed by technical and market analysis, not guesswork. Our focus is on preserving capital while generating sustainable returns.</p>
                    </div>
                    <div>
                      <p>3. Risk Is Controlled:</p>
                      <p>We use strict risk management techniques to limit exposure and protect investor capital. No aggressive gambling or high-risk bets.</p>
                    </div>
                  </div>
                  {/* second column */}
                  <div className="mt-4 sm:mt-0 flex flex-col gap-4 sm:w-[48%]">
                    <div>
                      <p>4. Profit Sharing Options:</p>
                      <p>Investors can choose from flexible payout plans based on their preferences: <br/>Quarterly <br/>Half-Yearly <br/>Yearly </p>
                    </div>
                    <div>
                      <p>5. Transparent Reporting:</p>
                      <p>You’ll receive updates on trading activity and performance, so you’re never in the dark about what’s happening with your funds.</p>
                    </div>
                    <div>
                      <p>6. Flexibility Payout Mode:</p>
                      <p>Caters to providing swift payment with fast delivery.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row justify-between gap-6 items-center">
                <div className="flex flex-col sm:w-[50%]  gap-4">
                  <p className="font-bold tracking-wide text-[#9B621D]" >Proof of Results</p>
                  <p>We believe results should speak for themselves.</p>
                  <p>Here’s a recent snapshot from one of our trading sessions—executed within just 2 hours, maintaining a 75% win rate across over 200 trades. This consistency didn’t happen overnight. It’s the result of years of refining a method that balances opportunity with risk.</p>
                </div>
                <img src={profitableTrades} alt="trades" className="w-[150px] sm:w-[200px]"/>
              </div>
              <p className="mt-4">At Outlays Global Services, our focus isn't just on profit—but on building a repeatable system that prioritizes long-term stability over quick gains.</p>
            </div>

            <div className="flex flex-col gap-6 items-center">
              <div className="flex flex-col gap-4">
                <p className="font-bold tracking-wide text-[#9B621D]" >Why Partner with Us?</p>
                <p>Here’s why investors choose Outlays Global Services:</p>
                <div className="flex flex-col gap-[4%] sm:flex-row">
                  {/* first column */}
                  <div className="flex flex-col gap-4 sm:w-[48%]">
                    <div>
                      <p>1. Real-World Experience:</p>
                      <p>Over 6 years of hands-on trading in volatile markets. We’ve seen the highs, the lows, and everything in between and we’re still standing.</p>
                    </div>
                    <div>
                      <p>2. Disciplined, Strategy-Driven Approach:</p>
                      <p>No gambling. No hype. Every trade is executed based on proven systems, risk control, and technical precision.</p>
                    </div>
                    <div>
                      <p>3. Transparent and Ethical:</p>
                      <p>We believe in building investor trust through open communication, regular updates, and a clear understanding of how your capital is being managed.</p>
                    </div>
                  </div>
                  {/* second column */}
                  <div className="mt-4 sm:mt-0 flex flex-col gap-4 sm:w-[48%]">
                    <div>
                      <p>4. Timely Communication:</p>
                      <p>We prioritize keeping you informed whether it's a performance update or responding to your questions. You're never left guessing.</p>
                    </div>
                    <div>
                      <p>5. Flexible Payout Models:</p>
                      <p>You’re in control choose the payout plan that fits your financial goals: Quarterly, Half-Yearly, or Yearly.</p>
                    </div>
                    <div>
                      <p>6. Long-Term Vision:</p>
                      <p>We’re not here for quick wins. We’re building a sustainable, investor-friendly ecosystem that supports your financial growth over time.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col text-center justify-center  gap-4 sm:px-[10vw]">
              <p className="font-bold text-2xl tracking-wide" >Let’s Talk About Your Financial Goals.</p>
              <p className="text-left">Whether you're looking to grow your capital, diversify your income streams, or simply understand how strategic trading works Outlays Global Services is here to guide you.</p>
              <p className="text-left">We’re building a community of informed, empowered investors who value trust, discipline, and long-term growth.</p>
              <p className="text-left font-bold">Ready to connect?</p>
              <p className="text-left">Tap the button below to start a conversation directly with Peter.</p>
              <div id="contact" className="flex justify-center w-full">
                <Button text="Contact Us" className="text-[#9B621D] px-5 mt-4" 
                  onClick={() => {
                    window.open(
                      "https://wa.me/447453679518?text=" + encodeURIComponent(
                        "Hello, I’m interested in learning more about Outlays Global Services and how I can grow my capital. Could you provide more details?"
                      ), 
                      "_blank"
                    );
                  }} 
                />
              </div>
            </div>

            <div className="p-6 rounded-lg flex justify-center gap-4 flex-col bg-[#0F26374A]">
              <p className="font-bold text-2xl tracking-wide text-center" >This is only our Official mail and <br/> WhatsApp Number</p>
              <p>➜ <span className="px-4 sm:px-6 font-bold">WhatsApp:</span> +447453679518</p>
              <p>➜ <span className="px-4 sm:px-6 font-bold">Email:</span> outlaysgroup@gmail.com</p>
            </div>

            <div className="w-full flex font-bold justify-center"><p className="tracking-wide mt-4">Linking You to a Brighter Tomorrow!</p></div>

            <div className="w-full flex justify-center"><p className="tracking-wide text-center mt-12 mb-4">© 2025 Outlays Global Services. All Rights Reserved. </p></div>

        </div>
      </div>
    </SnackbarProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
