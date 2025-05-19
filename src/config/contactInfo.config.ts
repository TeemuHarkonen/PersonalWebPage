export type ContactInfoAddress = {
  languageKey?: string;
  title?: string;
  icon: string;
  link: string;
};

type ContactInfo = {
  [key in string]: ContactInfoAddress;
}

export const CONTACT_INFO: ContactInfo = {
  linkedin: {
    title: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com"
  },
  channel: {
    languageKey: "contact.channel",
    icon: "channel",
    link: "https://www.youtube.com/@TeemuHarkonenVisualArts"
  },
  email: {
    title: "teemu.harkonen3@gmail.com",
    icon: "email",
    link: "mailto:teemu.harkonen3@gmail.com"
  }
};
