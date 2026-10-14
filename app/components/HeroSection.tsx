import { HeroMatches } from "./HeroMatches";

export function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <img
          src="https://989465e506.cbaul-cdnwnd.com/c75b673237e14cef3d0c32cf6a6fa108/200000001-305c231564/10650000_10152776998795962_6764601930849683485_n.jpg?ph=989465e506"
          alt="Tým TJ Sokol Chomoutov"
        />
      </div>
      <div className="hero-inner">
        <div className="wrap">
          <div className="badgeline">
            <img src="/assets/logo.jpg" alt="Znak klubu" />
            <span className="est">
              Fotbalový klub<strong>Olomouc - Chomoutov</strong>
            </span>
          </div>
          <h1>
            TJ Sokol
            <br />
            <span className="o">Chomoutov</span>
          </h1>
          <HeroMatches />
        </div>
      </div>
    </section>
  );
}
