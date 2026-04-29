import { useParams } from "react-router-dom";
import { activities } from "../data/activities";

function ActivityDetail() {
  const { id } = useParams();
  const activity = activities.find((a) => a.id === Number(id));

  if (!activity) {
    return <p>アクティビティが見つかりません</p>
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{activity.name}</h2>
      <div className="bg-white rounded-lg shadow p-4 flex flex-col gap-2">
        <p>📅 日付：{activity.date}</p>
        <p>{activity.type === "run" ? "🏃" : "🚴"} 種別：{activity.type}</p>
        <p>📏 距離：{activity.distance}km</p>
        <p>{activity.type === "run" ? `🏃 ペース：${activity.pace}分/km` : `🚴 平均速度：${activity.speed}km/h`}</p>
        <p>⬆️ 獲得標高：{activity.elevation}m</p>
        <p>❤️ 平均心拍数：{activity.heartRate}bpm</p>
        <p>🔥 消費カロリー：{activity.calories}kcal</p>
        <p>⚡ パワー：{activity.power}W</p>
      </div>
    </div>
  )
}

export default ActivityDetail;