import { Book, User } from "lucide-react";

export const adminMenu = [
  {
    path: "/dashboard/users",
    icon: <User className="h-5 w-5 flex" />,
    tooltip: "Users",
  },
  {
    path: "/dashboard/posts",
    icon: <Book className="h-5 w-5" />,
    tooltip: "Posts",
  },
];
