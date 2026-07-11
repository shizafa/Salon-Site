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
    offerings: [
      { name: "Bridal Makeup (full)", price: "Rs 15,000" },
      { name: "Bridal Trial", price: "Rs 5,000" },
      { name: "Engagement Makeup", price: "Rs 8,000" },
      { name: "Nikkah Makeup", price: "Rs 10,000" },
      { name: "Walima Makeup", price: "Rs 12,000" },
      { name: "Party Makeup", price: "Rs 4,500" },
    ],
  },
  {
    name: "Hair Services",
    slug: "hair-services",
    path: "/hair-services",
    image: hairServices,
    desc: "Cuts, colour, styling and treatments.",
    size: "wide",
    offerings: [
      { name: "Haircut & Style", price: "Rs 1,500" },
      { name: "Hair Color (full)", price: "Rs 6,000" },
      { name: "Balayage / Highlights", price: "Rs 8,500" },
      { name: "Keratin Treatment", price: "Rs 9,000" },
      { name: "Hair Spa", price: "Rs 3,000" },
      { name: "Blow-dry", price: "Rs 1,200" },
    ],
  },
  {
    name: "Face Treatments",
    slug: "face-treatments",
    path: "/face-treatments",
    image: faceTreatments,
    desc: "Facials and skin care, tailored to you.",
    size: "normal",
    offerings: [
      { name: "Classic Facial", price: "Rs 1,800" },
      { name: "Brightening Facial", price: "Rs 2,500" },
      { name: "Anti-Aging Facial", price: "Rs 3,500" },
      { name: "Deep Cleansing Facial", price: "Rs 2,200" },
      { name: "Threading (full face)", price: "Rs 400" },
      { name: "Bleach", price: "Rs 600" },
    ],
  },
  {
    name: "Body Treatments",
    slug: "body-treatments",
    path: "/body-treatments",
    image: bodyTreatments,
    desc: "Massage and body care that resets you.",
    size: "normal",
    offerings: [
      { name: "Full Body Massage", price: "Rs 3,500" },
      { name: "Body Polish", price: "Rs 4,000" },
      { name: "Body Scrub", price: "Rs 3,000" },
      { name: "De-tan Treatment", price: "Rs 2,500" },
    ],
  },
  {
    name: "Manicure & Pedicure",
    slug: "manicure",
    path: "/manicure",
    image: maniPedi,
    desc: "Shape, cuticle care and polish, done neatly.",
    size: "wide",
    offerings: [
      { name: "Classic Manicure", price: "Rs 1,200" },
      { name: "Classic Pedicure", price: "Rs 1,500" },
      { name: "Gel Polish", price: "Rs 1,800" },
      { name: "Nail Art (per hand)", price: "Rs 500" },
      { name: "Paraffin Treatment", price: "Rs 2,000" },
    ],
  },
  {
    name: "Waxing, Threading & Polish",
    slug: "waxing",
    path: "/waxing",
    image: waxingThreading,
    desc: "Quick, clean, and no-fuss upkeep.",
    size: "wide",
    offerings: [
      { name: "Full Arms Waxing", price: "Rs 800" },
      { name: "Full Legs Waxing", price: "Rs 1,200" },
      { name: "Eyebrow Threading", price: "Rs 150" },
      { name: "Upper Lip Threading", price: "Rs 100" },
      { name: "Polish (hands or feet)", price: "Rs 300" },
    ],
  },
];

export default services;