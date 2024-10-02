import { menus } from "@/utils/data";
import { NavLink } from "react-router-dom";
import { useTheme } from "../theme-provider";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const { theme } = useTheme();
  const textClass = theme === "dark" ? "text-black" : "text-white";
  const [activeLink, setActiveLink] = useState(textClass);

  useEffect(() => {
    setActiveLink(textClass);
  }, [theme]);

  return (
    <div className="hidden md:block z-10 md:fixed top-0 left-0 w-[288px] h-screen bg-muted px-4">
      <div className="flex justify-center items-center mt-8 mb-12">
        <h3 className="text-4xl font-bold text-muted-foreground">CRM</h3>
      </div>
      <div className="flex flex-col justify-start items-start space-y-1">
        {menus.map((menu) => {
          return (
            <NavLink
              key={menu.href}
              to={menu.href}
              className={({ isActive }) => {
                return `flex flex-row justify-start items-center w-full py-2 px-4 rounded-md gap-3 hover:bg-card ${
                  isActive ? `${activeLink} bg-card` : null
                }`;
              }}
            >
              <menu.icon
                size={20}
                className="text-muted-foreground font-normal"
              />
              <span className="text-[16px] font-medium text-muted-foreground capitalize">
                {menu.label}
              </span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};
export default Sidebar;
