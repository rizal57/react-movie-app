import React from 'react';

const Card = (props) => {
  const { children } = props;
  return <div className="card relative w-[300px] h-auto rounded-lg overflow-hidden group">{children}</div>;
};

function Img(props) {
  const { src } = props;
  return (
    <div>
      <img src={src} alt="Img" className="object-cover scale-110 group-hover:scale-100 transition-all w-full duration-300" />
    </div>
  );
}

function Body(props) {
  const { title, year, ratting } = props;
  return (
    <div className="bg-gradient-to-t from-slate-900 to-transparent absolute w-full px-2 py-1 bottom-0 left-0">
      <div className="flex flex-col">
        <h1 className="font-semibold md:text-2xl">{title}</h1>
        <div className="flex items-center justify-between">
          <span className="text-sm">{year}</span>
          <span className="text-xs font-semibold w-6 h-6 rounded-full flex items-center justify-center bg-orange-500">{ratting}</span>
        </div>
      </div>
    </div>
  );
}

Card.Img = Img;
Card.Body = Body;

export default Card;
