import React, { useState, useEffect, useContext } from "react";
import { isTyping, ScrollDownBar } from 'react-chat-engine';
import { IsTyping } from 'react-chat-engine';


import { Context } from "../context";

import dynamic from "next/dynamic";
import { useRouter } from "next/router";

{/* <title>ayechat</title> */}

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);

export default function Home() {
  const { username, secret } = useContext(Context);
  const [showChat, setShowChat] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof document !== undefined) {
      setShowChat(true);
    }
  }, []);

  useEffect(() => {
    if (username === "" || secret === "") {
      router.push("/");
    }
  }, [username, secret]);

  if (!showChat) return <div />;

  return (
    <div className="background">
      <div className="shadow">
        <ChatEngine
          height="calc(100vh - 200px)"
          projectID="4ea9829e-bb05-458c-b06b-68a444a4084e"
          userName={username}
          userSecret={secret}
          renderNewMessageForm={() => <MessageFormSocial />}
          IsTyping={()=>isTyping}
        />
      </div>
    </div>
  );
}
