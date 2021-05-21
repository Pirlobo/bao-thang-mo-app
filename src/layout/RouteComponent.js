import { Switch, Router } from "react-router-dom";
import PrivateRoutes from "../utils/route/PrivateRoutes";
import history from "../History";
import Navbar from "../components/Navbar.component";
import { Layout } from "antd";
import ResponsiveNavbar from "../components/ResponsiveNavnar"
const RouteComponent = (props) => {
  const { Content } = Layout;
  return (
    <Router history={history}>
      <Navbar> </Navbar>
      <ResponsiveNavbar></ResponsiveNavbar>
      <div className="container">
      <Switch>
          <PrivateRoutes></PrivateRoutes>
        </Switch>
      </div>
     
    </Router>
  );
};

export default RouteComponent;
