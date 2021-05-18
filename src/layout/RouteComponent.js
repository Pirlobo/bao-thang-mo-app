import { Switch, Router } from "react-router-dom";
import PrivateRoutes from "../utils/route/PrivateRoutes";
import history from "../History";
import Navbar from "../components/Navbar.component";
import { Layout } from "antd";
const RouteComponent = (props) => {
  const { Content } = Layout;
  return (
    <Router history={history}>
      <Navbar> </Navbar>
      <Switch>
          <PrivateRoutes></PrivateRoutes>
        </Switch>
    </Router>
  );
};

export default RouteComponent;
