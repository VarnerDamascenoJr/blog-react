


type ButtonProps = {
    text: string;
}

const ButtonDefault:React.FC<ButtonProps> = ({text}) => {
    return(
        <button>{text}</button>
    )
}

export default ButtonDefault;