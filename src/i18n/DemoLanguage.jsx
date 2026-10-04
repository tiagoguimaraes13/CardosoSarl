import React, {createContext, useContext, useEffect, useMemo, useState} from 'react';
import dictionary from './demo-translations.json';
import './demo-language.css';
export const demoLanguages = {en:'English',et:'Eesti',ru:'Русский',fi:'Suomi',fr:'Français'};
const storageKey='toimu-demo-language';
const Context=createContext({language:'fr',tr:(text,variables)=>translateDemo(text,"fr",variables),setLanguage:()=>{}});
export function translateDemo(text,language='fr',variables={}) {
 if(typeof text!=='string')return text;
 const translated=dictionary[text]?.[language] || text;
 return translated.replace(/\{(\w+)\}/g,(match,key)=>Object.prototype.hasOwnProperty.call(variables,key)?String(variables[key]):match);
}
export function DemoLanguageProvider({children}) {
 const [language,setLanguage]=useState(()=>{try {const url=new URL(window.location.href);const requested=url.searchParams.get('lang');if(demoLanguages[requested])return requested;const saved=localStorage.getItem(storageKey);return demoLanguages[saved]?saved:'fr';}catch{return 'fr';}});
 useEffect(()=>{document.documentElement.lang=language;document.title='Cardoso Sarl — '+translateDemo("Website concept",language);try{localStorage.setItem(storageKey,language);const url=new URL(window.location.href);if(url.searchParams.has('lang')&&url.searchParams.get('lang')!==language){url.searchParams.set('lang',language);window.history.replaceState(window.history.state,'',url.pathname+url.search+url.hash);}}catch{}},[language]);
 const value=useMemo(()=>({language,setLanguage:(next)=>{if(demoLanguages[next])setLanguage(next)},tr:(text,variables)=>translateDemo(text,language,variables)}),[language]);
 return <Context.Provider value={value}>{children}<DemoStorageNote /></Context.Provider>;
}
export function useDemoLanguage(){return useContext(Context);}
export function DemoLanguageSwitcher(){const {language,setLanguage,tr}=useDemoLanguage();return <label className="demo-language"><span className="demo-sr-only">{tr('Website language')}</span><select aria-label={tr('Website language')} value={language} onChange={e=>setLanguage(e.target.value)}>{Object.entries(demoLanguages).map(([code,name])=><option value={code} lang={code} key={code}>{name}</option>)}</select></label>;}
export function DemoStorageNote(){const {tr}=useDemoLanguage();return <p className="demo-storage-note">{tr('Only your language preference is saved in this browser. Demo form details and carts are not saved.')}</p>;}
