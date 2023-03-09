import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App";
import SamplePage1 from "./pages/SamplePage1";
import NotFound from "./pages/NotFound";

function RouterConfig() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="page1" element={<SamplePage1 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouterConfig;
