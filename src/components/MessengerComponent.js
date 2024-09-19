import React from 'react';

function MessengerComponent() {
  return (
    <div className="w-full">
      <div className="flex flex-row gap-4 justify-start items-start px-4 py-1 hover:bg-gray-800 hover:bg-opacity-30">
        <img
          src="/imgs/img-ex.png"
          alt="Example"
          className="size-10 rounded-full border-1 border-x-white"
        />
        <div className="flex flex-col gap-1">
          <p className="flex flex-row items-baseline gap-2">
            <span className="text-sm text-green-600 font-medium">
              Sebastian Pertuz
            </span>
            <span className="text-xs text-gray-500">19 sep 2024</span>
          </p>
          <p className="text-gray-300 text-balance">
            Get acquainted with Tailwind's utility-first approach by building a
            custom message component.Get acquainted with Tailwind's
            utility-first approach by building a custom message component.Get
            acquainted with .
          </p>
        </div>
      </div>
      <div className="group flex flex-row gap-4  justify-start items-start px-4 py-1 hover:bg-gray-800 hover:bg-opacity-30">
        <p className="text-xs text-gray-500 text-nowrap -mr-1 opacity-0 group-hover:opacity-100">
          5:34p.m
        </p>

        <p className="text-gray-300 text-balance">
          Get acquainted with Tailwind's utility-first approach by building a
          custom message component.Get acquainted with Tailwind's utility-first
          approach by building a custom message component.Get acquainted with .
        </p>
      </div>
    </div>
  );
}

export default MessengerComponent;
