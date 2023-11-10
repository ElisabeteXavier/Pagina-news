import { ButtonProps } from "./types"

function Button(props: ButtonProps) {
    return (

        <button>{props.titulo}</button>
    )
}

export default Button