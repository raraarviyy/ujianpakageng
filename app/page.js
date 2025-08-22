'use client'

import { useState } from "react";

export default function InputMirror() {
  const [teks, setTeks] = useState("");

  const handleChange = (e) => {
    setTeks(e.target.value);
  };

  return (
    <div className="p-4 flex flex-col items-center mt-[50px]">
      <label className="block text-sm font-medium mb-2">Ketik Sesuatu:</label>
      <input
        type="text"
        placeholder="Misalnya: Halo Dunia"
        value={teks}
        onChange={handleChange}
        className="border border-blue-500 rounded px-3 py-2 w-[200px] h-10 text-center"
      />

      <p className="mt-4 text-gray-700">
        Kamu mengetik:{" "}
        <span className="font-semibold text-pink-500">{teks}</span>
      </p>
    </div>
  );
}
