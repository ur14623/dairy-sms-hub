import {
  CheckCircle,
  AlertTriangle,
  XCircle,
  Clock,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Activity {
  id: string;
  type: "success" | "warning" | "error" | "pending" | "sent";
  message: string;
  timestamp: string;
  details?: string;
}

const activities: Activity[] = [
  {
    id: "1",
    type: "success",
    message: "Bulk SMS campaign completed",
    timestamp: "2 minutes ago",
    details: "5,000 messages delivered to Oromia Region",
  },
  {
    id: "2",
    type: "warning",
    message: "AI Content Flag",
    timestamp: "15 minutes ago",
    details: "Message flagged for review: promotional language detected",
  },
  {
    id: "3",
    type: "sent",
    message: "Scheduled SMS dispatched",
    timestamp: "1 hour ago",
    details: "Weather alert sent to 12,000 farmers",
  },
  {
    id: "4",
    type: "error",
    message: "Delivery failure detected",
    timestamp: "2 hours ago",
    details: "Ethio Telecom: 250 messages failed - network congestion",
  },
  {
    id: "5",
    type: "pending",
    message: "Bulk campaign in queue",
    timestamp: "3 hours ago",
    details: "10,000 messages scheduled for 18:00 EAT",
  },
];

const typeConfig = {
  success: {
    icon: CheckCircle,
    color: "text-success",
    bg: "bg-success/10",
  },
  warning: {
    icon: AlertTriangle,
    color: "text-warning",
    bg: "bg-warning/10",
  },
  error: {
    icon: XCircle,
    color: "text-destructive",
    bg: "bg-destructive/10",
  },
  pending: {
    icon: Clock,
    color: "text-muted-foreground",
    bg: "bg-muted",
  },
  sent: {
    icon: Send,
    color: "text-primary",
    bg: "bg-primary/10",
  },
};

const RecentActivity = () => {
  return (
    <div className="bg-card border border-border p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        Recent Activity
      </h3>
      <div className="space-y-4">
        {activities.map((activity) => {
          const config = typeConfig[activity.type];
          const Icon = config.icon;
          return (
            <div
              key={activity.id}
              className="flex items-start gap-4 p-3 hover:bg-muted/50 transition-colors"
            >
              <div className={cn("p-2", config.bg)}>
                <Icon className={cn("h-5 w-5", config.color)} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">
                  {activity.message}
                </p>
                {activity.details && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {activity.details}
                  </p>
                )}
                <p className="text-xs text-muted-foreground mt-1">
                  {activity.timestamp}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <button className="w-full mt-4 py-2 text-sm text-primary hover:bg-muted transition-colors border border-border">
        View All Activity
      </button>
    </div>
  );
};

export default RecentActivity;
