"use client";
import { Card } from "@/components/ui/card";
import {
  Area,
  CartesianGrid,
  AreaChart as RechartsAreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { Button } from '../../../ui/button';

function AreaChart() {
  const [open, setOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear()
  );

  // More dynamic and fluctuating data to show ups and downs clearly
  const chartData = [
    {
      month: "Jan",
      users: 3200,
      activeUsers: 1800,
      questionsAnswered: 1250,
      lessonsCompleted: 980,
    },
    {
      month: "Feb",
      users: 2800,
      activeUsers: 1500,
      questionsAnswered: 980,
      lessonsCompleted: 720,
    },
    {
      month: "Mar",
      users: 4200,
      activeUsers: 2500,
      questionsAnswered: 1800,
      lessonsCompleted: 1200,
    },
    {
      month: "Apr",
      users: 3800,
      activeUsers: 2200,
      questionsAnswered: 1500,
      lessonsCompleted: 1050,
    },
    {
      month: "May",
      users: 5200,
      activeUsers: 3200,
      questionsAnswered: 2400,
      lessonsCompleted: 1800,
    },
    {
      month: "Jun",
      users: 4500,
      activeUsers: 2800,
      questionsAnswered: 1900,
      lessonsCompleted: 1400,
    },
    {
      month: "Jul",
      users: 5800,
      activeUsers: 3800,
      questionsAnswered: 2800,
      lessonsCompleted: 2100,
    },
    {
      month: "Aug",
      users: 4800,
      activeUsers: 3000,
      questionsAnswered: 2200,
      lessonsCompleted: 1600,
    },
    {
      month: "Sep",
      users: 6200,
      activeUsers: 4200,
      questionsAnswered: 3200,
      lessonsCompleted: 2400,
    },
    {
      month: "Oct",
      users: 5500,
      activeUsers: 3500,
      questionsAnswered: 2600,
      lessonsCompleted: 1900,
    },
    {
      month: "Nov",
      users: 6800,
      activeUsers: 4800,
      questionsAnswered: 3800,
      lessonsCompleted: 2800,
    },
    {
      month: "Dec",
      users: 7200,
      activeUsers: 5200,
      questionsAnswered: 4200,
      lessonsCompleted: 3200,
    },
  ];

  return (
    <Card className="p-0 h-full overflow-x-clip">
      <div className="flex items-center justify-between px-6 mt-5 relative">
        <h1 className="text-2xl font-semibold">User Engagements</h1>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="year"
              className="w-32 justify-between font-normal"
            >
              {selectedYear}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-3" align="start">
            <div className="grid grid-cols-4 gap-2 max-h-48 overflow-y-auto">
              {Array.from({ length: 10 }, (_, i) => {
                const year = new Date().getFullYear() - 5 + i;
                return (
                  <Button
                    key={year}
                    variant={selectedYear === year ? "default" : "ghost"}
                    size="sm"
                    onClick={() => {
                      setSelectedYear(year);
                      setOpen(false);
                    }}
                    className="w-full"
                  >
                    {year}
                  </Button>
                );
              })}
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="w-full h-full py-1">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsAreaChart
            data={chartData}
            margin={{ top: 20, right: 2, left: 0, bottom: 20 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00705d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#00705d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              strokeWidth={0.6}
              vertical={true}
              stroke="gray"
              fillOpacity={0.2}
            />
            <XAxis dataKey="month" style={{ fontSize: "14px" }} />
            <YAxis style={{ fontSize: "14px" }} />
            <Tooltip
              content={<CustomTooltip active={true} payload={[]} label={""} />}
              isAnimationActive={true}
              cursor={false}
            />
            <Area
              type="monotone"
              dataKey="users"
              stroke="#00705d"
              fill="url(#colorUv)"
              fillOpacity={0.3}
              strokeWidth={0.5}
              isAnimationActive={true}
            />
          </RechartsAreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

export default AreaChart;

const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active: boolean;
  payload: Array<{
    value: number;
    payload: {
      month: string;
      users: number;
      activeUsers: number;
      questionsAnswered: number;
      lessonsCompleted: number;
    };
  }>;
  label: string;
}) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="relative flex flex-col gap-2 p-4 bg-white border border-gray-200 rounded-lg shadow-lg text-sm min-w-[200px]">
        <div className="font-semibold text-gray-800 mb-2 text-center">
          Month: {label}
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ backgroundColor: "#00705d" }}
              ></span>
              <span className="text-gray-700">Total Users:</span>
            </div>
            <span className="font-medium text-gray-900">{data.users}</span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ backgroundColor: "#10b981" }}
              ></span>
              <span className="text-gray-700">Active Users:</span>
            </div>
            <span className="font-medium text-gray-900">
              {data.activeUsers}
            </span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ backgroundColor: "#f59e0b" }}
              ></span>
              <span className="text-gray-700">Questions:</span>
            </div>
            <span className="font-medium text-gray-900">
              {data.questionsAnswered}
            </span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ backgroundColor: "#8b5cf6" }}
              ></span>
              <span className="text-gray-700">Lessons:</span>
            </div>
            <span className="font-medium text-gray-900">
              {data.lessonsCompleted}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return null;
};