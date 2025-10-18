import { Card } from '@/components/ui/card';

export default function StatsSection() {
  const stats = [
    {
      label: 'Total Lifetime',
      value: '€ 125 +',
      subtitle: 'Million raised',
      color: 'text-teal-600'
    },
    {
      label: 'Crowdfunder',
      value: '€ 4.5 +',
      subtitle: 'Million raised',
      color: 'text-teal-600'
    },
    {
      label: 'Charities',
      value: '6 K+',
      subtitle: 'Registered',
      color: 'text-teal-600'
    },
    {
      label: 'Fundraising',
      value: '180 K+',
      subtitle: 'Pages Created',
      color: 'text-teal-600'
    },
    {
      label: 'Donations',
      value: '3.3 +',
      subtitle: 'Million Made',
      color: 'text-teal-600'
    }
  ];

  return (
    <div className="py-28 px-6">
      <div className="container mx-auto">

        {/* Header Card */}
        <div className='max-w-6xl mx-auto'>
          <Card className="bg-[#00715D] text-white p-28 rounded-3xl shadow-lg mb-12">
            <div className="text-center">
              <p className="text-sm font-medium mb-3 opacity-90">Let&apos;s look at the stats</p>
              <h2 className="text-4xl md:text-5xl font-bold">
                Since 2011, and counting...
              </h2>
            </div>
          </Card>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-center space-y-3">
                <p className={`text-sm font-semibold ${stat.color} uppercase tracking-wide`}>
                  {stat.label}
                </p>
                <p className="text-4xl font-bold text-gray-900">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500">
                  {stat.subtitle}
                </p>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </div>
  );
}