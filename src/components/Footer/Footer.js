import './Footer.css';
import { useDemoLanguage } from "../../i18n/DemoLanguage";
import React from 'react';
export const Footer = () => {
  const {
    tr
  } = useDemoLanguage();
  return <footer style={{
    background: '#263c30',
    color: '#fff',
    padding: '48px 6%',
    lineHeight: 1.8
  }}><h2 style={{
      fontFamily: 'Georgia, serif'
    }}>{tr("Cardoso Sarl \xB7 Concept de site")}</h2><p>{tr("Concept ind\xE9pendant r\xE9alis\xE9 par TOIMU Technologies O\xDC. Ce site n'est pas le site officiel de l'entreprise.")}</p><nav aria-label={tr("Navigation de pied de page")} style={{
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap'
    }}><a style={{
        color: 'inherit'
      }} href="/#projects">{tr("Projets")}</a><a style={{
        color: 'inherit'
      }} href="/#services">{tr("Prestations")}</a><a style={{
        color: 'inherit'
      }} href="/#contact">{tr("Formulaire de d\xE9monstration")}</a></nav><p>{tr("Aucun formulaire n'envoie de donn\xE9es. Aucune carte externe n'est int\xE9gr\xE9e.")}</p></footer>;
};
