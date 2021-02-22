
import ACMLogo from "../../assets/footer/ACMLogo.svg";
import VITLogo from "../../assets/footer/VITLogo.svg";
import "./FooterSection.css";
import icons from './footerdata'


const IconComponent = ({src,link}) => {
    return (
        <a className="mainIcon" href={link} rel="noreferrer" target="_blank" >
             <img src={src} alt="icon"/>
        </a>
    );
}

const FooterSection = () => {
  return (
      <article className="footer">
          <img src={ACMLogo} className="acmlogo" alt="logo"/>
          <div className="icons">
              {icons.map((icon,key)=>(
                  <IconComponent key={key} src={icon.src} link={icon.link}/>
              ))}
          </div>
          <img src={VITLogo} className="vitlogo" alt="logo"/>
      </article>
  
  );
};

export default FooterSection;