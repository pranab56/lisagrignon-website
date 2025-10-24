export default function WhyChoose() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="min-h-[45vh] bg-[#00715D] flex items-center justify-center text-white px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block bg-gray-900 px-4 py-2 rounded-md text-sm mb-6">
            <span className="hover:underline cursor-pointer">Home</span>
            <span className="mx-2">/</span>
            <span className="hover:underline cursor-pointer">Terms &amp; Conditions</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Why Choose RaffleandGive</h1>
          <p className="text-lg md:text-xl">
            Raising funds for your cause has never been easier, faster, or more rewarding!
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* No Registration Fees */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            No Registration Fees:
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We believe fundraising should be accessible to everyone. That&apos;s why we charge no registration or setup fees—you can start raising money for your cause completely free of charge.
          </p>
        </div>

        {/* Simple Fundraising for Your Cause */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Simple Fundraising for Your Cause:
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Whether you&apos;re a charity, community interest company (CIC), or an individual raising funds for a worthy cause, our platform makes it quick, easy, and hassle-free to launch a raffle and start collecting donations.
          </p>
        </div>

        {/* Win Great Prizes While Supporting Good Causes */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Win Great Prizes While Supporting Good Causes:
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Participants have the chance to win amazing prizes while contributing to causes that truly make a difference. Every ticket sold helps support positive change in your community and beyond.
          </p>
        </div>

        {/* Secure and Trusted Payments */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Secure and Trusted Payments:
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            All transactions are processed through trusted, industry-standard payment providers. Your donations and ticket purchases are safe, encrypted, and protected at every step.
          </p>
        </div>
      </div>
    </div>
  );
}