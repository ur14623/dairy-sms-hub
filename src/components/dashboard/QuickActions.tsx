import { Link } from "react-router-dom";
import { Send, FileStack, Users, BarChart3, Settings, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const actions = [
  {
    title: "Send SMS",
    description: "Compose and send a single message",
    icon: Send,
    path: "/messaging/send",
    variant: "default" as const,
  },
  {
    title: "Bulk Campaign",
    description: "Send to multiple recipients",
    icon: FileStack,
    path: "/messaging/bulk",
    variant: "secondary" as const,
  },
  {
    title: "Add Contact",
    description: "Create a new contact entry",
    icon: Users,
    path: "/contacts/list",
    variant: "secondary" as const,
  },
  {
    title: "View Reports",
    description: "Access delivery analytics",
    icon: BarChart3,
    path: "/reports/delivery",
    variant: "secondary" as const,
  },
];

const QuickActions = () => {
  return (
    <div className="bg-card border border-border p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        Quick Actions
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <Link key={action.path} to={action.path}>
            <Button
              variant={action.variant}
              className="w-full h-auto py-4 px-4 flex flex-col items-start gap-2"
            >
              <action.icon className="h-5 w-5" />
              <div className="text-left">
                <p className="font-medium text-sm">{action.title}</p>
                <p className="text-xs opacity-80">{action.description}</p>
              </div>
            </Button>
          </Link>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-border">
        <Link to="/settings/sender-ids">
          <Button variant="outline" className="w-full gap-2">
            <Settings className="h-4 w-4" />
            Configure Sender IDs
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default QuickActions;
