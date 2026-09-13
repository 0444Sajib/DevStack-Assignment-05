const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              {/* Logo */}
              <div className="flex h-4 w-4 items-center justify-center rounded bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-[8px] font-bold text-white">
                DS
              </div>

              <h2 className="text-sm font-semibold text-gray-900">
                Dev <span className="text-pink-600">Stack</span>
              </h2>
            </div>

            <p className="mt-3 max-w-xs text-[10px] leading-4 text-gray-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social Links */}
            <div className="mt-4 flex gap-4 text-[10px] text-gray-600">
              <a
                href="https://github.com/0444Sajib"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-pink-600"
              >
                GitHub
              </a>

              <a
                href="#"
                className="transition hover:text-pink-600"
              >
                Twitter
              </a>

              <a
                href="#"
                className="transition hover:text-pink-600"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-wide text-gray-900">
              Product
            </h3>

            <ul className="mt-3 space-y-2 text-[10px] text-gray-500">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-900">
                  Technologies
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-900">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-wide text-gray-900">
              Company
            </h3>

            <ul className="mt-3 space-y-2 text-[10px] text-gray-500">
              <li>
                <a href="#" className="hover:text-gray-900">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-900">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-900">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-wide text-gray-900">
              Legal
            </h3>

            <ul className="mt-3 space-y-2 text-[10px] text-gray-500">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-900">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-5 text-[10px] text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <a href="#" className="hover:text-gray-700">
            Privacy
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;