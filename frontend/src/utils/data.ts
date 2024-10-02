import { House, LucideIcon, Users } from "lucide-react";

type MenuProp = { label: string; href: string; icon: LucideIcon };

export const menus: MenuProp[] = [
  { label: `Home`, href: `/admin/dashboard`, icon: House },
  { label: `Users`, href: `/admin/users`, icon: Users },
];
