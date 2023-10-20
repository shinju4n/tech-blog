"use client";
import { type FC } from "react";

const Aside: FC = () => {
  return (
    <aside className="bg-pink-200 p-[2rem] rounded min-h-[calc(90vh)] min-w-[350px]">
      <div className="flex flex-col gap-2 transition-all">
        <section id="aside-logo" className="w-full h-[150px] bg-white">
          <span>logo</span>
        </section>
        <section id="aside-menu" className="w-full min-h-[500px] bg-white">
          <span>menu</span>
        </section>
      </div>
    </aside>
  );
};

export default Aside;
