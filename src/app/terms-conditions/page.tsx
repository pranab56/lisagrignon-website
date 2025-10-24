import { Card, CardContent } from '@/components/ui/card';

export default function TermsAndConditions() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms &amp; Conditions</h1>
          <p className="text-lg md:text-xl">
            Last Updated:12/10/2025
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <Card className="border-none shadow-sm">
          <CardContent className="p-8 space-y-8">
            {/* Welcome Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to RaffleandGive:</h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to RaffleandGive (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;). By using our platform, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully before using our services.
              </p>
            </section>

            {/* Acceptance of Terms */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms:</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing or using RaffleandGive, you agree to these Terms and Conditions and our Privacy Policy. If you do not agree, please do not use the site.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>The website allows users to donate to and raise funds for various causes.</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>Each listed cause has an official agreement with RaffleandGive to collect donations.</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>RaffleandGive is not responsible for the activities or management of any listed cause.</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>Charities must have valid licenses and authorization according to their local laws.</span>
                </li>
              </ul>
            </section>

            {/* Description of Service */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Description of Service:</h2>
              <ul className="space-y-3">
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>Individuals, organizations, or groups (called Campaign Creators) to raise funds for causes.</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>Users (called Donors) to support those campaigns by contributing financially.</span>
                </li>
              </ul>
            </section>

            {/* How to Enter the Raffle */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Enter the Raffle:</h2>
              <ul className="space-y-3">
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>Entry into the raffle is made by purchasing one or more tickets through the website.</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>Each ticket will have a unique identification number and will be entered into the draw after successful payment.</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>Tickets are non-transferable, non-refundable, and have no cash value beyond their use as valid raffle entries.</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>No entries will be accepted after the stated closing date and time.</span>
                </li>
              </ul>
            </section>

            {/* Eligibility Criteria */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Eligibility Criteria:</h2>
              <ul className="space-y-3">
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>You must be at least 18 years old to create an account or make a donation.</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>By using this platform, you confirm that you meet this age requirement.</span>
                </li>
              </ul>
            </section>

            {/* Account Creation and Security */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Account Creation and Security:</h2>
              <ul className="space-y-3">
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>To create or donate to campaigns, users may need to register an account.</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>You are responsible for maintaining the confidentiality of your login details.</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>You are also liable for any actions taken under your account.</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>RaffleandGive reserves the right to suspend or terminate accounts that violate these terms.</span>
                </li>
              </ul>
            </section>

            {/* Responsibilities of Campaign Creators */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsibilities of Campaign Creators:</h2>
              <ul className="space-y-3">
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>Campaign creators must provide accurate, complete, and truthful information about their campaigns.</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>Funds raised must be used only for the stated purpose of the campaign.</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>Any misuse of funds or fraudulent activity may lead to account suspension, refund requests, or legal action.</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>Campaign creators are responsible for tax reporting and legal obligations related to funds received.</span>
                </li>
              </ul>
            </section>

            {/* Platform & Transaction Fees */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Platform &amp; Transaction Fees:</h2>
              <ul className="space-y-3">
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>RaffleandGive may charge service or transaction fees to:</span>
                </li>
                <li className="flex gap-3 text-gray-700 ml-6">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>Campaign Creators</span>
                </li>
                <li className="flex gap-3 text-gray-700 ml-6">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>Raffle Organizers</span>
                </li>
                <li className="flex gap-3 text-gray-700 ml-6">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>Donors</span>
                </li>
              </ul>
            </section>

            {/* Ticket Pricing & Secure Payment */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ticket Pricing &amp; Secure Payment:</h2>
              <ul className="space-y-3">
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>The price of each raffle ticket is clearly stated on the website.</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>Payments must be made using approved methods shown at checkout (e.g., debit/credit cards, wallets).</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>All transactions are conducted in secure, encrypted processes — RaffleandGive does not store full card or payment provider details.</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>If prize becomes valid only after full payment is received and confirmed.</span>
                </li>
              </ul>
            </section>

            {/* Prize Rules and Conditions */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Prize Rules and Conditions:</h2>
              <ul className="space-y-3">
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>A description of each prize will be clearly listed on the website (e.g., cars, vouchers, or goods).</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>The Organizer reserves the right to substitute a prize of equal or higher value if needed (e.g., due to unavailability).</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>All items are presented as-is or new, where items already owned associated with identity or using the item.</span>
                </li>
              </ul>
            </section>

            {/* Winner Notification & Prize Claiming */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Winner Notification &amp; Prize Claiming:</h2>
              <ul className="space-y-3">
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>Winners will be notified by email and/or phone based on their entry details.</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>Prizes must be claimed within 30 days of notification; unclaimed prizes may be forfeited.</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>Winners may be required to provide proof of identity and age before receiving the prize.</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>By accepting the prize, winners agree to have their names publicized on the website or social media — unless they formally opt out.</span>
                </li>
              </ul>
            </section>

            {/* Secure Payment Handling */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Secure Payment Handling:</h2>
              <ul className="space-y-3">
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>All payments are handled by trusted third-party processors.</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>Upon ticket processing funds through RaffleandGive, users agree to the terms and policies of these processors.</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>RaffleandGive does not directly process or store sensitive payment details.</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>In the event of a payment issue, users should contact their bank, card issuer, or payment provider.</span>
                </li>
              </ul>
            </section>

            {/* Secure Transactions & Responsibility */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Secure Transactions &amp; Responsibility:</h2>
              <ul className="space-y-3">
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>All payments are securely processed through third-party payment gateways (e.g., Stripe).</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>By donating or receiving funds, you agree to comply with the terms and conditions of these third-party services.</span>
                </li>
              </ul>
            </section>

            {/* Actions Not Allowed on the Platform */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Actions Not Allowed on the Platform:</h2>
              <ul className="space-y-3">
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>Engaging in campaign fraud, misleading, or fraudulent campaigns.</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>Using the platform for illegal, harmful, or offensive purposes.</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>Attempting to circumvent fees, manipulate other platform financial activity.</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>Impersonating another person, organization, or entity.</span>
                </li>
              </ul>
            </section>

            {/* Ownership & Use of Platform Materials */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ownership &amp; Use of Platform Materials:</h2>
              <ul className="space-y-3">
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>All website content, including logo, text, graphics, trademarks, and software, belongs to RaffleandGive or its licensed partners.</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>These materials are protected under copyright and intellectual property laws.</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>Missby-licensing, tampering, tweaking, or other prohibited financial activity.</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>Use by is another person, organization, or entity.</span>
                </li>
              </ul>
            </section>

            {/* Platform Use & Accuracy Disclaimer */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Platform Use &amp; Accuracy Disclaimer:</h2>
              <ul className="space-y-3">
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>The RaffleandGive platform is provided on an &quot;as-is&quot; and &quot;as-available&quot; basis.</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>While we have complete list of campaign and prize information, campaign operation, and risk.</span>
                </li>
              </ul>
            </section>

            {/* Platform & Service Liability Limitations */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Platform &amp; Service Liability Limitations:</h2>
              <ul className="space-y-3">
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>RaffleandGive will not be responsible for:</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>Errors or omissions in campaign or user content.</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>The misuse of funds by campaign organizers.</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>Inability to use the platform or access services.</span>
                </li>
              </ul>
            </section>

            {/* Legal Jurisdiction & Account Safety */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Legal Jurisdiction &amp; Account Safety:</h2>
              <ul className="space-y-3">
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>These Terms shall be governed and construed in accordance with the laws of the user&apos;s country of use.</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>Users must protect their accounts by maintaining password confidentiality.</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold">●</span>
                  <span>Do not share personal information or claim to be different users somewhere else — this can result.</span>
                </li>
              </ul>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}