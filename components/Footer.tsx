export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              Omriq Hospitality AI
            </div>
            <p className="text-sm text-gray-400">
              The AI Operating System That Runs Hotels.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#product" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#solution" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#demo" className="hover:text-white transition-colors">
                  Demo
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#problem" className="hover:text-white transition-colors">
                  The Problem
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#vision" className="hover:text-white transition-colors">
                  Vision
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#investor-meeting"
                  className="hover:text-white transition-colors"
                >
                  Book Meeting
                </a>
              </li>
              <li className="text-gray-400">hello@omriq.ai</li>
              <li className="text-gray-400">San Francisco, CA</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Omriq Hospitality AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

