import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Layout from "./pages/_layout";
import ChatPage from "./pages/Chat/ChatPage";
import SummaryPage from "./pages/Summary/SummaryPage";
import MindmapPage from "./pages/Mindmap/MindmapPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/summary" element={<SummaryPage />} />
          <Route path="/mindmap" element={<MindmapPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
