import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./Pages/Index";
import ListPosts from "./Pages/Posts/ListPosts";

// ABDL
import LittleSpace from "./Pages/ABDL/LittleSpace";

function App() {
  return (
    <AnimatePresence >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<ListPosts />} />
          <Route path="/little-space" element={<LittleSpace />} />

          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
