import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/Frame.svg?react";

import "@/index.css";

function Login() {
  return (
    <>
      <div className="flex w-screen h-screen items-center justify-center p-8">
        <div className="w-[500px]">
          <div className="items-center flex justify-center">
            <Logo className="w-30 h-30" />
          </div>
          <div className="space-y-3">
            <Input
              className="border-2 border-white rounded-3xl text-white h-[50px]"
              type="text"
              name="username"
              id="username"
              placeholder="username"
            />
            <Input
              className="border-2 border-white rounded-3xl text-white h-[50px]"
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </div>
          <div className="flex justify-center gap-4 p-3">
            <Button
              className="border-white border-2 text-rose-500 font-bold bg-accent-foreground w-[100px]"
              variant="outline"
            >
              Criar
            </Button>
            <Button
              className="border-white border-2 text-rose-500 font-bold bg-accent-foreground w-[100px]"
              variant="outline"
            >
              Entrar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
