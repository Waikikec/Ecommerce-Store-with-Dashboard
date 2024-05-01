"use client";

import useStore from "@/hooks/useStore";

import { useEffect, useState } from "react";

const SetupPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onOpen = useStore((state) => state.onOpen);
  const isOpen = useStore((state) => state.isOpen);

  useEffect(()=>{
    if(!isOpen){
      onOpen();
    }
  },[isOpen, onOpen]);

  return (
    <div className="p-4">
      {isClient ? "Root Page" : "" }
    </div>
  )
}

export default SetupPage