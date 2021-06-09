import { ReactElement, useState } from "react";
import { GetStaticProps } from "next";

type TimeLineProps = {
  userName: string;
};

export default function TimeLine({ userName }: TimeLineProps): ReactElement {
  return (
    <>
      <main>
        <h1>Esta es la página de Timeline {userName}</h1>
      </main>
      <Style />
    </>
  );
}
TimeLine.getInitialProps = () => {

return fetch('http://localhost:3000/api/hello')
.then(res => res.json())
.then(response => {
  console.log(response);
  return response
})
}
function Style() {
  return (
    <style jsx>
      {`
        main {
          width: 100%;
          height: 100vh;
          text-align: center;
          margin-top: -10vh;
          padding: 10vh 0;
        }
      `}
    </style>
  );
}
