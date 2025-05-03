import { createRoot } from "react-dom/client";
import App from "./App";
import "@fontsource/caveat";
import "@fontsource/dancing-script";
import "./index.css";
import { ScrollToTop } from "./lib/animations";

createRoot(document.getElementById("root")!).render(
  <>
    <ScrollToTop />
    <App />
  </>
);
