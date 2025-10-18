
const MyRafflesTable = () => {
  const raffles = [
    {
      id: 1,
      name: 'Charity Gala Raffle',
      date: '12 Sep 2025',
      sold: 18,
      amount: '$380'
    },
    {
      id: 2,
      name: 'Charity Gala Raffle',
      date: '12 Sep 2025',
      sold: 18,
      amount: '$380'
    },
    {
      id: 3,
      name: 'Charity Gala Raffle',
      date: '12 Sep 2025',
      sold: 18,
      amount: '$380'
    },
    {
      id: 4,
      name: 'Charity Gala Raffle',
      date: '12 Sep 2025',
      sold: 18,
      amount: '$380'
    },
    {
      id: 5,
      name: 'Charity Gala Raffle',
      date: '12 Sep 2025',
      sold: 18,
      amount: '$380'
    }
  ];

  return (
    <div className="w-full mx-auto bg-white rounded-2xl shadow py-6">
      <h1 className="text-3xl font-semibold mb-6 text-gray-900 px-6">My Raffles</h1>

      <div className="bg-[#F0F7F6] rounded-lg border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-[#F0F7F6]">
              <th className="text-left font-medium text-gray-600 text-base py-4 px-6">
                Raffle Name
              </th>
              <th className="text-left font-medium text-gray-600 text-base py-4 px-6">
                Date
              </th>
              <th className="text-left font-medium text-gray-600 text-base py-4 px-6">
                Sold
              </th>
              <th className="text-left font-medium text-gray-600 text-base py-4 px-6">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {raffles.map((raffle, index) => (
              <tr
                key={raffle.id}
                className={`bg-white hover:bg-gray-50 ${index !== raffles.length - 1 ? 'border-b border-gray-200' : ''
                  }`}
              >
                <td className="font-normal text-gray-900 py-6 px-6">
                  {raffle.name}
                </td>
                <td className="font-normal text-gray-900 py-6 px-6">
                  {raffle.date}
                </td>
                <td className="font-normal text-gray-900 py-6 px-6">
                  {raffle.sold}
                </td>
                <td className="font-normal text-gray-900 py-6 px-6">
                  {raffle.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyRafflesTable;