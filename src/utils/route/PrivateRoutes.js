import getAllowedRoutes from "./AllowedRoutes";
import MapAllowedRoutes from "./MapAllowedRoutes";
import PublicRoutes from "./PublicRoutes";

const PrivateRoutes = (props) => {
  let allowedRoutes = [];
  allowedRoutes = getAllowedRoutes(PublicRoutes);
  return (
    <MapAllowedRoutes routes={allowedRoutes} basePath="" isAddNotFound />
  );
};

export default PrivateRoutes;
