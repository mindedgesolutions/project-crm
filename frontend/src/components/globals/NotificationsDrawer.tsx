import { Bell } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const NotificationsDrawer = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <Button variant="ghost" size="icon">
          <Bell className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 md:w-96" align="end">
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {Array.from({ length: 5 }, (_, index) => {
          return (
            <div key={index + 1}>
              <Link to={`#`}>
                <DropdownMenuItem>
                  <div className="flex flex-row justify-start items-center py-2 gap-4">
                    <div className="p-1 rounded-full bg-green-500 animate-pulse"></div>
                    <p className="text-xs tracking-wider leading-5 font-medium cursor-pointer">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Non molestiae asperiores optio ...
                    </p>
                  </div>
                </DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
            </div>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default NotificationsDrawer;
