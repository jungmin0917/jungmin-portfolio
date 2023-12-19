import React from 'react';
import Main from "../components/Main";

const HomeView = () => {
  return (
    <>
      <Main>
        <div>
          <h1>황정민 포트폴리오</h1>
          <div className={"portfolio-link"}>
            <a href="https://knotted.jungmin.site/">노티드</a>
            <a href="https://kurly.jungmin.site/">컬리</a>
          </div>
        </div>
      </Main>
    </>
  );
};

export default HomeView;