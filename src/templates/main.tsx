import React from "react";
import "../app/globals.css";

interface ChildrenProps {
  children: React.ReactNode;
}

export default function MainTemplate({ children }: ChildrenProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-around">
      <h1 className="text-3xl font-bold text-center">Next 13 Playground Test</h1>
      {children}
    </div>
  );
}
