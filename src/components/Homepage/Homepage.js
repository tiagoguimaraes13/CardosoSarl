import React from 'react';
import Video from '../../assets/video.mp4';
import pg1 from '../../assets/pg1.png';
import pg2 from '../../assets/pg2.png';
import pg3 from '../../assets/pg3.png';
import pg4 from '../../assets/pg4.png';
import pg5 from '../../assets/pg5.png';
import pg6 from '../../assets/pg6.png';
import './Homepage.css';

const projects = [
  {
    id: 1,
    image: pg1,
    title: "Création d'un lac et d'un escalier avec chemin",
    // path: "/projects/amenagement-paysager"
  },
  {
    id: 2,
    image: pg2,
    title: "Création des palissades avec des panneaux Boston PREMIUM Light Grey et décor HERA horizontal.",
    //path: "/projects/espaces-verts"
  },
  {
    id: 3,
    image: pg3,
    title: "Rénovation et agrandissement de terrasse avec une forme de pose choisi par les clients.",
    //path: "/projects/jardin-moderne"
  },
  {
    id: 4,
    image: pg4,
    title: "Création d'une terrasse en pavés nuancés.",
    //path: "/projects/systemes-irrigation"
  },
  {
    id: 5,
    image: pg5,
    title: "Installation de gazon synthétique.",
    //path: "/projects/terrasse"
  },
  {
    id: 6,
    image: pg6,
    title: "Pose d'une pallissade Boston PREMIUM Drak Grey",
    //path: "/projects/espaces-detente"
  }
];

const services = [
  {
    id: 1,
    title: "Architecture paysagère",
    description: "Nous transformons votre jardin de rêve en une merveilleuse réalité"
  },
  {
    id: 2,
    title: "Construction",
    description: "Vous rêvez, nous construisons."
  },
  {
    id: 3,
    title: "Maintenance",
    description: "La perfection ne se atteint pas qu'une seule fois, c'est un processus à maintenir tout au long de l'année."
  }
];

const Homepage = () => {
  const [category, setCategory] = React.useState('Tous');
  const [preview, setPreview] = React.useState(false);
  const filters = ['Tous', 'Terrasses', 'Clôtures', 'Jardins'];
  const categories = ['Jardins', 'Clôtures', 'Terrasses', 'Terrasses', 'Jardins', 'Clôtures'];
  return <div className="landscape-home">
    <section id="home" className="landscape-hero">
      <video src={Video} autoPlay loop muted playsInline aria-hidden="true" poster={pg1} />
      <div className="landscape-hero-copy">
        <p className="landscape-eyebrow">CARDOSO SARL · CONCEPT INDÉPENDANT</p>
        <h1>Un extérieur.<br />Mille possibilités.</h1>
        <p>Des jardins aux terrasses, imaginez un espace qui vous ressemble.</p>
        <a className="landscape-button" href="#projects">Découvrir les projets ↗</a>
        <a className="landscape-text-link" href="#contact">Imaginer votre projet →</a>
      </div>
    </section>
    <aside className="concept-note">Concept de site réalisé par TOIMU. Projet non commandé : cette démonstration ne reçoit aucune demande commerciale.</aside>
    <section id="services" className="landscape-section">
      <p className="landscape-eyebrow">01 / NOS PRESTATIONS</p>
      <div className="landscape-heading"><h2>De l'idée au jardin.</h2><p>Une présentation des solutions pour aménager, construire et entretenir les espaces extérieurs.</p></div>
      <div className="landscape-services">{services.map((service, index) => <article key={service.id}><span>0{index + 1}</span><h3>{service.title === 'Maintenance' ? 'Entretien' : service.title}</h3><p>{index === 2 ? "Un extérieur soigné, au fil des saisons." : service.description}</p><a href="#contact">Parlons de votre projet →</a></article>)}</div>
    </section>
    <section id="projects" className="landscape-section landscape-work">
      <p className="landscape-eyebrow">02 / INSPIRATIONS</p><h2>Des espaces à vivre.</h2>
      <div className="landscape-filters" aria-label="Filtrer les projets">{filters.map(filter => <button key={filter} aria-pressed={category === filter} onClick={() => setCategory(filter)}>{filter}</button>)}</div>
      <div className="landscape-projects">{projects.filter((project) => category === 'Tous' || categories[project.id - 1] === category).map(project => <article key={project.id}><img src={project.image} alt={project.title} loading="lazy" /><p className="landscape-eyebrow">{categories[project.id - 1]}</p><h3>{project.title}</h3></article>)}</div>
    </section>
    <section id="contact" className="landscape-section landscape-contact">
      <div><p className="landscape-eyebrow">03 / VOTRE PROJET</p><h2>Et si tout commençait<br />par une idée ?</h2><p>Essayez le formulaire avec des données fictives. Aucun message n'est envoyé ni conservé après fermeture de la page.</p></div>
      <form onSubmit={event => { event.preventDefault(); setPreview(true); }} onChange={() => setPreview(false)}>
        <label>Votre nom<input name="name" autoComplete="off" required /></label>
        <label>Votre email<input type="email" name="email" autoComplete="off" required /></label>
        <label>Votre projet<select name="service"><option>Aménagement de jardin</option><option>Terrasse</option><option>Clôture</option><option>Entretien</option></select></label>
        <label>Votre idée<textarea name="message" rows="4" required /></label>
        <button className="landscape-button" type="submit">Tester la demande →</button>
        {preview && <p role="status">Démonstration terminée. Aucun message n'a été envoyé.</p>}
      </form>
    </section>
  </div>;
};

export default React.memo(Homepage);
