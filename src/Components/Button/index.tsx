import { ButtonProps } from "./types"
import "./style.css";


function Button(props: ButtonProps) {
    return (

        <button className="botao">{props.nome}</button>
    )
}

export default Button