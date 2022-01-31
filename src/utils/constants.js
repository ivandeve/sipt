const NAV_ITEMS = [
  {
    label: "Perencanaan",
    href: "/perencanaan",
  },
  {
    label: "Persiapan",
    href: "/persiapan",
  },
  {
    label: "Pelaksanaan",
    href: "/pelaksanaan",
  },
  {
    label: "Penyerahan Hasil",
    href: "penyerahan-hasil",
  },
];

const DEFAULT_MAP_PROPS = {
  zoom: 15,
  zoomControl: false,
  center: [-7.77164, 110.377542],
  style: {
    width: "100%",
    height: "88.5vh",
  },
};

export { NAV_ITEMS, DEFAULT_MAP_PROPS };
