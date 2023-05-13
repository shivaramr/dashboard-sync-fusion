import {
  Area,
  Bar,
  Calendar,
  ColorMapping,
  ColorPicker,
  Customers,
  Ecommerce,
  Editor,
  Employees,
  Financial,
  Kanban,
  Line,
  Orders,
  Pie,
  Pyramid,
  Stacked,
} from "./pages";

export const routes = [
  {
    path: "/ecommerce",
    element: <Ecommerce />,
  },
  // Pages //
  {
    path: "/orders",
    element: <Orders />,
  },
  {
    path: "/employees",
    element: <Employees />,
  },
  {
    path: "/customers",
    element: <Customers />,
  },
  // Apps //
  {
    path: "/kanban",
    element: <Kanban />,
  },
  {
    path: "/editor",
    element: <Editor />,
  },
  {
    path: "/calendar",
    element: <Calendar />,
  },
  {
    path: "/color-picker",
    element: <ColorPicker />,
  },
  // Charts //
  {
    path: "/line",
    element: <Line />,
  },
  {
    path: "/area",
    element: <Area />,
  },
  {
    path: "/bar",
    element: <Bar />,
  },
  {
    path: "/pie",
    element: <Pie />,
  },
  {
    path: "/financial",
    element: <Financial />,
  },
  {
    path: "/color-mapping",
    element: <ColorMapping />,
  },
  {
    path: "/pyramid",
    element: <Pyramid />,
  },
  {
    path: "/stacked",
    element: <Stacked />,
  },
];
