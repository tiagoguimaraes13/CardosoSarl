import './Homepage.css';
import { useDemoLanguage } from "../../i18n/DemoLanguage";
import React from 'react';
import Video from '../../assets/video.mp4';
import pg1 from '../../assets/pg1.png';
import pg2 from '../../assets/pg2.png';
import pg3 from '../../assets/pg3.png';
import pg4 from '../../assets/pg4.png';
import pg5 from '../../assets/pg5.png';
import pg6 from '../../assets/pg6.png';
const projects = [{
  id: 1,
  image: pg1,
  title: "Création d'un lac et d'un escalier avec chemin" // path: "/projects/amenagement-paysager"

}, {
  id: 2,
  image: pg2,
  title: "Création des palissades avec des panneaux Boston PREMIUM Light Grey et décor HERA horizontal." //path: "/projects/espaces-verts"

}, {
  id: 3,
  image: pg3,
  title: "Rénovation et agrandissement de terrasse avec une forme de pose choisi par les clients." //path: "/projects/jardin-moderne"

}, {
  id: 4,
  image: pg4,
  title: "Création d'une terrasse en pavés nuancés." //path: "/projects/systemes-irrigation"

}, {
  id: 5,
  image: pg5,
  title: "Installation de gazon synthétique." //path: "/projects/terrasse"

}, {
  id: 6,
  image: pg6,
  title: "Pose d'une pallissade Boston PREMIUM Drak Grey" //path: "/projects/espaces-detente"

}];
const services = [{
  id: 1,
  title: "Architecture paysagère",
  description: "Nous transformons votre jardin de rêve en une merveilleuse réalité"
}, {
  id: 2,
  title: "Construction",
  description: "Vous rêvez, nous construisons."
}, {
  id: 3,
  title: "Maintenance",
  description: "La perfection ne se atteint pas qu'une seule fois, c'est un processus à maintenir tout au long de l'année."
}];

const Homepage = () => {
  const {
    tr
  } = useDemoLanguage();
  const [category, setCategory] = React.useState('Tous');
  const [preview, setPreview] = React.useState(false);
  const filters = ['Tous', 'Terrasses', 'Clôtures', 'Jardins'];
  const categories = ['Jardins', 'Clôtures', 'Terrasses', 'Terrasses', 'Jardins', 'Clôtures'];
  return <div className="landscape-home">
    <section id="home" className="landscape-hero">
      <video src={Video} autoPlay loop muted playsInline aria-hidden="true" poster={pg1} />
      <div className="landscape-hero-copy">
        <p className="landscape-eyebrow">{tr("CARDOSO SARL \xB7 CONCEPT IND\xC9PENDANT")}</p>
        <h1>{tr("Un ext\xE9rieur.")}<br />{tr("Mille possibilit\xE9s.")}</h1>
        <p>{tr("Des jardins aux terrasses, imaginez un espace qui vous ressemble.")}</p>
        <a className="landscape-button" href="#projects">{tr("D\xE9couvrir les projets \u2197")}</a>
        <a className="landscape-text-link" href="#contact">{tr("Imaginer votre projet \u2192")}</a>
      </div>
    </section>
    <aside className="concept-note">{tr("Concept de site r\xE9alis\xE9 par TOIMU. Projet non command\xE9 : cette d\xE9monstration ne re\xE7oit aucune demande commerciale.")}</aside>
    <section id="services" className="landscape-section">
      <p className="landscape-eyebrow">{tr("01 / NOS PRESTATIONS")}</p>
      <div className="landscape-heading"><h2>{tr("De l'id\xE9e au jardin.")}</h2><p>{tr("Une pr\xE9sentation des solutions pour am\xE9nager, construire et entretenir les espaces ext\xE9rieurs.")}</p></div>
      <div className="landscape-services">{services.map((service, index) => {
          return <article key={service.id}><span>0{index + 1}</span><h3>{tr(service.title === 'Maintenance' ? 'Entretien' : service.title)}</h3><p>{tr(index === 2 ? "Un extérieur soigné, au fil des saisons." : service.description)}</p><a href="#contact">{tr("Parlons de votre projet \u2192")}</a></article>;
        })}</div>
    </section>
    <section id="projects" className="landscape-section landscape-work">
      <p className="landscape-eyebrow">{tr("02 / INSPIRATIONS")}</p><h2>{tr("Des espaces \xE0 vivre.")}</h2>
      <div className="landscape-filters" aria-label={tr("Filtrer les projets")}>{filters.map(filter => {
          return <button key={filter} aria-pressed={category === filter} onClick={() => setCategory(filter)}>{tr(filter)}</button>;
        })}</div>
      <div className="landscape-projects">{projects.filter(project => category === 'Tous' || categories[project.id - 1] === category).map(project => {
          return <article key={project.id}><img src={project.image} alt={project.title} loading="lazy" /><p className="landscape-eyebrow">{tr(categories[project.id - 1])}</p><h3>{tr(project.title)}</h3></article>;
        })}</div>
    </section>
    <section id="contact" className="landscape-section landscape-contact">
      <div><p className="landscape-eyebrow">{tr("03 / VOTRE PROJET")}</p><h2>{tr("Et si tout commen\xE7ait")}<br />{tr("par une id\xE9e ?")}</h2><p>{tr("Essayez le formulaire avec des donn\xE9es fictives. Aucun message n'est envoy\xE9 ni conserv\xE9 apr\xE8s fermeture de la page.")}</p></div>
      <form onSubmit={event => {
        event.preventDefault();
        setPreview(true);
      }} onChange={() => setPreview(false)}>
        <label>{tr("Votre nom")}<input name="name" autoComplete="off" required /></label>
        <label>{tr("Votre email")}<input type="email" name="email" autoComplete="off" required /></label>
        <label>{tr("Votre projet")}<select name="service"><option value={"Am\xE9nagement de jardin"}>{tr("Am\xE9nagement de jardin")}</option><option value={"Terrasse"}>{tr("Terrasse")}</option><option value={"Cl\xF4ture"}>{tr("Cl\xF4ture")}</option><option value={"Entretien"}>{tr("Entretien")}</option></select></label>
        <label>{tr("Votre id\xE9e")}<textarea name="message" rows="4" required /></label>
        <button className="landscape-button" type="submit">{tr("Tester la demande \u2192")}</button>
        {preview && <p role="status">{tr("D\xE9monstration termin\xE9e. Aucun message n'a \xE9t\xE9 envoy\xE9.")}</p>}
      </form>
    </section>
  </div>;
};

export default React.memo(Homepage);
