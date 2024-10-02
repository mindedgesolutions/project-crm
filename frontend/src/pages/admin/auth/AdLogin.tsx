import loginBg from "@/assets/images/loginBg.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye } from "lucide-react";
import { useState } from "react";
import { Form, Link } from "react-router-dom";

const AdLogin = () => {
  document.title = `Admin Login | ${import.meta.env.VITE_APP_TITLE}`;
  const [type, setType] = useState("password");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4">
      <div className="flex justify-end items-end">
        <div className="w-full md:max-w-md p-6">
          <div className="flex justify-center items-center mb-8">
            <h3 className="text-5xl font-bold text-muted-foreground tracking-widest">
              CRM
            </h3>
          </div>
          <Form>
            <div className="flex flex-col space-y-4">
              <div className="w-full items-center gap-1.5">
                <Label
                  htmlFor="username"
                  className="capitalize tracking-widest"
                >
                  username
                </Label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="johndoe@test.com"
                />
              </div>
              <div className="w-full items-center gap-1.5">
                <Label
                  htmlFor="password"
                  className="capitalize tracking-widest"
                >
                  password
                </Label>
                <div className="flex flex-row justify-center items-center relative">
                  <Input
                    type={type}
                    id="password"
                    name="password"
                    placeholder="********"
                  />
                  <button
                    type="button"
                    className="absolute h-full right-0 px-2 hover:bg-muted"
                    onClick={() =>
                      setType(type === "password" ? "text" : "password")
                    }
                  >
                    <Eye size={20} className="font-normal" />
                  </button>
                </div>
              </div>
              <div className="flex flex-row justify-end items-center">
                <Link to={`/admin/forgot-password`}>
                  <p className="text-sm tracking-widest text-muted-foreground hover:text-gray-600">
                    Forgot password?
                  </p>
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Button
                type="submit"
                className="w-full uppercase tracking-widest my-8"
              >
                login
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <div className="hidden md:flex flex-row h-screen justify-center items-center">
        <img
          src={loginBg}
          alt={import.meta.env.VITE_APP_TITLE}
          className="object-cover"
        />
      </div>
    </div>
  );
};
export default AdLogin;

// Action function starts ------
