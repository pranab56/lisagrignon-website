import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="min-h-[45vh] bg-[#00715D] flex items-center justify-center text-white px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block bg-gray-900 px-4 py-2 rounded-md text-sm mb-6">
            <span className="hover:underline cursor-pointer">Home</span>
            <span className="mx-2">/</span>
            <span className="hover:underline cursor-pointer">Terms & Conditions</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How Win and Give Works</h1>
          <p className="text-lg md:text-xl">
            Learn how every ticket purchase supports a good cause and gives you a chance to win prizes!
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 - Buy a Ticket */}
          <Card className="bg-white shadow-sm border-0">
            <CardHeader>
              <div className="w-12 h-12 bg-teal-700 text-white rounded-lg flex items-center justify-center text-2xl font-bold mb-4">
                1
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">Buy a Ticket</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-teal-700 rounded-full"></div>
                </div>
                <p className="text-gray-700">Buyer selects a charity/cause from a dropdown.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-teal-700 rounded-full"></div>
                </div>
                <p className="text-gray-700">Buying a ticket automatically supports the chosen cause.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-teal-700 rounded-full"></div>
                </div>
                <p className="text-gray-700">Each ticket gives a chance to win a prize.</p>
              </div>
            </CardContent>
          </Card>

          {/* Card 2 - Money Distribution */}
          <Card className="bg-white shadow-sm border-0">
            <CardHeader>
              <div className="w-12 h-12 bg-teal-700 text-white rounded-lg flex items-center justify-center text-2xl font-bold mb-4">
                2
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">Money Distribution</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-teal-700 rounded-full"></div>
                </div>
                <p className="text-gray-700">
                  <strong>30% – Prize Fund:</strong> Funds the raffle prizes (cash, electronics, experiences). More tickets = bigger prize fund.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-teal-700 rounded-full"></div>
                </div>
                <p className="text-gray-700">
                  <strong>60% – Chosen Cause / Charity:</strong> Majority goes to the cause selected by the buyer. Ensures real impact.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-teal-700 rounded-full"></div>
                </div>
                <p className="text-gray-700">
                  <strong>10% – Win and Give Platform Fee:</strong> Covers platform costs: payment processing, hosting, marketing, security. Keeps Win and Give operational for future raffles.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Card 3 - Prize Draw */}
          <Card className="bg-white shadow-sm border-0">
            <CardHeader>
              <div className="w-12 h-12 bg-teal-700 text-white rounded-lg flex items-center justify-center text-2xl font-bold mb-4">
                3
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">Prize Draw</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-teal-700 rounded-full"></div>
                </div>
                <p className="text-gray-700">Random draw held once raffle ends.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-teal-700 rounded-full"></div>
                </div>
                <p className="text-gray-700">Winners announced publicly on the Winners Page.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-teal-700 rounded-full"></div>
                </div>
                <p className="text-gray-700">Winners notified by email.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-teal-700 rounded-full"></div>
                </div>
                <p className="text-gray-700">Prize comes from the 30% prize fund.</p>
              </div>
            </CardContent>
          </Card>

          {/* Card 4 - Funds Sent to Charity */}
          <Card className="bg-white shadow-sm border-0">
            <CardHeader>
              <div className="w-12 h-12 bg-teal-700 text-white rounded-lg flex items-center justify-center text-2xl font-bold mb-4">
                4
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">Funds Sent to Charity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-teal-700 rounded-full"></div>
                </div>
                <p className="text-gray-700">60% of total raised goes directly to the chosen charity or cause.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-teal-700 rounded-full"></div>
                </div>
                <p className="text-gray-700">Transparent report shows breakdown: prize fund, charity, platform fee.</p>
              </div>

              <div className="mt-6">
                <p className="font-semibold text-gray-900 mb-3">Example:</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-teal-700 rounded-full"></div>
                    </div>
                    <p className="text-gray-700">Raffle sells 1,000 tickets at $10 each → Total Sales = $10,000</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-teal-700 rounded-full"></div>
                    </div>
                    <p className="text-gray-700">$6,000 (60%) → Charity/Cause</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-teal-700 rounded-full"></div>
                    </div>
                    <p className="text-gray-700">$3,000 (30%) → Prize Fund</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-teal-700 rounded-full"></div>
                    </div>
                    <p className="text-gray-700">$1,000 (10%) → Platform Fee</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}