
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import Customer from "views/examples/Customermanagement";
import DeliveryReports from "views/examples/Deliveryrepots";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Restaurants",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Tables />,
    layout: "/admin",
  },
  {
    path: "/ordermanagement",
    name: "Orders",
    icon: "ni ni-pin-3 text-orange",
    component: <Maps />,
    layout: "/admin",
  },
  
  {
    path: "/deliveryreports",
    name: "Delivery Boy",
    icon: "ni ni-planet text-blue",
    component: <Icons />,
    layout: "/admin",
  },
  {
    path: "/deliveryboy",
    name: "Delivery Reports",
    icon: "ni ni-planet text-blue",
    component: <DeliveryReports/>,
    layout: "/admin",
  },

  {
    path: "/customer",
    name: "Customer",
    icon: "ni ni-planet text-blue",
    component: <Customer/>,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/admin",
  },
  
  {
    path: "/index",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },
  // {
  //   path: "/deliveryboy",
  //   name: "Delivery Boy",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: <Register />,
  //   layout: "/auth",
  // },
];
export default routes;
