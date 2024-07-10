


type ButtonProps = {
    text: string;
}

const ButtonDefault:React.FC<ButtonProps> = ({text}) => {
    return(
        <button
        className="font-semibold text-black bg-regular-yellow px-5 py-1 hover:bg-regular-yellow-400"
        >{text}
        </button>
    )
}

export default ButtonDefault;