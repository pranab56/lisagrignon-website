import { Card, CardContent, CardHeader, CardTitle } from '../../../ui/card';
import { Progress } from '../../../ui/progress';

function TopPerforming() {
  return (
    <Card className="w-full h-full ">
      <CardHeader>
        <CardTitle className="space-y-2">
          <p className="text-sm text-gray-500">Top Performing Campaigns</p>
          <h1 className="text-2xl font-semibold">Campaign A</h1>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col  gap-4">
          <div className="flex items-center gap-6 border-b-1 border-b-gray-200 pb-4">
            <p className="text-base font-semibold text-gray-500">Campaign A</p>
            <Progress value={50} className="w-1/2" />
          </div>
          <div className="flex items-center gap-6 border-b-1 border-b-gray-200 pb-4">
            <p className="text-base font-semibold text-gray-500">Campaign A</p>
            <Progress value={30} className="w-1/2" />
          </div>
          <div className="flex items-center gap-6 border-b-1 border-b-gray-200 pb-4">
            <p className="text-base font-semibold text-gray-500">Campaign A</p>
            <Progress value={80} className="w-1/2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default TopPerforming;
