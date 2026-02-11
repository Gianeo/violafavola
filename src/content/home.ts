export type HeroContent = {
  kicker: string;
  headline: string;
  subcopy: string;
  cta: { label: string; href: string };
  portrait: { src: string; alt: string };
  social: Array<{ label: string; href: string; icon: string }>;
};

export type AboutContent = {
  eyebrow: string;
  label: string;
  title: string;
  body: string;
  cta: { label: string; href: string };
  collage: Array<{ src: string; alt: string }>;
};

export type ExpertiseContent = {
  title: string;
  intro: string;
  items: Array<{ title: string; description: string; icon: string }>;
};

export type ProjectContent = {
  eyebrow: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
  images: Array<{ src: string; alt: string }>;
};

export type FooterContent = {
  title: string;
  body: string;
  image: { src: string; alt: string };
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export const homeContent = {
  hero: {
    kicker: "Viola Favola",
    headline: "Visual.\nDesign.\nExperience.",
    subcopy:
      "Designer and co-founder working at the intersection of product, people, and AI.",
    cta: { label: "Let's work together", href: "mailto:violafavaretto99@gmail.com" },
    portrait: {
      src: "/images/viola-bubble.webp",
      alt: "Portrait placeholder",
    },
    social: [
      {
        label: "Email",
        href: "mailto:violafavaretto99@gmail.com",
        icon: "/images/Portfolio-V/icons/icons/mail.svg",
      },
      // {
      //   label: "Instagram",
      //   href: "https://www.instagram.com",
      //   icon: "/images/Portfolio-V/icons/icons/instagram.svg",
      // },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/viola-favaretto-82727b114/",
        icon: "/images/icons/linkedin.svg",
      },
    ],
  } satisfies HeroContent,
  about: {
    eyebrow: "About",
    label: "JustScore",
    title: "Building a wellness platform that scales human motivation.",
    body:
      "I collaborate with founders and teams to translate research into clear product vision, then craft interfaces that feel inevitable.",
    cta: { label: "View the case study", href: "#justscore" },
    collage: [
      {
        src: "/images/JustScore/js-img-1.2.webp",
        alt: "JustScore interface grid",
      },
      {
        src: "/images/JustScore/js-img-2.2.webp",
        alt: "JustScore mobile screen",
      },
      {
        src: "/images/JustScore/js-img-3.2.webp",
        alt: "JustScore concept layout",
      },
      {
        src: "/images/JustScore/js-img-3.3.webp",
        alt: "JustScore moodboard",
      },
    ],
  } satisfies AboutContent,
  expertise: {
    title: "Expertise",
    intro:
      "A focused practice across product strategy, design systems, and emerging interactions.",
    items: [
      {
        title: "User Experience & \nDesign Systems",
        description: "Scalable foundations that keep teams moving fast and aligned.",
        icon: "/images/Portfolio-V/icons/waypoints.svg",
      },
      {
        title: "Visual Design & \nContent",
        description: "Clarity on what to build, why it matters, and how it lands.",
        icon: "/images/Portfolio-V/icons/palette.svg",
      },
      {
        title: "AI-assisted \nProcesses",
        description: "Human-first experiences for intelligent systems and new workflows.",
        icon: "/images/Portfolio-V/icons/sparkles.svg",
      },
    ],
  } satisfies ExpertiseContent,
  projects: {
    justScore: {
      eyebrow: "Project / JustScore",
      title: "Motivation-driven wellness for busy teams.",
      description:
        "A modular product platform with a flexible visual system and clear metrics storytelling.",
      cta: { label: "Explore project", href: "#justscore" },
      images: [
        {
          src: "/images/JustScore/js-img-1.3.webp",
          alt: "JustScore product board",
        },
        {
          src: "/images/JustScore/js-img-2.webp",
          alt: "JustScore mobile previews",
        },
        {
          src: "/images/JustScore/js-img-3.webp",
          alt: "JustScore brand system",
        },
      ],
    } satisfies ProjectContent,
    earthBreath: {
      eyebrow: "Project / EarthBreath",
      title: "A calmer digital space for sustainable living.",
      description:
        "Concept-to-launch experience for an eco brand, balancing clarity, tone, and craft.",
      cta: { label: "Explore project", href: "#earthbreath" },
      images: [
        {
          src: "/images/EarthBreath/eb-img-hero.webp",
          alt: "EarthBreath hero visual",
        },
        {
          src: "/images/EarthBreath/eb-moodboard-1.webp",
          alt: "EarthBreath moodboard",
        },
        {
          src: "/images/EarthBreath/eb-moodboard-4.webp",
          alt: "EarthBreath textures",
        },
      ],
    } satisfies ProjectContent,
    sustainableVentures: {
      eyebrow: "Project / Sustainable Ventures",
      title: "Designing clarity for complex operations.",
      description:
        "A unified experience for operations teams, with data-rich dashboards and calm UI.",
      cta: { label: "Explore project", href: "#sustainable-ventures" },
      images: [
        {
          src: "/images/SV/sv-img-1.webp",
          alt: "Sustainable Ventures dashboard",
        },
        {
          src: "/images/SV/sv-img-2.webp",
          alt: "Sustainable Ventures mobile",
        },
        {
          src: "/images/SV/sv-img-3.webp",
          alt: "Sustainable Ventures interface tiles",
        },
      ],
    } satisfies ProjectContent,
  },
  footer: {
    title: "Let's work together.",
    body:
      "I collaborate with founders, teams, and organisations shaping products, systems, and stories in tech, who want a designer who thinks beyond screens.\n\n I’m especially effective in early-stage or evolving products where structure, judgment, and adaptability to ambiguity matters.",
    image: {
      src: "/images/Portfolio-V/footer-img.webp",
      alt: "Studio snapshot placeholder",
    },
    primaryCta: { label: "Email me", href: "mailto:violafavola@gmail.com" },
    secondaryCta: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/viola-favaretto-82727b114/",
    },
  } satisfies FooterContent,
};
