"use client";
import AreaChart from '../../../../components/dashboard/organizer/overview/AreaChart';
import MyRafflesTable from '../../../../components/dashboard/organizer/overview/MyRafflesTable';
import RecentArticles from '../../../../components/dashboard/organizer/overview/RecentArticles';
import { Stats } from '../../../../components/dashboard/organizer/overview/Stats';
import { Skeleton } from '../../../../components/ui/skeleton';

// Use the same StatProps type that the Stats component expects
// Based on the error, Stats component expects value to be string only
type StatProps = {
  title: string;
  value: string;
};

function AnalyticsLayout() {
  const stats: StatProps[] = [
    {
      title: "Active Raffles",
      value: "3", // Converted to string
    },
    {
      title: "Total Raised",
      value: "12,500",
    },
    {
      title: "Tickets Sold",
      value: "2,345",
    },
    {
      title: "Upcoming Draws",
      value: "2",
    },
  ];

  return (
    <div className="space-y-4 min-w-0">
      {false ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((_, i) => (
            <div key={i} className="w-full">
              <div className="p-6 border rounded-lg bg-white">
                <div className="text-center space-y-2 h-28">
                  <Skeleton className="h-4 w-24 mx-auto bg-gray-200" />
                  <Skeleton className="h-8 w-16 mx-auto bg-gray-200" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Stats stats={stats} />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="h-[450px] min-w-0 ">
          <AreaChart />
        </div>
        <div className="h-[450px] min-w-0">

          <RecentArticles
            recentArticles={[
              {
                id: 1,
                title: "Article 1",
                description: "Description 1",
                date: "2021-01-01",
              },
              {
                id: 2,
                title: "Article 1",
                description: "Description 1",
                date: "2021-01-01",
              },
              {
                id: 3,
                title: "Article 1",
                description: "Description 1",
                date: "2021-01-01",
              }
            ]}
          />
        </div>
      </div>

      <div className="">

        {/* <TopPerforming /> */}

        <MyRafflesTable />
      </div>
    </div>
  );
}

export default AnalyticsLayout;