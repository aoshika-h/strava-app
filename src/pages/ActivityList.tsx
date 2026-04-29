import { Link } from "react-router-dom";
import { activities } from "../data/activities";

function ActivityList() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">アクティビティ一覧</h2>
      <div className="flex flex-col gap-4">
        {activities.map((activity) => (
          <Link to={`/activity/${activity.id}`} key={activity.id}>
            <div key={activity.id} className="bg-white rounded-lg shadow p-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">{activity.name}</h3>
                <span className="text-gray-500">{activity.date}</span>
              </div>
              <div className="flex gap-4 mt-2 text-sm text-gray-600">
                <span>{activity.type === "run" ? "🏃" : "🚴"} {activity.type}</span>
                <span>📏 {activity.distance}km</span>
                <span>⬆️ {activity.elevation}m</span>
                <span>❤️ {activity.heartRate}bpm</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ActivityList;