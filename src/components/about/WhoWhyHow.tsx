import Image from 'next/image';

export default function WhoWhyHow() {
  return (
    <div className=" py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-32">

        {/* Who Section */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="relative flex-shrink-0">
            {/* Decorative Circle */}
            <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full border-8 border-teal-600 z-0"></div>

            {/* Image Container */}
            <div className="relative z-10 w-72 h-80 rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/about/image1.png"
                alt="Child with backpack"
                width={400}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 max-w-xl">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Who?</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              RaffleRise.ie, which was founded in 2011 by Galway father and son Paddy and Alan Coyne, is now Ireland&apos;s top fundraising platform. Since then, it has raised over €125 million for more than 6,000 causes.
            </p>
          </div>
        </div>

        {/* Why Section */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="relative flex-shrink-0">
            {/* Decorative Circle */}
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full border-8 border-yellow-500 z-0"></div>

            {/* Image Container */}
            <div className="relative z-10 w-72 h-80 rounded-full overflow-hidden shadow-xl">
              <Image
                src="/images/about/image2.png"
                alt="Children studying together"
                width={400}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 max-w-xl text-right md:text-right">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Why?</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We aim to empower fundraisers and donors to change lives and make a positive impact with just the touch of a button. Additionally, we strive to Make Giving Easier through technological innovation
            </p>
          </div>
        </div>

        {/* How Section */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="relative flex-shrink-0">
            {/* Decorative Circle */}
            <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full border-8 border-purple-500 z-0"></div>

            {/* Image Container - Diamond Shape */}
            <div className="relative z-10 w-80 h-80">
              <div className="w-full h-full rotate-45 overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src="/images/about/image3.png"
                  alt="Children celebrating birthday"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover -rotate-45 scale-150"
                />
              </div>
            </div>
          </div>

          <div className="flex-1 max-w-xl sm:pl-10 pl-0">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">How?</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              RaffleRise.ie delivers practical, innovative tools for both charities and fundraisers and make the process as seamless and transparent as possible while providing best in class, local support.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}