import { Activity, CircleCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Activity {
  date: string;
  activities: {
    id: string;
    title: string;
    occurs_at: string;
  }[];
}

export function Activites() {
  const { tripId } = useParams();
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    api.get(`/trips/${tripId}/activities`)
      .then((response) => setActivities(response.data.activities));
  }, [tripId]);

  return (
    <div className="space-y-8">
      {activities.map((category) => {
        return (
          <div key={category.date} className="space-y-2.5">
            <div className="flex gap-2 items-baseline">
              <span className="text-xl text-zinc-200">
                Dia {format(category.date, "d")}
              </span>
              <span className="text-xs text-zinc-400">
                {format(category.date, "EEEE", { locale: ptBR })}
              </span>
            </div>

            {category.activities.length > 0 ? (
              <div>
                {category.activities.map((activity) => {
                  return (
                    <div key={activity.id} className="space-y-2.5">
                      <div className="flex items-center gap-3 px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape">
                        <CircleCheck className="size-5 text-lime-300" />
                        <span className="text-zinc-100">{activity.title}</span>
                        <span className="text-zinc-100 ml-auto">
                          {format(activity.occurs_at, 'HH:mm')}h
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-zinc-500 text-sm">
                {" "}
                Nenhuma ativiada nesta data.
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
