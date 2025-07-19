
const CancellationRefundPolicy = () => (
    <div className="min-h-screen bg-[#0a0e1a] text-white font-sans">
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-semibold text-blue-400 mb-8 border-b border-blue-500 pb-2">
        Cancellation and Refund Policy
      </h1>

      <section className="space-y-6 text-gray-300 text-base leading-relaxed">
        <p>
          Gitmate offers digital subscriptions and services. Our refund terms are:
        </p>

        <ul className="list-disc list-inside ml-4 space-y-2">
          <li><strong className="text-blue-300">Subscriptions:</strong> Users may cancel subscriptions anytime. However, refunds are only issued if cancellation is made within 7 days of initial purchase.</li>
          <li><strong className="text-blue-300">Digital Goods:</strong> Refunds for paid workshops, webinars, or reviews will be granted only if the request is made at least 24 hours before the event.</li>
          <li><strong className="text-blue-300">No refunds</strong> will be issued for missed or partially used services.</li>
        </ul>

        <p>
          For refund assistance, email: <a
            href="mailto:billing@gitmate.in"
            className="text-blue-400 underline hover:text-blue-300"
          >billing@gitmate.in</a>
        </p>
      </section>
    </div>
  </div>
  );
  
  export default CancellationRefundPolicy;