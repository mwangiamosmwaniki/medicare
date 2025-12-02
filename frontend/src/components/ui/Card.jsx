import React from "react";

export function Card(props) {
  return (
    <div
      className={
        props.className +
        " bg-white rounded-lg border border-gray-200 shadow-md"
      }
    >
      {props.children}
    </div>
  );
}

export function CardContents(props) {
  return <div className="p-5">{props.children}</div>;
}
export function CardIcon(props) {
  <img
    src={props.children}
    alt="Icon"
    className="w-16 h-16 mx-auto mb-4 text-center items-center"
  />;
}
export function CardTitle(props) {
  return (
    <div className="mb-2 px-2 text-2xl font-semibold tracking-tight text-black">
      {props.children}
    </div>
  );
}
export function CardDescription(props) {
  return (
    <div className="mb-3 font-normal px-2 text-gray-800">{props.children}</div>
  );
}
export function CardActions(props) {
  return <div className="justify-center px-2">{props.children}</div>;
}
