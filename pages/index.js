import EvenList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";

export default function HomePage() {
  const featureEvents = getFeaturedEvents();
  console.log(featureEvents);
  return (
    <div>
      <EvenList items={featureEvents}></EvenList>
    </div>
  );
}
