import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/Frame.svg?react";

import "@/index.css";

function SingIn() {
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
            <Button
              className="border-white border-2 rounded-3xl bg-rose-500 text-white w-[500px] h-[50px]"
              variant="default"
            >
              Criar Conta
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingIn;
