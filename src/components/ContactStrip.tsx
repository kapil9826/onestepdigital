import { siteContent } from "../content/siteContent";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

export function ContactStrip() {
  return (
    <section className="strip">
      <div className="container stripInner">
        <Reveal direction="left">
          <div className="stripText">
            <h2>Ready to transform your business?</h2>
            <p>Get a free consultation and project proposal within 24 hours.</p>
          </div>
        </Reveal>
        <Reveal direction="right" delay={0.2}>
          <div className="stripActions">
            <a className="btn btnPrimary" href={siteContent.contact.whatsAppLink}>
              <Icon name="whatsapp" />
              Chat on WhatsApp
            </a>
            <a className="btn btnGhost stripGhost btnLg" href={siteContent.contact.callLink}>
              <Icon name="phone" />
              Call Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
