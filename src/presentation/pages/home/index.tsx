import { Button } from "../../components/atoms/Button";
import { Input } from "../../components/atoms/Input";
import Text from "../../components/atoms/Text";
import "./home.css";

export default function Home() {
  return (
    <div className="container">
      <Text className="text">Olá, Mundo</Text>
      <div className="input-box">
        <Input placeholder="Digite aqui..." />
      </div>
      <Button onClick={() => console.log("clickequ")}>Teste</Button>
    </div>
  );
}
