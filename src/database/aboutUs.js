/* import aboutUsPeopleIMG1 from './img/nomefoto.png'
import aboutUsPeopleIMG2 from './img/nomefoto.png'
import aboutUsPeopleIMG3 from './img/nomefoto.png'
 */// aggiornare foto da aggiungere in cartella img

export const aboutUs = { 
  title: "Chi Siamo",
  content: "Belpress Srl è un’impresa familiare con oltre trent’anni di esperienza nella metallurgia, nata negli anni ’90 in Franciacorta. Specializzata nella pressofusione di alluminio e leghe non ferrose (zama e ottone), offre un servizio completo: progettazione e realizzazione di stampi su misura, campionature e produzione di pezzi finiti conformi alle specifiche. L’azienda unisce competenza tecnica e cura artigianale per trasformare progetti in soluzioni di qualità."
};

export const aboutUsPeople = [
  {
    id: 1,
    name: "Sergio Belotti",
    role: "CEO",
    bio: "Sergio ha 25 anni di esperienza nel settore della metallurgia.",
    //image: aboutUsPeopleIMG1,
  },
  {
    id: 2,
    name: "Andrea Belotti",
    role: "CTO",
    bio: "Luigi ha 20 anni di esperienza nel settore della metallurgia.",
   // image: aboutUsPeopleIMG2,
  },
  {
    id: 3,
    name: "Luciana Belotti",
    role: "CFO",
    bio: "Luciana ha 15 anni di esperienza nel settore della metallurgia.",
    //image: aboutUsPeopleIMG3,
  }
];
/*
ho creato la pagina database da dove prenderò le info da inserire in vue. In questa pagina specifica ho creato degli array di oggetti che contengono le persone che lavorano nell'azienda, con le loro informazioni.
*/