import Card from "../../event_card/Card";

const TodayEventsList = ({ data }) => {
  return (
    <div className="home-today_events-cards">
      {data.map((movie) => {
        return <Card key={movie.id} movie={movie} />;
      })}
    </div>
  );
};

export default TodayEventsList;
