import { siteContent } from "../content/siteContent";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footerTop">
          <div className="footerBrand">
            <div className="footerLogoWrapper">
              <Logo className="footerLogo" />
            </div>
            <p className="footerTagline">{siteContent.brand.tagline}</p>
            <div className="footerSocials">
              <a href={siteContent.contact.social.linkedin} aria-label="LinkedIn"><Icon name="linkedin" /></a>
              <a href={siteContent.contact.social.twitter} aria-label="Twitter"><Icon name="twitter" /></a>
              <a href={siteContent.contact.social.github} aria-label="GitHub"><Icon name="github" /></a>
              <a href={siteContent.contact.social.instagram} aria-label="Instagram"><Icon name="instagram" /></a>
            </div>
          </div>

          <div className="footerLinks">
            <div className="footerCol">
              <h4>Services</h4>
              <ul>
                {siteContent.services.cards.slice(0, 4).map(s => (
                  <li key={s.title}><a href="#services">{s.title}</a></li>
                ))}
              </ul>
            </div>
            <div className="footerCol">
              <h4>Company</h4>
              <ul>
                <li><a href="#work">Portfolio</a></li>
                <li><a href="#process">Process</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footerCol">
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href={siteContent.contact.callLink} className="contactRow">
                    <Icon name="phone" size={16} /> {siteContent.contact.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteContent.contact.email}`} className="contactRow">
                    <Icon name="mail" size={16} /> {siteContent.contact.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footerBottom">
          <div className="footerCopy">
            © {year} {siteContent.brand.name}. All rights reserved.
          </div>
          <div className="footerLegal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
