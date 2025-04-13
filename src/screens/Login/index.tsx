import { useAuth } from "../../context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import { useNavigate } from "react-router";
import { useState } from "react";
import Logo from "@/assets/Frame.svg?react";
import "@/index.css";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    const success = await login(email, password);
    if (success) {
      navigate("/");
    } else {
      setError("Email ou senha inválido!");
    }
  };

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
              placeholder="@Username"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              className="border-2 border-white rounded-3xl text-white h-[50px]"
              type="password"
              name="password"
              id="password"
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center gap-4 p-3">
            <Button
              className="border-white border-2 text-rose-500 font-bold bg-accent-foreground w-[100px]"
              variant="outline"
            >
              SingIn
            </Button>

            <Button
              className="border-white border-2 text-rose-500 font-bold bg-accent-foreground w-[100px]"
              variant="outline"
              onClick={handleLogin}
            >
              Login
            </Button>
          </div>
          <div className=" flex justify-center">
            <p className="justify-center items-center bg-red-600 text-white">
              {error}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
