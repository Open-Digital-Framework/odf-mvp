export const SITE = {
  title: "Open Digital Framework",
  description: "Your website description.",
  defaultLanguage: "en",
};

export const OPEN_GRAPH = {
  image: {
    src: "https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true",
    alt:
      "astro logo on a starry expanse of space," +
      " with a purple saturn-like planet floating in the right foreground",
  },
  twitter: "astrodotbuild",
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
  title: string;
  description: string;
  layout: string;
  image?: { src: string; alt: string };
  dir?: "ltr" | "rtl";
  ogLocale?: string;
  lang?: string;
};

export const KNOWN_LANGUAGES = {
  English: "en",
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/Open-Digital-Framework/odf-mvp/tree/main`;

// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

//  export const GITHUB_EDIT_URL = false;
export const COMMUNITY_INVITE_URL = false;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: "XXXXXXXXXX",
  appId: "XXXXXXXXXX",
  apiKey: "XXXXXXXXXX",
};

export type Sidebar = Record<
  typeof KNOWN_LANGUAGE_CODES[number],
  Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
  en: {
    "Section 1": [
      {
        text: "Intro: Being a modern charity in a digital world",
        link: "393871368",
      },
      { text: "A tiered approach to devolution ", link: "404914253" },
      { text: "The basics: setting the scene", link: "482967586" },
      {
        text: "Case study videos: a guide for partners and agencies",
        link: "630358245",
      },
      {
        text: "Shelters accessibility guidance and best practices",
        link: "666501133",
      },
      { text: "Brand guidelines: Introduction", link: "767852667" },
      { text: "A vision for Shelters website", link: "828080165" },
      {
        text: "Communities of Practice at Shelter: the evolution of the Product CoP",
        link: "938508293",
      },
      {
        text: "Communities of Practice at Shelter: inside the UX CoP",
        link: "943456257",
      },
      {
        text: "What are content operations and why are they important?",
        link: "960921601",
      },
      {
        text: "Content operations: the hidden superpower of digital delivery",
        link: "968392705",
      },
    ],
    "Section 2": [
      {
        text: "A framework for golden thread digital working in the third sector",
        link: "A-framework-for-golden-thread-digital-working-in-the-third-sector_890273795",
      },
      {
        text: "A guide to content SEO",
        link: "A-guide-to-content-SEO_610795665",
      },
      {
        text: "A guide to content design",
        link: "A-guide-to-content-design_404390084",
      },
      {
        text: "A guide to publishing workflows",
        link: "A-guide-to-publishing-workflows_474316809",
      },
      {
        text: "Accessibility guides",
        link: "Accessibility-guides_839548933",
      },
      {
        text: "Accessibility success criteria",
        link: "Accessibility-success-criteria_824410212",
      },

      { text: "Blogs", link: "Blogs_825852006" },
      {
        text: "Business ownership in practice",
        link: "Business-ownership-in-practice_937656360",
      },

      { text: "Colour", link: "Colour_850395794" },
      {
        text: "Commissioning a Shelter video",
        link: "Commissioning-a-Shelter-video_769720470",
      },
      {
        text: "Communities of Practice",
        link: "Communities-of-Practice_404979738",
      },
      {
        text: "Content and user journeys",
        link: "Content-and-user-journeys_962297865",
      },
      {
        text: "Content governance",
        link: "Content-governance_962232329",
      },

      {
        text: "Creating a live service",
        link: "Creating-a-live-service_839745537",
      },
      {
        text: "Creating your content",
        link: "Creating-your-content_194478336",
      },
      {
        text: "Design and copywriting for email",
        link: "Design-and-copywriting-for-email_983138305",
      },
      {
        text: "Design thinking at Shelter",
        link: "Design-thinking-at-Shelter_940670977",
      },
      {
        text: "Digital Framework release plan",
        link: "Digital-Framework-release-plan_521797728",
      },
      {
        text: "Digital checklist for partners and staff",
        link: "Digital-checklist-for-partners-and-staff_862093319",
      },
      {
        text: "Digital governance",
        link: "Digital-governance_937656407",
      },
      {
        text: "Digital teams and their partners",
        link: "Digital-teams-and-their-partners_404389976",
      },

      {
        text: "Email styles and formats",
        link: "Email-styles-and-formats_983171073",
      },
      {
        text: "Encouraging collaboration",
        link: "Encouraging-collaboration_482967593",
      },
      {
        text: "Essential production documents",
        link: "Essential-production-documents_807633054",
      },

      {
        text: "Formatting and styles",
        link: "Formatting-and-styles_476348428",
      },

      {
        text: "Future vision and business planning",
        link: "Future-vision-and-business-planning_839712769",
      },
      { text: "Getting started", link: "Getting-started_982777857" },
      { text: "Guides", link: "Guides_442138636" },
      {
        text: "How our teams work",
        link: "How-our-teams-work_483065869",
      },
      {
        text: "How to design and write a Shelter email",
        link: "How-to-design-and-write-a-Shelter-email_976650241",
      },
      {
        text: "How we decide what to do and what not to do",
        link: "How-we-decide-what-to-do-and-what-not-to-do_962330638",
      },
      { text: "Imagery", link: "Imagery_823001089" },
      { text: "Images and video", link: "Images-and-video_982908931" },
      {
        text: "Intro to our principles, guidelines and standards",
        link: "Intro-to-our-principles%2C-guidelines-and-standards_455966725",
      },

      {
        text: "Managing images and other assets in the Media library",
        link: "Managing-images-and-other-assets-in-the-Media-library_191169731",
      },
      { text: "Measuring success", link: "Measuring-success_937656471" },
      { text: "Moving image", link: "Moving-image_760578473" },
      {
        text: "Operating a live service",
        link: "Operating-a-live-service_839778316",
      },
      {
        text: "Our brand guidelines",
        link: "Our-brand-guidelines_760676531",
      },
      {
        text: "Our content operations",
        link: "Our-content-operations_960856065",
      },
      {
        text: "Our working principles",
        link: "Our-working-principles_404389919",
      },

      {
        text: "Planning at all levels",
        link: "Planning-at-all-levels_936935482",
      },
      {
        text: "Punctuation and grammar",
        link: "Punctuation-and-grammar_476348421",
      },
      { text: "Release planning", link: "Release-planning_936935587" },
      {
        text: "Retiring content and how to do it right",
        link: "Retiring-content-and-how-to-do-it-right_962199564",
      },
      {
        text: "Reusing our content",
        link: "Reusing-our-content_795902152",
      },
      { text: "Roadmapping", link: "Roadmapping_936935546" },

      {
        text: "Shelter's Digital Framework",
        link: "Shelters-Digital-Framework_404422880",
      },
      {
        text: "Shelter's digital glossary",
        link: "Shelters-digital-glossary_712245258",
      },
      {
        text: "Shelter's house style",
        link: "Shelters-house-style_243236947",
      },
      {
        text: "Social media and accessibility",
        link: "Social-media-and-accessibility_842596355",
      },
      { text: "Spelling", link: "Spelling_476413959" },

      {
        text: "The devolved model of delivering digital",
        link: "The-devolved-model-of-delivering-digital_416317505",
      },
      {
        text: "The digital lifecycle",
        link: "The-digital-lifecycle_839647233",
      },
      {
        text: "The golden thread of digital governance",
        link: "The-golden-thread-of-digital-governance_937656545",
      },
      {
        text: "The lifecycle of a piece of content",
        link: "The-lifecycle-of-a-piece-of-content_962330631",
      },
      {
        text: "The product planning approach",
        link: "The-product-planning-approach_936935511",
      },
      {
        text: "The roles that drive the devolved model",
        link: "The-roles-that-drive-the-devolved-model_543555625",
      },

      { text: "Tone of voice", link: "Tone-of-voice_767754297" },

      { text: "Typography", link: "Typography_850395821" },
      {
        text: "Understanding our audiences",
        link: "Understanding-our-audiences_936935646",
      },
      {
        text: "User-centred design",
        link: "User-centred-design_963608577",
      },
      {
        text: "Using case studies",
        link: "Using-case-studies_183762989",
      },
      { text: "Using your data", link: "Using-your-data_797868137" },
      { text: "Video captioning", link: "Video-captioning_602570761" },
      {
        text: "Video production guides",
        link: "Video-production-guides_769622161",
      },
      {
        text: "Video self-shooting, a practical guide",
        link: "Video-self-shooting-a-practical-guide_618791024",
      },
      { text: "Video supers", link: "Video-supers_598933686" },
      { text: "What's new", link: "Whats-new_937033868" },
      { text: "Work examples", link: "Work-examples_854228993" },
      {
        text: "Writing about domestic abuse",
        link: "Writing-about-domestic-abuse_183762970",
      },
      {
        text: "Writing accessible content",
        link: "Writing-accessible-content_839516226",
      },
      {
        text: "Writing online content",
        link: "Writing-online-content_268665002",
      },
    ],
  },
};
