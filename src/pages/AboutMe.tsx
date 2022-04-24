import React, { ReactElement } from "react";
import "../styles/AboutMe.css";
import { CodeSnippet } from "carbon-components-react";
import SocialCard from "../components/SocialCard";
import ContactCard from '../components/ContactCard';

export default function AboutMe(): ReactElement {
  return (
    <div className='abutMeWrapper' >
      <h1 className="frontEndText">{"</> "}Back end Web Developer</h1>
      <div>
        <h2 className="name">Hi, i'm Elvis!</h2>
      </div>
      <div className='converAndContactWrapper'>
        <p className="cover-letter">
          Passionate backend web developer with a handful of opulent skills
          that go way beyond coding, such as a great ability to speak my mind,
          extremely proactive, and addicted to problem solving{" "}
        </p>
        <div className="socialCards">
          <div className="socialCard">
            <SocialCard
              socialImg={"logo--linkedin.svg"}
              name={"Elvis Gilbert Batista Pimentel"}
              link={
                "https://www.linkedin.com/in/elvis-gilbert-batista-pimentel-82b489207/"
              }
              active={true}
              
            />
          </div>
          <div className="socialCard">
            <SocialCard
              socialImg={"logo--github.svg"}
              name={"Kakuhiry"}
              link={"https://www.github.com/Kakuhiry"}
              active={true}

            />
          </div>
          <div className="socialCard">
            <SocialCard
              socialImg={"email.svg"}
              name={"GilbertBatista.k@gmail.com"}
              link={"#"}
              active={false}
            />
          </div>
          <div className="socialCard">
            <SocialCard
              socialImg={"phone.svg"}
              name={"+1 (829)-355-8895"}
              link={"#"}
              active={false}

            />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "1%" }}>
        <h4>My skillset: </h4>
        <div className="snipperGrid">
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Typescript"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"GraphQL"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Type-GraphQL"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Apollo-Server"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"TypeORM"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Express"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Git"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Postgres"}
          </CodeSnippet>
          <CodeSnippet className="codeSnipped" disabled type="inline">
            {"Docker"}
          </CodeSnippet>
        </div>
      </div>
      {/* <img style={{height: '25%', width: '25%', position: 'relative', bottom: 90,  marginLeft: '15%'}} src={require('../../Assets/mern_logo.png').default} alt=""/> */}
    </div>
  );
}