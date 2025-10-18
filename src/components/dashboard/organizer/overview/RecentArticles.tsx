import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CgLoadbarDoc } from "react-icons/cg";
import { LuCalendar } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbFileSearch } from "react-icons/tb";

// Define the type for an article
interface Article {
  id: number;
  title: string;
  description: string;
  date: string;
}

// Update the prop type to use the Article interface
function RecentArticles({ recentArticles }: { recentArticles: Article[] }) {
  console.log(recentArticles.length)
  return (
    <Card className={`h-full ${recentArticles.length >3 ? "overflow-y-scroll" : "overflow-y-hidden"} `}>
      <CardHeader className="flex sm:flex-row sm:items-center justify-between gap-2">
        <CardTitle className="flex items-center gap-2">
          <TbFileSearch size={20} />
          List Notification
        </CardTitle>
        <CardAction>
          <p className="font-semibold underline text-sky-500 cursor-pointer text-sm">
            View All
          </p>
        </CardAction>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentArticles.map((article) => (
          <div
            key={article.id} // Use article.id instead of index for better performance
            className="flex flex-col md:flex-row md:items-center gap-4 justify-between bg-gray-100 rounded-lg p-3 border"
          >
            {/* Icon */}
            <div className="bg-violet-500/10 text-violet-500 rounded-lg p-2 self-start md:self-center hidden md:block">
              <CgLoadbarDoc size={30} />
            </div>

            {/* Text */}
            <div className="flex items-start flex-1 gap-1">
              <div className="bg-violet-500/10 text-violet-500 rounded-lg p-2 self-start md:self-center block md:hidden">
                <CgLoadbarDoc size={30} />
              </div>
              <div className="flex flex-col items-end md:items-start flex-1 gap-1">
                <h3 className="text-base sm:text-lg font-semibold">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {article.description}
                </p>
                <div className="flex sm:items-center gap-2 sm:gap-4">
                  <p className="text-sm text-gray-500 flex items-center gap-2">
                    <LuCalendar size={15} />
                    {article.date}
                  </p>
                </div>
              </div>
            </div>
            {/* Buttons */}
            <div className="flex flex-row items-stretch md:items-end gap-2 w-full md:w-auto">
              <Button className="w-full">
                <RiDeleteBin6Line size={20} /> {/* Reduced size for better proportion */}
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default RecentArticles;