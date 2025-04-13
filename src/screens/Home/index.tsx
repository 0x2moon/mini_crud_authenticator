import { useAuth } from "../../context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import { useNavigate } from "react-router";
import { UserX } from "lucide-react";
import Logo from "@/assets/Frame.svg?react";
import "@/index.css";

function Home() {
  const { logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function logoutRenderLoginPage() {
    logout();
    navigate("/login");
  }
  console.log("Está autenticado?", isAuthenticated);

  return (
    <>
      <div className="flex  justify-between p-8">
        <label>Logado: Nome</label>
        <Button
          className="rounded-2xl w-15 bg-rose-500"
          onClick={logoutRenderLoginPage}
        >
          <UserX />
        </Button>
      </div>
      <div className="flex w-screen h-screen  justify-center p-8">
        <div className="w-[500px]">
          <div className="items-center flex justify-center">
            <Logo className="w-30 h-30" />
          </div>
          <Input
            className="border-2 border-white rounded-3xl text-white h-[50px]"
            type="text"
            name="username"
            id="username"
            placeholder="Texto..."
          />
          <div className="flex justify-center gap-4 p-3">
            <Button
              className="border-white border-2 text-rose-500 font-bold bg-accent-foreground w-[100px]"
              variant="outline"
            >
              Inserir
            </Button>
            <Button
              className="border-white border-2 text-rose-500 font-bold bg-accent-foreground w-[100px]"
              variant="outline"
            >
              Listar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
