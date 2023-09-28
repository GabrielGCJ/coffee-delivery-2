import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { CompletedOrderPage } from "./pages/completeOrder";
import { DefaultLayout } from "./layouts/DefaltLayout";

export function Router() {
  return (
    <Routes>
        <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />        
            <Route path="/completedOrder" element={<CompletedOrderPage />} />        
        </Route>
    </Routes>
  );
}
