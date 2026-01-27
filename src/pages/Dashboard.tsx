import {
  Send,
  CheckCircle,
  AlertTriangle,
  Clock,
  Users,
  DollarSign,
} from "lucide-react";
import KPICard from "@/components/dashboard/KPICard";
import DeliveryChart from "@/components/dashboard/DeliveryChart";
import RecentActivity from "@/components/dashboard/RecentActivity";
import OperatorStatus from "@/components/dashboard/OperatorStatus";
import QuickActions from "@/components/dashboard/QuickActions";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Overview of your SMS platform performance
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleTimeString("en-ET")}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <KPICard
          title="Messages Sent"
          value="182,450"
          subtitle="Today"
          icon={Send}
          variant="primary"
          trend={{ value: 12.5, isPositive: true }}
        />
        <KPICard
          title="Delivered"
          value="178,230"
          subtitle="97.7% rate"
          icon={CheckCircle}
          variant="success"
          trend={{ value: 2.3, isPositive: true }}
        />
        <KPICard
          title="Failed"
          value="4,220"
          subtitle="2.3% rate"
          icon={AlertTriangle}
          variant="danger"
          trend={{ value: 0.5, isPositive: false }}
        />
        <KPICard
          title="Pending"
          value="12,500"
          subtitle="In queue"
          icon={Clock}
          variant="warning"
        />
        <KPICard
          title="Active Contacts"
          value="245,890"
          subtitle="Farmers registered"
          icon={Users}
          variant="primary"
          trend={{ value: 8.2, isPositive: true }}
        />
        <KPICard
          title="Monthly Cost"
          value="ETB 125K"
          subtitle="Jan 2026"
          icon={DollarSign}
          variant="primary"
        />
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <DeliveryChart />
        </div>
        <div>
          <QuickActions />
        </div>
      </div>

      {/* Operator Status and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <OperatorStatus />
        <RecentActivity />
      </div>
    </div>
  );
};

export default Dashboard;
