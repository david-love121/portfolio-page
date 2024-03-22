import {FC} from 'react';
import Image from 'next/image';
import Link from 'next/link';
interface HeroProps {
    Title: string;
    Text: string;
    ButtonText: string;
    ButtonLink: string;
    ImgLink: string;

}

const Hero:FC<HeroProps> = (props) => {
    return (
    <div className="hero min-h-screen bg-transparent">
        <div className="hero-content flex-col md:flex-row-reverse">
            
            <img src={props.ImgLink} className="max-w-sm rounded-lg shadow-2xl" />
            <div className="text-center">
                <h1 className="text-5xl font-bold">{props.Title}</h1>
                <p className="py-6">{props.Text}</p>
            <Link href={props.ButtonLink} className="btn btn-primary">{props.ButtonText}</Link>
            </div>
        </div>
    </div>
    )
}
export default Hero;