import React from "react";
import { FaReact, FaSass } from "react-icons/fa";

function Skills(props) {
  return (
    <div className="box">
      <h1 className="title">MY SKILL SET</h1>
      <div className="flex1">
        <div className="skill flex  ">
          <div className="circle ">
            <FaReact
              size="2.0em"
              style={{
                width: "100%",
                verticalAlign: "middle",
                color: "#61DAFB",
              }}
            />
          </div>
          <div className="text">
            <h2>Front-end React</h2>
            <p> Typescript, Redux, Redux thunk, Vue, Vuex, Gatsby</p>
          </div>
        </div>

        <div className="skill flex  ">
          <div className="circle ">
            <FaSass
              size="2.0em"
              style={{
                width: "100%",
                verticalAlign: "middle",
                color: "#61DAFB",
              }}
            />
          </div>
          <div className="text">
            <h2>Style/Library</h2> <p>CSS, SASS, Material UI, Bootstrap</p>
          </div>
        </div>
        <div className="skill flex  ">
          <div className="circle ">
            {/* <FaReact
              size="2.0em"
              
            /> */}

            <svg
              style={{
                verticalAlign: "middle",
                color: "#61DAFB",
                margin: "25px auto",
                height: "15px",
                width: "100%",
              }}
              viewBox="0 0 42 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.168 0.799999V8.32C0.168 8.93867 0.264 9.49333 0.456 9.984C0.658667 10.4747 0.941333 10.8907 1.304 11.232C1.66667 11.5733 2.09867 11.8347 2.6 12.016C3.10133 12.1973 3.65067 12.288 4.248 12.288C4.84533 12.288 5.39467 12.1973 5.896 12.016C6.39733 11.8347 6.82933 11.5733 7.192 11.232C7.55467 10.8907 7.832 10.4747 8.024 9.984C8.22667 9.49333 8.328 8.93867 8.328 8.32V0.799999H6.44V8.24C6.44 8.69867 6.35467 9.104 6.184 9.456C6.024 9.79733 5.77867 10.064 5.448 10.256C5.128 10.448 4.728 10.544 4.248 10.544C3.768 10.544 3.36267 10.448 3.032 10.256C2.712 10.064 2.46667 9.79733 2.296 9.456C2.136 9.104 2.056 8.69867 2.056 8.24V0.799999H0.168ZM16.556 0.799999L14.412 4.592L12.316 0.799999H10.028L13.34 6.176L9.628 12H11.916L14.396 7.696L16.796 12H19.1L15.468 6.176L18.86 0.799999H16.556Z"
                fill="#A7FBB7"
              ></path>
              <path
                d="M26.1148 0.799999L19.4588 14.4H21.2028L27.8268 0.799999H26.1148ZM29.2149 0.799999V8.32C29.2149 8.93867 29.3109 9.49333 29.5029 9.984C29.7055 10.4747 29.9882 10.8907 30.3509 11.232C30.7135 11.5733 31.1455 11.8347 31.6469 12.016C32.1482 12.1973 32.6975 12.288 33.2949 12.288C33.8922 12.288 34.4415 12.1973 34.9429 12.016C35.4442 11.8347 35.8762 11.5733 36.2389 11.232C36.6015 10.8907 36.8789 10.4747 37.0709 9.984C37.2735 9.49333 37.3749 8.93867 37.3749 8.32V0.799999H35.4869V8.24C35.4869 8.69867 35.4015 9.104 35.2309 9.456C35.0709 9.79733 34.8255 10.064 34.4949 10.256C34.1749 10.448 33.7749 10.544 33.2949 10.544C32.8149 10.544 32.4095 10.448 32.0789 10.256C31.7589 10.064 31.5135 9.79733 31.3429 9.456C31.1829 9.104 31.1029 8.69867 31.1029 8.24V0.799999H29.2149ZM39.7949 0.799999V12H41.6989V0.799999H39.7949Z"
                fill="#B98FC6"
              ></path>
            </svg>
          </div>
          <div className="text">
            <h2>UX/UI</h2> <p>Typescript, Vuex, Gatsby</p>
          </div>
        </div>
        <div className="skill flex  ">
          <div className="circle ">
            {/* <FaFigma
              size="2.0em"
              style={{
                width: "100%",
                verticalAlign: "middle",
                color: "#61DAFB",
              }}
            /> */}

            <svg
              style={{
                verticalAlign: "middle",
                color: "#61DAFB",
                margin: "12px auto",
                height: "33",
                width: "100%",
              }}
              viewBox="0 0 34 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.33333 50C12.9333 50 16.6667 46.2667 16.6667 41.6667V33.3334H8.33333C3.73333 33.3334 0 37.0667 0 41.6667C0 46.2667 3.73333 50 8.33333 50Z"
                fill="#0ACF83"
              ></path>
              <path
                d="M0 25C0 20.4 3.73333 16.6666 8.33333 16.6666H16.6667V33.3333H8.33333C3.73333 33.3333 0 29.6 0 25Z"
                fill="#A259FF"
              ></path>
              <path
                d="M0 8.33333C0 3.73333 3.73333 0 8.33333 0H16.6667V16.6667H8.33333C3.73333 16.6667 0 12.9333 0 8.33333Z"
                fill="#F24E1E"
              ></path>
              <path
                d="M16.6665 0H24.9998C29.5998 0 33.3332 3.73333 33.3332 8.33333C33.3332 12.9333 29.5998 16.6667 24.9998 16.6667H16.6665V0Z"
                fill="#FF7262"
              ></path>
              <path
                d="M33.3332 25C33.3332 29.6 29.5998 33.3333 24.9998 33.3333C20.3998 33.3333 16.6665 29.6 16.6665 25C16.6665 20.4 20.3998 16.6666 24.9998 16.6666C29.5998 16.6666 33.3332 20.4 33.3332 25Z"
                fill="#1ABCFE"
              ></path>
            </svg>
          </div>
          <div className="text">
            <h2>Tools</h2> <p>Figma, Draw.io, Adobe suite, Jira</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
