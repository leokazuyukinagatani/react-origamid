import { Button } from "./Button";
import { Input } from "./Input";

export function Form() {
  return(
    <form>
      <label htmlFor="">Email</label>
      <Input />
      <label htmlFor="">Password</label>
      <Input />
      <Button>
        Enviar
      </Button>
    </form>
  )
}