"use client";

import Vapi from "@vapi-ai/web";

const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_API_KEY!);

export default function Page() {
  const startCall = () => {
    vapi.start(process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID!);
  };

  return (
    <div className="p-6">
      <button
        onClick={startCall}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Start AI Call
      </button>
    </div>
  );
}