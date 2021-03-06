import './SponsorsSection.css';
import data from './sponserdata'
import {
  Fade,
  Zoom,
  Flip,
  Rotate,
  Bounce,
  Slide,
  Roll,
  LightSpeed,
} from "react-reveal";
import TitleSponsor from "../../assets/prepbytes.svg";


const Sponser = ({name,imgsrc,info,url}) => {
  return (
    <a className="logos sponsor " href={url} rel="noreferrer" target="_blank">
        <img className={name} src={imgsrc} alt={`${name} logo`} />
        <p className={`${name}_p`}>{info}</p>
    </a>
  );
}



const SponsorsSection = ({scrollSponsors})=>{
  return (
    <article className="sponsorsection" ref={scrollSponsors}>
      <h1 className="titlesponsorhead">Title Sponsor</h1>
      <div className="titlesponsorsinner">
        <a
          className=" logos sponsor title_sponsor"
          href="https://www.prepbytes.com/"
          rel="noreferrer"
          target="_blank"
        >
          <img src={TitleSponsor} alt={`Prepbytes logo`} />
          <p>
            Mentorship driven personalized coding learning and placement
            preparation platform
          </p>
        </a>
      </div>
      <h1 className="sponsorhead">Sponsors</h1>
      <div className="sponsorsinner">
        {data.map((sponser, key) => (
          <Sponser
            key={key}
            name={sponser.name}
            imgsrc={sponser.src}
            info={sponser.info}
            url={sponser.url}
          />
        ))}
      </div>
    </article>
  );
}

export default SponsorsSection