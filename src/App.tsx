
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { Profile } from "./components/Profile";

const App = () => {
  console.log("App rendering");
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Profile />
      <Footer />
    </div>
  );
};

export default App;
