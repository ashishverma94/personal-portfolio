"use client";
import { FC } from "react";

interface QRModalProps {
  url: string;
  onClose: () => void;
}

const QRModal: FC<QRModalProps> = ({ url, onClose }) => {
  const encodedUrl = encodeURIComponent(url);

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl relative w-[300px]">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl font-bold"
        >
          ×
        </button>

        <h3 className="text-center font-bold mb-4">Scan to Open</h3>

        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodedUrl}`}
          alt="QR Code"
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default QRModal;
