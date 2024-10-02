import { AlignJustify } from "lucide-react";
import ProfileContainer from "./ProfileContainer";
import { ModeToggle } from "../mode-toggle";
import NotificationsDrawer from "./NotificationsDrawer";

const Topnav = () => {
  return (
    <div className="w-full flex flex-row justify-between md:justify-end items-center py-2 px-4 md:px-8 bg-muted shadow-md">
      <span className="block md:hidden">
        <AlignJustify />
      </span>
      <span className="block md:hidden">Logo</span>
      <div className="flex flex-row justify-center items-center gap-4">
        <NotificationsDrawer />
        <span className="hidden md:block mr-8">
          <ModeToggle />
        </span>
        <ProfileContainer />
      </div>
    </div>
  );
};
export default Topnav;
