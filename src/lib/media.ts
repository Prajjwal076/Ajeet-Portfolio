export const media = {
  spiderman: "/assets/images/spiderman-poster.jpg",
  vverve: "/assets/images/vverve-butterfly.jpg",
  blood: "/assets/images/blood-donation.jpg",
  vibrations: "/assets/images/vibrations-openmic.jpg",
  constitution: "/assets/images/constitution-day.jpg",
  tt: "/assets/images/tt-tournament.jpg",
  cafe: "/assets/images/three-guys-cafe.jpg",
  nike: "/assets/video/nike.mp4",
  nikePoster: "/assets/images/nike-poster.jpg",
  maldives: "/assets/video/maldives.mp4",
  maldivesPoster: "/assets/images/maldives-poster.jpg",
  car: "/assets/video/car.mp4",
  carPoster: "/assets/images/car-poster.jpg",
  edit04: "/assets/video/edit04.mp4",
  edit04Poster: "/assets/images/edit04-poster.jpg",
  me: "/assets/video/me.mp4",
  mePoster: "/assets/images/me-poster.jpg",
  pumaGreen: "/assets/images/puma-green.png",
  pumaRed: "/assets/images/puma-red.png",
  parkerPen: "/assets/images/parker-pen.png",
};

export type GalleryItem = {
  src: string;
  title: string;
  meta: string;
  year: string;
  objectPosition: string;
  ratio: string;
};

export const galleryItems: GalleryItem[] = [
  {
    src: media.blood,
    title: "Blood Donation Camp",
    meta: "Poster / Illustration Layout",
    year: "2026",
    objectPosition: "50% 30%",
    ratio: "3 / 4",
  },
  {
    src: media.vibrations,
    title: "Vibrations — Open Mic",
    meta: "Event Poster / Cultural Eve",
    year: "2026",
    objectPosition: "50% 40%",
    ratio: "3 / 4",
  },
  {
    src: media.constitution,
    title: "National Constitution Day",
    meta: "Monochrome Editorial Poster",
    year: "2025",
    objectPosition: "50% 45%",
    ratio: "4 / 5",
  },
  {
    src: media.tt,
    title: "AKG Memorial Table Tennis",
    meta: "Wide Key Visual / Sport",
    year: "2025",
    objectPosition: "50% 50%",
    ratio: "16 / 9",
  },
];

/** Brand/product layouts shown in the drop section. */
export const dropItems: GalleryItem[] = [
  {
    src: media.pumaGreen,
    title: "Puma Slipstream — Green",
    meta: "Product Layout / Outline Type",
    year: "2026",
    objectPosition: "50% 50%",
    ratio: "1 / 1",
  },
  {
    src: media.pumaRed,
    title: "Puma Speedcat — Red",
    meta: "Product Layout / Stacked Type",
    year: "2026",
    objectPosition: "50% 50%",
    ratio: "1 / 1",
  },
  {
    src: media.parkerPen,
    title: "Parker Duofold Pen",
    meta: "Script Logotype / Luxury Mark",
    year: "2026",
    objectPosition: "50% 50%",
    ratio: "1 / 1",
  },
];

/**
 * Single source of truth for the full archive page.
 * To add new work: copy the file into public/assets and add one entry here.
 */
export type ArchiveItem = {
  kind: "image" | "video";
  src: string;
  poster?: string;
  title: string;
  meta: string;
  year: string;
  ratio: string;
  objectPosition?: string;
};

export const archiveItems: ArchiveItem[] = [
  {
    kind: "video",
    src: media.car,
    poster: media.carPoster,
    title: "Night Drive",
    meta: "Automotive Edit / Colour Grade",
    year: "2026",
    ratio: "16 / 9",
  },
  {
    kind: "video",
    src: media.edit04,
    poster: media.edit04Poster,
    title: "Edit 04",
    meta: "Rhythm Cut / Sound Sync",
    year: "2026",
    ratio: "16 / 9",
  },
  {
    kind: "video",
    src: media.me,
    poster: media.mePoster,
    title: "Self Portrait Reel",
    meta: "Personal Edit / Titles",
    year: "2026",
    ratio: "16 / 9",
  },
  {
    kind: "video",
    src: media.nike,
    poster: media.nikePoster,
    title: "Nike — Air Max",
    meta: "Kinetic Typography Reel",
    year: "2026",
    ratio: "1 / 1",
  },
  {
    kind: "video",
    src: media.maldives,
    poster: media.maldivesPoster,
    title: "Once upon a time in the Maldives",
    meta: "Travel Promo / Vertical Cut",
    year: "2026",
    ratio: "4 / 5",
  },
  ...dropItems.map<ArchiveItem>((item) => ({ kind: "image", ...item })),
  ...galleryItems.map<ArchiveItem>((item) => ({ kind: "image", ...item })),
  {
    kind: "image",
    src: media.spiderman,
    title: "Responsibility",
    meta: "Poster / Kinetic Type Study",
    year: "2025",
    ratio: "4 / 5",
  },
  {
    kind: "image",
    src: media.vverve,
    title: "V-VERVE — Kapish 2024",
    meta: "Identity / Poster",
    year: "2024",
    ratio: "4 / 5",
  },
  {
    kind: "image",
    src: media.cafe,
    title: "Three Guys Cafe",
    meta: "Collage / Social Campaign",
    year: "2025",
    ratio: "1 / 1",
  },
];
