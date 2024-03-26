import { useDispatch, useSelector } from "react-redux";
import Container from "../../container/Container";
import ReactPaginate from "react-paginate";
import {
  changeMovieOffset,
  changeMovieVisit,
} from "../../../redux/slices/paginationSlice";
import TodayEventsList from "./TodayEventsList";
import "../../../styles/Pagination.css";

const TodayEvents = ({ data, loading, error }) => {
  const dispatch = useDispatch();
  const forcePage = useSelector((state) => state.pagination.lastVisitedMovie);
  const itemOffset = useSelector((state) => state.pagination.movieOffset);

  let itemsPerPage = 10;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    dispatch(changeMovieOffset(newOffset));
    dispatch(changeMovieVisit(event.selected));
  };

  return (
    <div className="home-today_events">
      <Container>
        <h2 className="home-today_events-title">Today Events</h2>
        {loading && <div>loading</div>}
        {!loading && error ? <div>Error:{error}</div> : null}
        {!loading && data.length !== 0 ? (
          <TodayEventsList data={currentItems} />
        ) : null}

        {data && data.length !== 0 && currentItems && (
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            forcePage={forcePage}
            className="pagination"
          />
        )}
      </Container>
    </div>
  );
};

export default TodayEvents;
