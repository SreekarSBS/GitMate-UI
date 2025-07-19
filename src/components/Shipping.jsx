const ShippingDeliveryPolicy = () => (
    <div className="min-h-screen bg-[#0a0e1a] text-white font-sans">
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-semibold text-blue-400 mb-8 border-b border-blue-500 pb-2">
        Shipping and Delivery Policy
      </h1>

      <section className="space-y-6 text-gray-300 text-base leading-relaxed">
        <p>
          Gitmate does not ship any physical products. All our offerings, including mentorship, premium features, and event access, are delivered digitally via the website or email.
        </p>

        <p>
          Delivery is usually instantaneous. In some cases (e.g., scheduled webinars), digital access will be granted within 24 hours.
        </p>

        <p>
          For access issues, email: <a
            href="mailto:delivery@gitmate.in"
            className="text-blue-400 underline hover:text-blue-300"
          >delivery@gitmate.in</a>
        </p>
      </section>
    </div>
  </div>
  );
  
  export default ShippingDeliveryPolicy;