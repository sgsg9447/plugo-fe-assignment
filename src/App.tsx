import { BrowserRouter } from "react-router-dom";
import AppRoutes from "@/router";
import Layout from "@/components/layout";
import { ResizeProvider } from "@/components/layout/ReSizeProvider";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div>
      <RecoilRoot>
        <BrowserRouter>
          <Layout>
            <ResizeProvider />
            <AppRoutes />
          </Layout>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
