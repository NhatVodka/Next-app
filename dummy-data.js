const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Lauterbrunnen, Switzerland",
    description:
      "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
    location: "Lauterbrunnen, Switzerland",
    date: "2021-05-12",
    image: "images/Switzerland1.jpg",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Grimentz, Switzerland",
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    location: "Grimentz, Switzerland",
    date: "2021-05-30",
    image: "images/Switzerland2.jpg",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Mürren, Lauterbrunnen, Switzerland",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "Mürren, Lauterbrunnen, Switzerland",
    date: "2022-04-10",
    image: "images/Switzerland3.jpg",
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
