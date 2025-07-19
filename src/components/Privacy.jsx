import React from "react";


const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white font-sans">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl  font-semibold text-blue-400 mb-8 border-b border-blue-500 pb-2">
          Privacy Policy
        </h1>

        <section className="space-y-6 text-gray-300 text-base leading-relaxed">
          <p>
            At <a target="_blank" href= "https://gitmate.in" ><span className="text-blue-300 font-medium">GitMate</span></a>, your privacy is our priority. This policy outlines how we handle your data across our platform and services.
          </p>

          <div>
            <h2 className="text-2xl text-blue-300 font-semibold mb-2">Information We Collect</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Personal identifiers such as name and email address</li>
              <li>Profile data, connection preferences, and user settings</li>
              <li>Analytics data including log files, browser type, and access times</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl text-blue-300 font-semibold mb-2">How We Use Your Data</h2>
            <p>
              Your information helps us improve your experience, personalize suggestions, and enable secure interactions between users.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-blue-300 font-semibold mb-2">Email Communication</h2>
            <p>
              We send periodic notifications, including connection alerts, from <a target="_blank" href = "mailto:sbssreekar@gitmate.in" ><span className="text-blue-400">sbssreekar@gitmate.in</span></a>. These are essential for your GitMate activity and can be unsubscribed if the user wishes to do so.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-blue-300 font-semibold mb-2">Third-Party Access</h2>
            <p>
              We do not sell or rent your personal data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-blue-300 font-semibold mb-2">Your Rights</h2>
            <p>
              You may request access, update, or deletion of your personal data by contacting our support team at <span className="text-blue-400">support@gitmate.in</span>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-blue-300 font-semibold mb-2">Policy Updates</h2>
            <p>
              This privacy policy may be updated from time to time. All changes will be reflected on this page and are effective immediately upon posting.
            </p>
          </div>
        </section>
      </div>

      
    </div>
  );
};

export default PrivacyPolicy;



