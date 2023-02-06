import React, { useState } from "react";
import DetailPanel from "./DetailPanel";
import ConversationMessages from "./ConversationMessages";

const MessageBody = () => {
  return (
    <div className="border-l border-r w-full">
      <DetailPanel />
      <ConversationMessages />
    </div>
  );
};

export default MessageBody;
