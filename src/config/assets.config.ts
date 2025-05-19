import flagFinland from "../asset/icon/language/flag-finland.svg";
import flagUK from "../asset/icon/language/flag-uk.svg";

import iconArrowUp from "../asset/icon/icon-arrow-up.svg";
import iconClose from "../asset/icon/icon-close.svg";
import iconMenuHamburger from "../asset/icon/icon-hamburger-menu.svg";
import iconTriangleArrowDown from "../asset/icon/icon-triangle-arrow-down.svg";

import socialsLinkedIn from "../asset/icon/socials/socials-linkedin.png";
import socialsChannel from "../asset/icon/socials/socials-channel.svg";
import socialsEmail from "../asset/icon/socials/socials-email.svg";

import homeGrassland from "../asset/homepage/home-grassland.jpg";
import homePlane from "../asset/homepage/home-plane.jpg";

import projectMekri_1 from "../asset/projects/mekri/mekri-1.jpg";
import projectMekri_2 from "../asset/projects/mekri/mekri-2.jpg";
import projectMekri_3 from "../asset/projects/mekri/mekri-3.jpg";
import projectMekri_4 from "../asset/projects/mekri/mekri-4.jpg";
import projectMekri_5 from "../asset/projects/mekri/mekri-5.jpg";

import projectCaveVR_1 from "../asset/projects/cave-vr/cave-vr-1.jpg";
import projectCaveVR_2 from "../asset/projects/cave-vr/cave-vr-2.jpg";
import projectCaveVR_3 from "../asset/projects/cave-vr/cave-vr-3.jpg";
import projectCaveVR_4 from "../asset/projects/cave-vr/cave-vr-4.jpg";
import projectCaveVR_5 from "../asset/projects/cave-vr/cave-vr-5.jpg";
import projectCaveVR_6 from "../asset/projects/cave-vr/cave-vr-6.jpg";

import projectEko_1 from "../asset/projects/eko/eko-1.jpg";
import projectEko_2 from "../asset/projects/eko/eko-2.jpg";
import projectEko_3 from "../asset/projects/eko/eko-3.jpg";
import projectEko_4 from "../asset/projects/eko/eko-4.jpg";
import projectEko_5 from "../asset/projects/eko/eko-5.jpg";
import projectEko_6 from "../asset/projects/eko/eko-6.jpg";
import projectEko_7 from "../asset/projects/eko/eko-7.jpg";

import projectEscapeRoom_1 from "../asset/projects/escape-room/escape-room-1.jpg";
import projectEscapeRoom_2 from "../asset/projects/escape-room/escape-room-2.jpg";
import projectEscapeRoom_3 from "../asset/projects/escape-room/escape-room-3.jpg";

import projectFlaxwood_1 from "../asset/projects/flaxwood/flaxwood-1.jpg";
import projectFlaxwood_2 from "../asset/projects/flaxwood/flaxwood-2.jpg";
import projectFlaxwood_3 from "../asset/projects/flaxwood/flaxwood-3.jpg";
import projectFlaxwood_4 from "../asset/projects/flaxwood/flaxwood-4.jpg";

import showAthleteAction from "../asset/showcase/show-athlete.jpg";
import showAthleteCloseup from "../asset/showcase/show-athlete-closeup.jpg";
import showBlacksmithAction from "../asset/showcase/show-blacksmith.jpg";
import showBlacksmithCloseup from "../asset/showcase/show-blacksmith-closeup.jpg";
import showCar from "../asset/showcase/show-car.jpg";
import showMarket from "../asset/showcase/show-market.jpg";
import showPhone from "../asset/showcase/show-phone-product.jpg";
import showDress from "../asset/showcase/show-dress.jpg";
import showGun from "../asset/showcase/show-gun.jpg";
import showBottles from "../asset/showcase/show-bottles.jpg";
import showMannequin from "../asset/showcase/show-mannequin.jpg";

export const ASSETS = {
  icon: {
    language: {
      flag: {
        finnish: flagFinland,
        english: flagUK
      }
    },
    util: {
      arrowUp: iconArrowUp,
      arrowTriangleDown: iconTriangleArrowDown,
      close: iconClose,
      menuHamburger: iconMenuHamburger
    },
    socials: {
      linkedin: socialsLinkedIn,
      channel: socialsChannel,
      email: socialsEmail
    },
    logo: "/logo.svg"
  },
  homepage: {
    professionalTitle: homeGrassland,
    slogan: homePlane,
  },
  projects: {
    mekri: [
      // "https://raw.githubusercontent.com/JaniHarkonen/test-repo/refs/heads/main/cave-vr/cave-vr-3.jpg",
      projectMekri_1,
      projectMekri_2,
      projectMekri_3,
      projectMekri_4,
      projectMekri_5
    ],
    caveVR: [
      projectCaveVR_1,
      projectCaveVR_2,
      projectCaveVR_3,
      projectCaveVR_4,
      projectCaveVR_5,
      projectCaveVR_6,
    ],
    eko: [
      projectEko_1,
      projectEko_2,
      projectEko_3,
      projectEko_4,
      projectEko_5,
      projectEko_6,
      projectEko_7
    ],
    escapeRoom: [
      projectEscapeRoom_1,
      projectEscapeRoom_2,
      projectEscapeRoom_3,
    ],
    flaxwood: [
      projectFlaxwood_1,
      projectFlaxwood_2,
      projectFlaxwood_3,
      projectFlaxwood_4
    ]
  },
  showcase: {
    athleteAction: showAthleteAction,
    athleteCloseup: showAthleteCloseup,
    blacksmithAction: showBlacksmithAction,
    blacksmithCloseup: showBlacksmithCloseup,
    car: showCar,
    market: showMarket,
    phone: showPhone,
    dress: showDress,
    gun: showGun,
    bottles: showBottles,
    mannequin: showMannequin
  }
};
