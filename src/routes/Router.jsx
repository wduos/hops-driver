import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthPrompt } from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPrompt />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
