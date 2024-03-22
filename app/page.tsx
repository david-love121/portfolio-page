import Image from "next/image";
import Divider from './components/divider'
import Header from './components/header';
import Hero from './components/hero';

export default function Home() {
  return (
    
    <main className="flex flex-col bg-primary-content items-center w-screen h-full">
       <Header dark={false}></Header>
       <div className="flex flex-col h-screen bg-primary-content justify-between w-screen">
       
        <div className="flex-1 flex flex-col justify-center items-center mr-auto pl-2 h-max svg-bg-image">
          <h1 className="text-3xl w-full text-white text-left">David Love.</h1>
          <h2 className="w-full text-md text-secondary text-left">Developer, Designer, Student</h2>
        </div>
      </div>
      <Divider ></Divider>
      <div className="flex z-10 moveUp">
        <Hero 
        Title={"Turning ideas into software"} 
        Text={"I am a software engineer with a focus on web development and AI. I graduated the Illinois Mathematics and Science Academy in 2023 and now study at UIC."} 
        ButtonText={"My Projects"}
        ButtonLink={"/projects"}
        ImgLink={"/IMG_7222.jpg"}
        ></Hero>
      </div>
      
    </main>
    
  );
}
