/* eslint-disable react/jsx-no-target-blank */
import React,{useState,useEffect} from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import ChatSideBar from "components/chatSideBar";
import ChatBody from "components/chatBody";


export default function Index() {

  useEffect(() => {
    // Check if the "conversations" key exists in local storage
    const existingConversations = localStorage.getItem('conversations');

    // If it doesn't exist, create an empty array and store it in local storage
    if (!existingConversations) {
      const emptyConversations = [];
      localStorage.setItem('conversations', JSON.stringify(emptyConversations));
    }
  }, []);

  return (
    <>
      {/* <IndexNavbar fixed /> */}

      
<div class="flex h-screen antialiased text-gray-800">
    <div class="flex flex-row h-full w-full overflow-x-hidden">
      
      <ChatSideBar/>
      <ChatBody/>
      
    </div>
  </div>

      {/* <Footer /> */}
    </>

  );
}