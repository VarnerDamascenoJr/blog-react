
import { ButtonHTMLAttributes } from "react";
import ButtonDefault from "../ButtonDefault";

interface SectionProps  {
    tags: String;
    title: string;
    author: string;
    data: Date;
    sumary: string;
}


const SectionBlog : React.FC<SectionProps> = ({tags}) => {
    return(
        <section className="flex flex-row justify-items-center justify-around">
            <div className="self-center">
            <p className="font-bold">tag</p>
            <h3 className="text-6xl font-bold">title</h3>
            <div>
                <p className="text-xs">Author and Data</p>
            </div>
            <p className="text-base">sumary</p>
            <ButtonDefault text="Read More" />
            </div>
            <div>
                <img src="https://s3.envato.com/files/337539341/115_E39A5895.jpg" alt="Imag" />
            </div>
        </section>
    );
}

export default SectionBlog;