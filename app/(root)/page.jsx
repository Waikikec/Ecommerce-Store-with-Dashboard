"use client";

import useStore from "@/hooks/useStore";
import { useEffect } from "react";

const SetupPage = () => {

  const onOpen = useStore((state) => state.onOpen);
  const isOpen = useStore((state) => state.isOpen);

  useEffect(()=>{
    if(!isOpen){
      onOpen();
    }
  },[isOpen, onOpen]);

  return (
    <div className="p-4">
      Root Page
    </div>
  )
}

export default SetupPage