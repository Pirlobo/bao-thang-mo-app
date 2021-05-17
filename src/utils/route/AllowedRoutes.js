const isArrayWithLength = (arr) => {
    return (Array.isArray(arr) && arr.length)
}

const AllowedRoutes = (routes) => {
    return routes.filter(({ permission }) => {
        if (!permission) return true;
        else if (!isArrayWithLength(permission)) return true;
    });
}
export default AllowedRoutes