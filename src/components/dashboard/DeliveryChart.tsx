import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "00:00", delivered: 2400, failed: 120 },
  { time: "04:00", delivered: 1398, failed: 98 },
  { time: "08:00", delivered: 9800, failed: 390 },
  { time: "12:00", delivered: 8908, failed: 480 },
  { time: "16:00", delivered: 4800, failed: 230 },
  { time: "20:00", delivered: 3800, failed: 180 },
  { time: "24:00", delivered: 2300, failed: 90 },
];

const DeliveryChart = () => {
  return (
    <div className="bg-card border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">
          Message Delivery (Last 24h)
        </h3>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-success" />
            <span className="text-muted-foreground">Delivered</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-destructive" />
            <span className="text-muted-foreground">Failed</span>
          </div>
        </div>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="hsl(var(--border))"
              vertical={false}
            />
            <XAxis
              dataKey="time"
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) =>
                value >= 1000 ? `${value / 1000}k` : value
              }
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: 0,
                fontSize: 12,
              }}
            />
            <Area
              type="monotone"
              dataKey="delivered"
              stackId="1"
              stroke="hsl(var(--success))"
              fill="hsl(var(--success))"
              fillOpacity={0.3}
            />
            <Area
              type="monotone"
              dataKey="failed"
              stackId="2"
              stroke="hsl(var(--destructive))"
              fill="hsl(var(--destructive))"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DeliveryChart;
