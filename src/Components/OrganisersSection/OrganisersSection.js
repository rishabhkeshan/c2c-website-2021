import React, { useEffect,useRef } from 'react'
//import Ticker from "react-ticker";
import organisers from './oragnisersdata'
//import Marquee from "react-fast-marquee";


import './OrganisersSection.css'
const Organiser = ({pic,name,position})=>{
    return (
    <section className="board_member">
        <img src={pic} alt={name}/>
        <h3>{name}</h3>
        <p>{position}</p>
    </section>
    );
}
const OrganisersSection = ({ scrollOrganizers }) => {
  const slider = useRef(null);
  useEffect(() => {}, []);
  return (
    <article className="orgSection" ref={scrollOrganizers}>
      <h1 className="orgTitle">Organisers</h1>
      <article className="orgContainer">
        <section className="slider" ref={slider}>
          {organisers.map((organiser, key) => (
            <Organiser
              key={key}
              pic={organiser.pic}
              name={organiser.name}
              position={organiser.position}
            />
          ))}
        </section>
      </article>
      {/* <Marquee play={true} direction="left" speed={20} className="bg-gray">
          <h1 className="bg-blue">
            I can be a React component, multiple React components, or just some
            text.
          </h1>
        </Marquee> */}
    </article>
  );
};

export default OrganisersSection;
