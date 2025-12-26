"use client";
import { FC } from "react";
import { CgClose } from "react-icons/cg";

interface QRModalProps {
  url: string;
  onClose: () => void;
}

const QRModal: FC<QRModalProps> = ({ url, onClose }) => {
  const encodedUrl = encodeURIComponent(url);

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl relative flex flex-col gap-4 w-75 justify-center items-center">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl font-bold cursor-pointer"
        >
          <CgClose />
        </button>

        {/* <div className="size-55 bg-[red]"></div> */}
        {/* use red div for loading if qr code is not there  */}
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodedUrl}`}
          alt="QR Code"
          className="mx-auto"
        />
        <h3 className="text-center font-bold">Scan to Open on other device.</h3>
      </div>
    </div>
  );
};

export default QRModal;
