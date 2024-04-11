import Card from "../../event_card/Card";

const TodayEventsList = ({ data }) => {
  return (
    <div className="home-today_events-cards">
      {data.map((event) => {
        return <Card key={event.id} event={event} />;
      })}
    </div>
  );
};

export default TodayEventsList;
