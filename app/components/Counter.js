'use client';

import { useState } from "react";

export default function Counter() {
    // useState creates a variable that can change
    const [count, setCount] = useState(0);

    return(
        <div className="border rounded-lg p-4 text-center">
            <p className="text-2xl mb-4">Count: {count}</p>
            <button onClick={() => setCount(count +1)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Click Me! </button>
        </div>
    );
}