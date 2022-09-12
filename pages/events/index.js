import { useRouter } from "next/router";
import React from "react";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import { getAllEvents } from "../../dummy-data";

const AllEventsPage = () => {
  const router = useRouter();
  const events = getAllEvents();

  const handleFindEvent = (year, month) => {
    const fullPath = `events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <>
      <EventSearch onSearch={handleFindEvent} />
      <EventList items={events}></EventList>
    </>
  );
};

export default AllEventsPage;
