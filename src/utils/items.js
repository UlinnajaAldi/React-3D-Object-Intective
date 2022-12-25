const items = [
  {
    id: 1,
    image: "https://picsum.photos/seed/picsum/400/400",
    name: "Switch",
    desc: "The switch is like in general and can be clicked",
  },
  {
    id: 2,
    image: "https://picsum.photos/seed/picsum/400/500",
    name: "Switch 2",
    desc: "The switch is like in general and can be clicked",
  },
  {
    id: 3,
    image: "https://picsum.photos/seed/picsum/400/400",
    name: "Switch 3",
    desc: "The switch is like in general and can be clicked",
  },

  {
    id: 4,
    image: "https://picsum.photos/seed/picsum/400/400",
    name: "Switch 4",
    desc: "The switch is like in general and can be clicked",
  },
  {
    id: 5,
    image: "https://picsum.photos/seed/picsum/400/400",
    name: "Switch 5",
    desc: "The switch is like in general and can be clicked",
  },
  {
    id: 6,
    image: "https://picsum.photos/seed/picsum/400/400",
    name: "Switch 6",
    desc: "The switch is like in general and can be clicked",
  },
  {
    id: 7,
    image: "https://picsum.photos/seed/picsum/400/400",
    name: "Switch 7",
    desc: "The switch is like in general and can be clicked",
  },
  {
    id: 8,
    image: "https://picsum.photos/seed/picsum/400/400",
    name: "Switch 8",
    desc: "The switch is like in general and can be clicked",
  },
  {
    id: 9,
    image: "https://picsum.photos/seed/picsum/400/400",
    name: "Switch 9",
    desc: "The switch is like in general and can be clicked",
  },
];

function getItem(id) {
  if (!id) {
    return null;
  }

  const filteredItem = items.filter((item) => item.id === id);

  if (!filteredItem.length) {
    return null;
  }

  return filteredItem[0];
}

const itemsModule = { items, getItem };

export default itemsModule;
