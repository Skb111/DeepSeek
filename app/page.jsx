"use client";
import Image from "next/image";
import { useState } from "react";
import { assets } from "@/assets/assets";
import Sidebar from "@/components/Sidebar";
import PromptBox from "@/components/PromptBox";
import Message from "@/components/Message";

export default function Home() {
  const [expand, setExpand] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <div className="flex h-screen bg-[#292a2d] text-white">
        {/* SIDEBAR */}
        <Sidebar expand={expand} setExpand={setExpand} />
        <div className="flex-1 flex flex-col items-center justify-center px-4 pb-8 bg-[#292a2d] text-white relative">
          <div className="md:hidden absolute px-4 top-6 flex items-center justify-between w-full">
            <Image onClick={() => (expand ? setExpand(false) : setExpand(true))} src={assets.menu_icon} className="rotate-180 bg-amber-400" alt="img" />
            <Image src={assets.chat_icon} className="opacity-70 bg-amber-950" alt="img" />
          </div>

          {
            messages.length === 0 ? (
              <>
                <div className="flex items-center gap-3">
                  <Image src={assets.logo_icon} alt="logo" className="h-16" />
                  <p className="text-2xl font-medium text-white">Hi, i am DeepSeek </p>
                </div>
                <p className="text-sm mt-2 text-white">How can i help you today?</p>
              </>
            ) : (
              <div>
                <Message role='user' content='what is NextJs ?' />
              </div>
              )
          }
          {/* prompt box */}
          <PromptBox isLoading={isLoading} setIsLoading={setIsLoading} />
          <p className="text-xs absolute bottom-1 text-grey-500">A.I generated for reference only</p>
        </div>
      </div>
    </div>
  );
}
