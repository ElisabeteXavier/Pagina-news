import { ParagraphProps } from "./types"
import "./style.css"

function Paragraph(props: ParagraphProps) {
    return (

        <p className="body">{props.body}</p>
    )
}

export default Paragraph