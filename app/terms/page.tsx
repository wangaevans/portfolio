export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Terms of Service
        </h1>

        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Agreement to Terms</h2>
            <p>
              By accessing this website, you agree to be bound by these Terms of Service
              and comply with all applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and code,
              is the property of Evans Wanga and is protected by intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">User Conduct</h2>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Use the website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to any portion of the website</li>
              <li>Modify, adapt, or hack the website</li>
              <li>Collect users&apos; information without consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Disclaimer</h2>
            <p>
              This website is provided &quot;as is&quot; without any warranties, express or implied.
              We do not guarantee the accuracy or completeness of any information on the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Limitation of Liability</h2>
            <p>
              We shall not be liable for any damages arising from the use or inability
              to use the materials on this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Last updated: {new Date().toLocaleDateString()}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Contact</h2>
            <p>
              For any questions regarding these terms, please contact{' '}
              <a href="mailto:contact@evanswanga.dev" className="text-blue-400 hover:text-blue-300">
                contact@evanswanga.dev
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
