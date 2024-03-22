import Image from "next/image";
import Divider from './components/divider'
import Header from './components/header';
export default function Home() {
  return (
    <main className="flex flex-col items-center w-screen h-full">
       <Header dark={true}></Header>
       <div className="flex flex-col h-screen bg-primary-content justify-between w-screen">
        <div className="flex-1 flex flex-col justify-center items-center mr-auto pl-2 h-max svg-bg-image">
          <h1 className="text-3xl w-full text-white text-left">David Love.</h1>
          <h2 className="w-full text-md text-secondary text-left">Developer, Designer, Student</h2>
        </div>
      </div>
      <Divider></Divider>
      <button className="btn btn-primary">test</button>
      
    </main>
    
  );
}
