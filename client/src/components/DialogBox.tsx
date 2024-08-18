import React, { FC, ReactNode } from "react";

type DialogBoxProps = {
  uid: string;
  title: string;
  description: string;
  children: ReactNode;
};
const DialogBox: FC<DialogBoxProps> = ({
  children,
  uid,
  title,
  description,
}) => {
  return (
    <dialog id={uid} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="py-4 font-normal">{description}</p>
        <div className="modal-action">
          <form method="dialog" className="flex gap-2">
            {children}
            <button className="btn">Cancel</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};
export default DialogBox;
