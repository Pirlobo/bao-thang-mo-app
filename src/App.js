import logo from "./logo.svg";
import "./App.css";
import RouteComponent from "./layout/RouteComponent";
import Helmet from "react-helmet";
function App() {
  return (
    <div>
      <Helmet>
        <title>Việc Làm San Jose</title>
      </Helmet>
      <RouteComponent />
    </div>
  );
}

export default App;
