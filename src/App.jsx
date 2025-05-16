import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/footer";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />

      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default App;
