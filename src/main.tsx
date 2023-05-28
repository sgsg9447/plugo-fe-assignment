import ReactDOM from "react-dom/client";
import App from "@/App.tsx";
import GlobalStyle from "@/styles/GlobalStyles.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <GlobalStyle />
    <App />
  </>
);
