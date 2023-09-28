import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { CompletedOrderPage } from "./pages/completeOrder";

export function Router() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />        
        <Route path="/completedOrder" element={<CompletedOrderPage />} />        
    </Routes>
  );
}
