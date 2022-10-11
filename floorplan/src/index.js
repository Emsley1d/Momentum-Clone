import { createRoot } from "react-dom/client";

import App from "./App";
import FloorPlan from "./FloorPlan"


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(

    <App FloorPlan = {FloorPlan} />


);

