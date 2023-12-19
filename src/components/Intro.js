import React from 'react';

import {introData} from "../constants";

const Intro = () => {
  return (
    <section id={"intro"}>
      {/* 언더바 두 개는 BEM 네이밍 규칙에 따른 것 */}
      <div className={"intro__inner"}>
        <h2 className={"intro__title"}>
          {introData.title}
        </h2>
        <ul className={"intro__portfolio"}>
          {introData.desc.map((elem, index) => {
            return (
              <li className={"intro__portfolio__item"}>
                <a href={elem.link}>
                  <img src={elem.img} alt={elem.name} />
                </a>
              </li>
            );
          })}
        </ul>

      </div>
    </section>
  );
};

export default Intro;