import { useState } from "react";

export default function LandingPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-12 text-center">
      <h1 className="text-5xl font-extrabold mb-4">Fudii</h1>
      <p className="text-lg text-gray-600 mb-6 italic">
        Where Foodies Feed the Feed 🍴
      </p>
      <p className="text-md text-gray-700 max-w-xl mb-8">
        Discover, share, and recreate amazing food videos in a swipeable feed built just for food lovers.
      </p>
      <a
        href="https://fudii.replit.app/feed"
        className="bg-black text-white text-lg px-6 py-3 rounded-2xl shadow-lg hover:bg-gray-800 transition mb-8"
      >
        Enter the App
      </a>

      <div className="w-full max-w-sm">
        <p className="text-sm text-gray-400 mb-2">Want early creator access? Join our waitlist:</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full px-4 py-2 rounded border border-gray-300 mb-2"
        />
        <button
          onClick={() => alert(`Thanks, ${email}! You’re on the waitlist.`)}
          className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Join Waitlist
        </button>
      </div>

      <footer className="mt-12 text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Fudii. All rights reserved.
      </footer>
    </div>
  );
}
