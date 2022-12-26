const items = [
  {
    id: 1,
    image: "https://i.ibb.co/gbY0KWM/thumbnail-1.jpg",
    name: "Toner Sample",
    desc: "Interactive 3d Model uses Three JS, and triggers animations using buttons",
  },
  // {
  //   id: 2,
  //   image: "https://picsum.photos/seed/picsum/400/500",
  //   name: "Switch",
  //   desc: "The switch is like in general and can be clicked",
  // },
  // {
  //   id: 3,
  //   image: "https://picsum.photos/seed/picsum/400/400",
  //   name: "Sample",
  //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  // },

  // {
  //   id: 4,
  //   image: "https://picsum.photos/seed/picsum/400/400",
  //   name: "Sample",
  //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  // },
  // {
  //   id: 5,
  //   image: "https://picsum.photos/seed/picsum/400/400",
  //   name: "Sample",
  //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  // },
  // {
  //   id: 6,
  //   image: "https://picsum.photos/seed/picsum/400/400",
  //   name: "Sample",
  //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  // },
  // {
  //   id: 7,
  //   image: "https://picsum.photos/seed/picsum/400/400",
  //   name: "Sample",
  //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  // },
  // {
  //   id: 8,
  //   image: "https://picsum.photos/seed/picsum/400/400",
  //   name: "Sample",
  //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  // },
  // {
  //   id: 9,
  //   image: "https://picsum.photos/seed/picsum/400/400",
  //   name: "Sample",
  //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  // },
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
