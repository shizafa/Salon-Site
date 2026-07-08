import bridalMakeup from '../assests/bridalMakeup.webp';
import hairServices from '../assests/hairServices.webp';
import faceTreatments from '../assests/faceTreatments.jpg';
import bodyTreatments from '../assests/bodyTratments.webp';
import maniPedi from '../assests/ManiPedi.webp';
import waxingThreading from '../assests/waxingTreading.jpg';

const services = [
  {
    name: "Bridal & Makeup",
    slug: "bridal-makeup",
    path: "/bridal-makeup",
    image: bridalMakeup,
    desc: "Full bridal looks, trials and party makeup.",
    size: "large",
  },
  {
    name: "Hair Services",
    slug: "hair-services",
    path: "/hair-services",
    image: hairServices,
    desc: "Cuts, colour, styling and treatments.",
    size: "wide",
  },
  {
    name: "Face Treatments",
    slug: "face-treatments",
    path: "/face-treatments",
    image: faceTreatments,
    desc: "Facials and skin care, tailored to you.",
    size: "normal",
  },
  {
    name: "Body Treatments",
    slug: "body-treatments",
    path: "/body-treatments",
    image: bodyTreatments,
    desc: "Massage and body care that resets you.",
    size: "normal",
  },
  {
    name: "Manicure & Pedicure",
    slug: "manicure",
    path: "/manicure",
    image: maniPedi,
    desc: "Shape, cuticle care and polish, done neatly.",
    size: "wide",
  },
  {
    name: "Waxing, Threading & Polish",
    slug: "waxing",
    path: "/waxing",
    image: waxingThreading,
    desc: "Quick, clean, and no-fuss upkeep.",
    size: "wide",
  },
];

export default services;