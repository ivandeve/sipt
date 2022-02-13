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
  center: [-7.305864, 110.347889],
  style: {
    width: "100%",
    height: "88.5vh",
  },
};

const LEGEND_TYPE = [
  {
    name: "kabupaten",
    color: "#1EC1A7",
  },
  {
    name: "kecamatan",
    color: "#FF7A00",
  },
  {
    name: "desa",
    color: "#7364F1",
  },
  {
    name: "bidang",
    color: "#FF5F55",
  },
];

export { NAV_ITEMS, DEFAULT_MAP_PROPS, LEGEND_TYPE };
