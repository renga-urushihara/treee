import Explore from "./components/Explorer";
import Layout from "./components/Layout";
import Body from "./components/Layout/Body";
import Content from "./components/Layout/Content";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";

function App() {
  return (
    <Layout>
      <Header title="hoge" />
      <Body>
        <Content>
          <Explore />
        </Content>
      </Body>
      <Footer />
    </Layout>
  );
}

export default App;
