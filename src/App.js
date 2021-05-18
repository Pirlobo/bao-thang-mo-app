import logo from "./logo.svg";
import "./App.css";
import RouteComponent from "./layout/RouteComponent";
import Helmet from "react-helmet";
import { Provider } from "react-redux"
import store from "./store"
function App() {
  return (
    <Provider store={store}>
      <Helmet>
        <title>Việc Làm San Jose</title>
      </Helmet>
      <RouteComponent />
    </Provider>
  );
}

export default App;
