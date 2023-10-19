import React, { useState, useEffect } from 'react';

export default function Conversation() {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    // Check if the "conversations" key exists in local storage
    const existingConversations = localStorage.getItem('conversations');

    // If it doesn't exist or is null, create an empty array
    const parsedConversations = existingConversations ? JSON.parse(existingConversations) : [];

    setConversations(parsedConversations);
  }, [conversations]);

  return (
    <>
      {conversations.map((item, index) => {
        if (item.messanger === "SENDER") {
          return (
            <div className="col-start-1 col-end-8 p-3 rounded-lg" key={index}>
              <div className="flex flex-row items-center">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                  A
                </div>
                <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                  <div>{item.message}</div>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="col-start-6 col-end-13 p-3 rounded-lg" key={index}>
              <div className="flex items-center justify-start flex-row-reverse">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                  A
                </div>
                <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                  <div>{item.message}</div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
}
