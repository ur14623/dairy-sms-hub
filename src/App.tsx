import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TriggeredSMSList from "./pages/TriggeredSMSList";
import TriggeredSMSDetail from "./pages/TriggeredSMSDetail";
import InboxList from "./pages/InboxList";
import InboxDetail from "./pages/InboxDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/messaging/triggered" element={<TriggeredSMSList />} />
          <Route path="/messaging/triggered/:id" element={<TriggeredSMSDetail />} />
          <Route path="/messaging/inbox" element={<InboxList />} />
          <Route path="/messaging/inbox/:id" element={<InboxDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
