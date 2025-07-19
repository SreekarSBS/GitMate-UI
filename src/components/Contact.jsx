
const ContactUs = () => (
    <div className="min-h-screen bg-[#0a0e1a] text-white font-sans">
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-semibold text-blue-400 mb-8 border-b border-blue-500 pb-2">
        Contact Us
      </h1>

      <section className="space-y-6 text-gray-300 text-base leading-relaxed">
        <p>
          If you have any questions or need support, you can reach us at:
        </p>

        <ul className="list-none space-y-2">
          <li>
            <strong className="text-blue-300">Email:</strong> <a
              href="mailto:support@gitmate.in"
              className="text-blue-400 underline hover:text-blue-300"
            >support@gitmate.in</a>
          </li>
        </ul>
      </section>
    </div>
  </div>
  );
  
  export default ContactUs;