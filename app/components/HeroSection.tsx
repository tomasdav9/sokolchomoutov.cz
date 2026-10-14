export function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <img
          src="https://989465e506.cbaul-cdnwnd.com/c75b673237e14cef3d0c32cf6a6fa108/200000001-305c231564/10650000_10152776998795962_6764601930849683485_n.jpg?ph=989465e506"
          alt="Tým TJ Sokol Chomoutov"
        />
      </div>
      <div className="hero-inner wrap">
        <img className="hero-logo" src="/assets/logo.jpg" alt="Znak klubu" width={120} height={120} />
        <h1>
          <span className="hero-pre">TJ Sokol</span>
          Chomoutov
        </h1>
        <p className="hero-sub">Fotbalový klub Olomouc - Chomoutov</p>
      </div>
    </section>
  );
}
