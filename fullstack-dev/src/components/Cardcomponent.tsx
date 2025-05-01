import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import { Github, Globe } from "lucide-react"
import Link from "next/link"


export function CardComponent() {

  const WorkProfile = [
    { id : 1 , title : "Flowpay"  ,  image : "/Flowpay-main.png" , Description  : " Flowpay is a payment platform that allows users to send and receive payments, request payments, and view all their transactions with ease " , 
      SourceBtnLink : "https://github.com/sarb001/Flowpay" ,
       WebsiteBtnLink : "https://flowpay-ruby.vercel.app/" ,
       tags : ["ReactJS","Mongoose","Redux-Toolkit","Express"]
      },
    { id : 2 , title : "Askaway" ,  image :  "/askaway.png" , Description  : " AskAway is an anonymous messaging platform that lets users receive honest feedback and questions without knowing who sent them. " ,  SourceBtnLink : "https://github.com/sarb001/Askaway" ,
       WebsiteBtnLink : "https://askaway-nu.vercel.app/" ,
       tags : ["Nextjs","Prisma","Shadcn-ui","Resend","React-hook-form"]
      },
    { id : 3 , title : "MindScroll" ,  image : "/Mindscroll.png" , Description  : " MindScroll is an AI-powered web platform that enables seamless content creation, management, and sharing, providing a dynamic space for blogging, idea exploration, and creative expression. " ,
       SourceBtnLink : "https://github.com/sarb001/MindScroll" , 
       WebsiteBtnLink : "https://mind-scroll-iota.vercel.app/" ,
       tags : ["Nextjs","TiptapEditor","Image-kit","Shadcn-UI","Nextauth","Prisma-ORM"]
    },
  ]

  return (
    <div className="grid  sm:grid-cols-2 sm:gap-6 justify-center gap-4 ">
     {WorkProfile?.map(i => {
       return (
            <Card className=" max-w-[400px] my-4  bg-black text-white " key = {i?.id}>

                <CardHeader>
                    <CardTitle className="border-b-[1px] border-black"> 
                    <Image src = {i?.image}  width={600} height={40} alt = "cardimg" className=" rounded-t-lg h-[28vh] " /> 
                    </CardTitle>
                  <CardDescription className="text-2xl text-white font-bold">   {i?.title}  </CardDescription>
                </CardHeader>

              <CardContent>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex text-[14px] flex-col space-y-1.5">
                        {i?.Description.slice(1,90)}
                    </div>

                    <div className="grid grid-cols-3">
                       {i?.tags?.map((i,index) => {
                         return (  <div key = {index} > 
                         <div className="bg-gray-300 text-black font-bold rounded-lg text-center p-[3px] text-[12px] m-2 "> {i} </div>
                         </div> )
                         }
                        )}
                    </div>
                  </div>
              </CardContent>

              <CardFooter className="grid  grid-cols-2 justify-start gap-4">
                  <Button asChild className="border-[1px] border-white"> 
                    <Link href  = {i?.WebsiteBtnLink}>  <Globe   /> Website  </Link>
                  </Button>
                  <Button asChild className="border-[1px] border-white"> 
                    <Link href  = {i?.SourceBtnLink}>  <Github  /> Source   </Link>
                  </Button>
              </CardFooter>
            </Card>
       )
     })}
    </div>
  )
}
