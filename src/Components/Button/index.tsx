import { ButtonProps } from "./types"
import "./style.css";


function Button(props: ButtonProps) {
    const handleButtonClick = () => {
        window.location.href = props.link;
      };
    

    return (

        <button onClick={handleButtonClick} className="botao">{props.nome} </button>
    )
}

export default Button