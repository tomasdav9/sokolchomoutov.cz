export function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <img src="/assets/logo.jpg" alt="Znak TJ Sokol Chomoutov" />
            <div>
              <strong>Sokol Chomoutov</strong>
              <span>Tělovýchovná jednota Sokol Olomouc - Chomoutov, z.s.</span>
            </div>
          </div>
          <div className="foot-social">
            <a
              href="https://www.facebook.com/TJSCHfotbal/"
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0022 12z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/tj_sokol_chomoutov/"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.3-.1 1.7-.1 4.9-.1zm0 3.5a6.3 6.3 0 100 12.6 6.3 6.3 0 000-12.6zm0 10.4a4.1 4.1 0 110-8.2 4.1 4.1 0 010 8.2zm6.5-10.6a1.5 1.5 0 11-2.9 0 1.5 1.5 0 012.9 0z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Tělovýchovná jednota Sokol Olomouc - Chomoutov, z.s.</span>
          <span>Horecká, Olomouc - Chomoutov, 783 35</span>
        </div>
      </div>
    </footer>
  );
}
