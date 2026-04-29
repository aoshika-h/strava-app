import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Legend, LineChart, Line } from "recharts";
import { activities } from "../data/activities";

function Dashboard() {
  const monthlyData = activities.reduce((acc, activity) => {
    const month = activity.date.slice(0, 7);
    const existing = acc.find((d) => d.month === month);
    if (existing) {
      existing.distance += activity.distance;
    } else {
      acc.push({ month, distance: activity.distance });
    }

    return acc;
  }, [] as { month: string; distance: number }[]);

  const typeData = [
    { name: "run", value: activities.filter((a) => a.type === "run").length, fill: "#f97316" },
    { name: "ride", value: activities.filter((a) => a.type === "ride").length, fill: "#3b82f6" },
  ]

  const paceData = activities.filter((a) => a.type === "run").map((a) => ({ date: a.date, pace: a.pace }));

  const monthlyCount = activities.reduce((acc, activity) => {
    const month = activity.date.slice(0, 7);
    const foundMonth = acc.find((d) => d.month === month);
    if (foundMonth) {
      foundMonth.count += 1;
    } else {
      acc.push({ month, count: 1 });
    }
    return acc;
  }, [] as { month: string; count: number }[]);


  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">ダッシュボード</h2>
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-bold mb-4">月別距離</h3>
        <BarChart width={600} height={300} data={monthlyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="distance" fill="#f97316" />
        </BarChart>
      </div>
      <div className="bg-white rounded-lg shadow p-4 mt-4">
        <h3 className="text-lg font-bold mb-4">種別割合</h3>
        <PieChart width={400} height={300}>
          <Pie
            data={typeData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#f97316"
          />
          <Legend />
          <Tooltip />
        </PieChart>
      </div>
      <div className="bg-white rounded-lg shadow p-4 mt-4">
        <h3 className="text-lg font-bold mb-4">ペース推移（ラン）</h3>
        <LineChart width={600} height={300} data={paceData}>
          <CartesianGrid strokeDashArray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="pace" stroke="#f97316" />
        </LineChart>
      </div>
      <div className="bg-white rounded-lg shadow p-4 mt-4">
        <h3 className="text-lg font-bold mb-4">月別活動回数</h3>
        <BarChart width={600} height={300} data={monthlyCount}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#3b82f6" />
        </BarChart>
      </div>
    </div>
  );
}

export default Dashboard;