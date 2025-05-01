import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import { FileUser, Linkedin, MailCheck, Twitter } from "lucide-react";
import { Spinner } from "@/components/Spinner";
import { CardComponent } from "@/components/Cardcomponent";

export default function Home() {

  const SkillsButton = ["React","Next.js","Typescript","Node.js","Postgres","Docker","Prisma","Express","MongoDB","TailwindCSS"]

  const MainLinks = [
    { id : 1 , logo : <FileUser /> , link : ""},
    { id : 2 , logo :  <Linkedin  /> , link : "https://www.linkedin.com/in/sarbkalyan-singh-1852042b8/"},
    { id : 3 , logo : <Twitter />  , link : "https://x.com/iamsarb_001"},
    { id : 4 , logo : <MailCheck />  , link : "mailto:mrsinghbusiness05@gmail.com"},
  ]

  const WorkExp = [
    { id : 1 , logo : '/Developer.PNG'   , JobProfile : "Software Developer" , companyname : "Freelancing/Personal Projects"   ,duration : "Jan 2024 - working" },
    { id : 2 , logo : '/freelancing.png' , JobProfile : "3d Artist" ,  companyname : "Seago Intuitive Technologies"  , duration : "June 2021 - Dec 2023" },
  ]

  const AboutSection = [ 'Full-stack developer passionate about building and deploying end-to-end applications','Combining Backend logic with Polished UI skills' ,'Github reflects real-world projects & clean architecture ']

  return (
    <>
    <div className=" my-16 px-4 relative ">
      <header className="flex justify-center items-center ">
        <Navbar />
      </header>

      <main id = "home">
        <div className="grid grid-rows-[1fr,1fr] md:grid-cols-[1fr,2fr] md:grid-rows-none gap-12 pt-24 ">
          
          <div className="flex justify-center items-center"> 
             <div className="w-44 h-44 ">
                <Image src = "/Profile-img.png"  width={100} height={90} alt = "maindp"  className="w-full h-full object-contain " /> 
             </div>
          </div>

          <div className="grid justify-center">
            <div className="bg-gray-400 text-[14px] flex items-center text-white w-44 px-2 p-[2px] rounded-3xl">  
              <Spinner />
              Available for work  </div>
            <div className="text-[38px] pt-4"> Hi,I&apos;m Sarb 👋 </div>
            <div className="text-[24px] text-[#f9ff4d]"> I&apos;m Full-stack  Developer </div>
            <p className="text-[1rem]">  &quot; My Execution is my superpower, not perfection &quot; </p>
          </div>
         
        </div>
      </main>

      <section id = "about" className="my-8 px-4">
         <p className="text-3xl font-extrabold  py-1 text-[#f9ff4d]"> About </p>
         <div>
            <ul>  
               {AboutSection?.map((i,index) => {
                 return (
                   <div key = {index}>  
                     <li> • {i} </li>
                  </div>
                 )
               })}
            </ul>
         </div>
      </section>

      <section id = "work" className="my-8 px-4">
         <p className="font-semibold text-xl py-1 text-[#f9ff4d]"> Work Experience </p>
         <div className = "grid grid-rows-[2fr_2fr] gap-5">
        
        {WorkExp?.map(i => {
            return (
              <div className="grid grid-cols-[2fr_1fr]  gap-5" key = {i?.id}>
                
                <div className="flex items-center "> 
                      <Image src = {i?.logo} className="rounded-full" width={50}  height={20} alt = {i?.JobProfile} />
                    <div className=" pl-[5%]">
                          <p className="text-[17px]"> {i?.JobProfile} </p>
                          <p className="text-[14px]"> {i?.companyname} </p>
                    </div>
                </div>

                <div className="grid  justify-end gap-4 mt-2 " >
                    <div className="flex justify-end ">
                      <p> {i?.duration} </p>
                    </div>
                </div> 
              </div>
            )
        })}
         </div>

      </section>

      <section id = "education" className="my-8 px-4">
         <p className="font-semibold text-xl py-1 text-[#f9ff4d]"> Education </p>
         <div className = "grid grid-cols-[4fr_2fr]">

         <div className="flex items-center "> 
                  <Image src = "/Uni-image.png" className="rounded-full" width={50}  height={20} alt = "uni-img" />
                  <div className="text-[17px] pl-2">
                      <p> Punjabi University, Patiala  </p>
                      <p> Btech in Computer Science  </p>
              </div>
         </div>

          <div className="grid  justify-end gap-4 mt-2 " >
                  <p> 2017-2021 </p>
          </div>
         </div>
      </section>

      <section id = "projects" className="my-8 px-4">
         <div className="flex justify-center font-semibold text-[25px] py-1 text-[#f9ff4d]">
          All Featured Projects
          </div>
          <div className="flex justify-center">
            <p> Projects that I&apos;ve worked on  </p>
          </div>
        <div>
              <CardComponent   />
        </div>

      </section>

      <section id  = "milestone" className="my-8 px-4" >
        <div className="flex justify-center">
          <Button> Milestones </Button>
        </div>
        <p className="text-xl flex justify-center py-4 font-bold text-[#f9ff4d]"> I like building things </p>
        <div className="text-[18px] text-center  px-4 ">
        During my Development Journey, I made multiple projects and learnt a lot of things. Here are a few of my favorites.
        </div>
      </section>

      <section id = "skills" className="my-8 px-4" >
          <div className="flex justify-center py-4">
            <div className="text-2xl font-bold  text-[#f9ff4d]"> Skills </div>
          </div>
         <div className="grid grid-cols-4 gap-4"> 
          {SkillsButton?.map(i => {
            return (
              <div key = {i} className="m-2">
                <Button className="border-[1px] border-white"> {i} </Button>
              </div>
            )
          })}
         </div>
      </section>

      <section id = "contact" className="my-8 px-4" >
          <div className=" flex justify-center">
          <Button className="text-xl  font-bold  text-[#f9ff4d]"> Contact </Button>
          </div>
          <div className="flex justify-center items-center py-2">
            <p className="text-[22px] "> Get in Touch </p>
          </div>
          <div className="my-2 text-center pb-4"> Want to chat? Just shoot me a dm with a direct question on 
            <Link className="text-blue-600 px-2" href = "https://x.com/iamsarb_001">
            twitter  </Link>
            and I&apos;ll respond whenever I can. I will ignore all soliciting. 
          </div>

            <div className="my-4 py-5 grid grid-cols-4 gap-4 justify-center items-center ">
              {MainLinks?.map(i => {
                return (
                  <Link className="flex justify-center" href = {i?.link?.startsWith("mailto:") ? i?.link : i?.link}
                  key = {i?.id}>
                    {i?.logo}
                  </Link>
                )
              })}
            </div>
        </section>                                                                                                 </div>
    </>
  );
}
