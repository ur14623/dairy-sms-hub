import { Signal, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Operator {
  id: string;
  name: string;
  status: "online" | "degraded" | "offline";
  deliveryRate: number;
  messagesSent: number;
  trend: "up" | "down" | "stable";
}

const operators: Operator[] = [
  {
    id: "1",
    name: "Ethio Telecom",
    status: "online",
    deliveryRate: 98.5,
    messagesSent: 125000,
    trend: "up",
  },
  {
    id: "2",
    name: "Safaricom Ethiopia",
    status: "online",
    deliveryRate: 99.2,
    messagesSent: 45000,
    trend: "up",
  },
  {
    id: "3",
    name: "Backup Gateway",
    status: "degraded",
    deliveryRate: 85.0,
    messagesSent: 12000,
    trend: "down",
  },
];

const statusConfig = {
  online: {
    label: "Online",
    color: "bg-success",
    textColor: "text-success",
  },
  degraded: {
    label: "Degraded",
    color: "bg-warning",
    textColor: "text-warning",
  },
  offline: {
    label: "Offline",
    color: "bg-destructive",
    textColor: "text-destructive",
  },
};

const OperatorStatus = () => {
  return (
    <div className="bg-card border border-border p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        Operator Status
      </h3>
      <div className="space-y-4">
        {operators.map((operator) => {
          const status = statusConfig[operator.status];
          return (
            <div
              key={operator.id}
              className="p-4 border border-border hover:bg-muted/30 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Signal className="h-5 w-5 text-muted-foreground" />
                  <span className="font-medium text-foreground">
                    {operator.name}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={cn("w-2 h-2", status.color)} />
                  <span className={cn("text-sm font-medium", status.textColor)}>
                    {status.label}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Delivery Rate</p>
                  <p className="font-semibold text-foreground">
                    {operator.deliveryRate}%
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">Messages Sent</p>
                  <p className="font-semibold text-foreground">
                    {(operator.messagesSent / 1000).toFixed(0)}k
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">Trend</p>
                  <div className="flex items-center gap-1">
                    {operator.trend === "up" ? (
                      <TrendingUp className="h-4 w-4 text-success" />
                    ) : operator.trend === "down" ? (
                      <TrendingDown className="h-4 w-4 text-destructive" />
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                    <span
                      className={cn(
                        "font-medium",
                        operator.trend === "up"
                          ? "text-success"
                          : operator.trend === "down"
                          ? "text-destructive"
                          : "text-muted-foreground"
                      )}
                    >
                      {operator.trend === "up"
                        ? "Rising"
                        : operator.trend === "down"
                        ? "Falling"
                        : "Stable"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OperatorStatus;
