import { BrowserRouter } from "react-router-dom";
import AppRoutes from "@/router";
import Layout from "@/components/layout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
