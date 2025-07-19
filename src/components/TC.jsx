
const TermsAndConditions = () => (
  <div className="min-h-screen bg-[#0a0e1a] text-white font-sans">
  <div className="max-w-5xl mx-auto px-6 py-12">
    <h1 className="text-4xl font-semibold text-blue-400 mb-8 border-b border-blue-500 pb-2">
      Terms and Conditions
    </h1>

    <section className="space-y-6 text-gray-300 text-base leading-relaxed">
      <p>
        Welcome to Gitmate. By accessing our platform, you agree to the following terms:
      </p>

      <ol className="list-decimal ml-6 space-y-2">
        <li>
          <strong className="text-blue-300">Eligibility:</strong> You must be 13 years or older to use Gitmate.
        </li>
        <li>
          <strong className="text-blue-300">Use of Services:</strong> You agree to use Gitmate only for lawful, constructive purposes in line with our mission.
        </li>
        <li>
          <strong className="text-blue-300">Account Suspension:</strong> We reserve the right to suspend accounts that engage in spam, harassment, or unauthorized behavior.
        </li>
        <li>
          <strong className="text-blue-300">Premium Features:</strong> Access to premium features is subject to payment and our refund policy.
        </li>
        <li>
          <strong className="text-blue-300">Intellectual Property:</strong> You retain ownership of your content but grant Gitmate a license to display it as part of the platform.
        </li>
      </ol>

      <p>
        For questions, contact <a
          href="mailto:support@gitmate.in"
          className="text-blue-400 underline hover:text-blue-300"
        >support@gitmate.in</a>
      </p>
    </section>
  </div>
</div>
);

export default TermsAndConditions;




