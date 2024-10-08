import { createContext, useContext, useRef, useState } from "react";
interface CommentInputProps {
  children: React.ReactNode;
}
interface CommentInputContextProps {
  inputRef: React.MutableRefObject<HTMLDivElement | null>;
  pointerRef: React.MutableRefObject<HTMLInputElement | null>;
  replier: ReplierProps | null;
  setReplier: React.Dispatch<React.SetStateAction<ReplierProps | null>>;
}

const CommentInputContext = createContext<CommentInputContextProps | undefined>(
  undefined
);

export const useCommentInputContext = () => {
  const context = useContext(CommentInputContext);
  if (!context) {
    throw new Error(
      `${useCommentInputContext.name} must be used within a CommentProvider`
    );
  }
  return context;
};

import React from "react";
import { ReplierProps } from "../ReplyCommentProvider/types";

const CommentInputProvider: React.FC<CommentInputProps> = ({ children }) => {
  const inputRef = useRef<HTMLDivElement | null>(null);
  const pointerRef = useRef<HTMLInputElement | null>(null);
  const [replier, setReplier] = useState<ReplierProps | null>(null);

  return (
    <CommentInputContext.Provider
      value={{
        inputRef,
        pointerRef,
        replier,
        setReplier,
      }}
    >
      {children}
    </CommentInputContext.Provider>
  );
};

export default CommentInputProvider;
