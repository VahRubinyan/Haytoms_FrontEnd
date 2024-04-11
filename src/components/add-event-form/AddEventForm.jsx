import { useEffect, useState } from "react";
import { headerConfig } from "../../config";
import "./AddEventForm.scss";
import ScheduleForForm from "./ScheduleForForm";
import { useDispatch, useSelector } from "react-redux";
import { getEventsThunk } from "../../redux/slices/EventsSlice";
import { createEvent } from "../../api/api";

const AddEventForm = () => {
  const dispatch = useDispatch();
  const [eventDates, setEventDates] = useState({
    day: "",
    day_of_week: "",
    month: "",
    duration: "",
    cinema: "",
    hall: "",
    price: "",
    age_limit: "",
    time: "",
  });
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    trailer: "",
    event_dates: [],
    category: "Cinema",
    subcategories: [],
    cover_picture: "",
    images: [],
  });

  useEffect(() => {
    async function getDataRequest() {
      await dispatch(getEventsThunk());
    }
    getDataRequest();
  }, [dispatch]);

  const onChangeEventData = (e) => {
    setEventData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onChangeEventDates = (e) => {
    setEventDates((prev) => {
      return {
        ...prev,
        [e.target.name]:
          typeof +e.target.value === typeof NaN
            ? e.target.value
            : +e.target.value,
      };
    });
  };

  const onAddScheduleData = () => {
    let eventsdata = eventData.event_dates;
    eventsdata.push(eventDates);
    setEventData((prev) => {
      return {
        ...prev,
        event_dates: eventsdata,
      };
    });
    setEventDates({
      day: "",
      day_of_week: "",
      month: "",
      duration: "",
      cinema: "",
      hall: "",
      price: "",
      age_limit: "",
      time: "",
    });
    console.log(eventData);
  };

  const onChangeCategory = (e) => {
    setEventData((prev) => {
      return {
        ...prev,
        category: e.target.value,
        subcategories: [],
      };
    });
  };

  const onChangeSubcategory = (e, subcategory) => {
    let arr = eventData.subcategories;
    let status = false;

    arr.length !== 0 &&
      arr.forEach((item) => {
        if (item === subcategory) status = true;
      });
    if (e.target.checked && status === false) arr.push(subcategory);
    if (!e.target.checked && status === true) {
      let index = arr.indexOf(subcategory);
      index !== -1 && arr.splice(index, 1);
    }

    setEventData((prev) => {
      return {
        ...prev,
        subcategories: arr,
      };
    });

    console.log(eventData);
  };

  const onCoverpictureUpload = (e) => {
    const selectedImage = e.target.files[0];
    setEventData((prev) => {
      return {
        ...prev,
        cover_picture: selectedImage,
      };
    });
  };

  const onChangeOtherImgs = (e) => {
    let arrImgs = eventData.images;
    arrImgs.push(e.target.files[0]);
    setEventData((prev) => {
      return {
        ...prev,
        images: arrImgs,
      };
    });
  };

  const onSendEventData = async (e) => {
    e.preventDefault();
    try {
      await createEvent(eventData);
      console.log("succsess");
    } catch (e) {
      console.log(e);
    }
  };

  const onRemoveImg = (img) => {
    let removedArr = eventData.images.filter((item) => item !== img);
    setEventData((prev) => {
      return {
        ...prev,
        images: removedArr,
      };
    });
  };
  return (
    <form className="add_event_form">
      <h2>Title</h2>
      <div className="add_event_form-item">
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          onChange={(e) => onChangeEventData(e)}
        />
      </div>
      <h2>Description</h2>
      <div className="add_event_form-item">
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Description"
          value={eventData.description === 0 ? "" : eventData.description}
          onChange={(e) => onChangeEventData(e)}
        />
      </div>
      <h2>Trailer</h2>
      <div className="add_event_form-item">
        <input
          type="text"
          id="trailer"
          name="trailer"
          placeholder="Trailer"
          value={eventData.trailer === 0 ? "" : eventData.trailer}
          onChange={(e) => onChangeEventData(e)}
        />
      </div>
      <h2>Place</h2>
      <div className="add_event_form-infos">
        <div className="add_event_form-item">
          <input
            type="text"
            id="cinema"
            name="cinema"
            placeholder="Cinema"
            value={eventDates.cinema}
            onChange={onChangeEventDates}
          />
        </div>
        <div className="add_event_form-item">
          <input
            type="text"
            id="hall"
            name="hall"
            placeholder="Hall"
            value={eventDates.hall}
            onChange={onChangeEventDates}
          />
        </div>
        <div className="add_event_form-item">
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Price"
            value={eventDates.price === 0 ? "" : eventDates.price}
            onChange={onChangeEventDates}
          />
        </div>
      </div>
      <h2>Dates</h2>
      <div className="add_event_form-infos">
        <div className="add_event_form-item">
          <input
            type="number"
            id="day"
            name="day"
            placeholder="Day"
            value={eventDates.day === 0 ? "" : eventDates.day}
            onChange={onChangeEventDates}
          />
        </div>
        <div className="add_event_form-item">
          <input
            type="text"
            id="day_of_week"
            name="day_of_week"
            placeholder="Week"
            value={eventDates.day_of_week}
            onChange={onChangeEventDates}
          />
        </div>
        <div className="add_event_form-item">
          <input
            type="text"
            id="month"
            name="month"
            placeholder="Month"
            value={eventDates.month}
            onChange={onChangeEventDates}
          />
        </div>
        <div className="add_event_form-item">
          <input
            type="text"
            id="time"
            name="time"
            placeholder="Time"
            value={eventDates.time}
            onChange={onChangeEventDates}
          />
        </div>
      </div>
      <h2>Other</h2>
      <div className="add_event_form-infos">
        <div className="add_event_form-item">
          <input
            type="number"
            id="duration"
            name="duration"
            placeholder="Duration"
            value={eventDates.duration === 0 ? "" : eventDates.duration}
            onChange={onChangeEventDates}
          />
        </div>
        <div className="add_event_form-item">
          <input
            type="number"
            id="age_limit"
            name="age_limit"
            placeholder="Age Limit"
            value={eventDates.age_limit === 0 ? "" : eventDates.age_limit}
            onChange={onChangeEventDates}
          />
        </div>

        <div onClick={() => onAddScheduleData()}>Schedule is ready</div>
      </div>
      {eventData.event_dates.length !== 0 ? (
        <div className="add_event_form-schedules">
          {eventData.event_dates.map((data, index) => {
            return (
              <ScheduleForForm
                data={data}
                key={index}
                index={index}
                setEventData={setEventData}
                eventData={eventData}
              />
            );
          })}
        </div>
      ) : null}
      <h2>Category</h2>
      <div className="add_event_form-infos">
        <select onChange={(e) => onChangeCategory(e)} name="categories">
          {headerConfig.map((item) => {
            return (
              <option value={item.name.en} key={item.id}>
                {item.name.en}
              </option>
            );
          })}
        </select>
        {headerConfig.map((item) => {
          if (eventData.category === item.name.en) {
            return item.genres.map((genre) => {
              return (
                genre.en !== "All" && (
                  <div className="add_event_form-infos-checkbox" key={genre.id}>
                    <input
                      type="checkbox"
                      id={genre.en}
                      name={genre.id}
                      onChange={(e) => onChangeSubcategory(e, genre.en)}
                    />
                    <label htmlFor={genre.en}>{genre.en}</label>
                  </div>
                )
              );
            });
          }
        })}
      </div>
      <h2>Cover Picture</h2>
      <input
        type="file"
        id="cover_picture"
        name="cover_picture"
        onChange={(e) => onCoverpictureUpload(e)}
        className="add_event_form-file_input"
      />
      <label className="add_event_form-chooseFile" htmlFor="cover_picture">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="17"
          viewBox="0 0 20 17"
        >
          <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
        </svg>{" "}
        <span>Choose a file…</span>
      </label>
      {eventData.cover_picture !== "" && (
        <div className="add_event_form-cover_pcture">
          <img
            src={URL.createObjectURL(eventData.cover_picture)}
            alt={eventData.cover_picture.name}
          />
        </div>
      )}
      <h2>Other Pictures</h2>
      <input
        type="file"
        id="other_pictures"
        name="other_pictures"
        onChange={(e) => onChangeOtherImgs(e)}
        className="add_event_form-file_input"
      />
      <label className="add_event_form-chooseFile" htmlFor="other_pictures">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="17"
          viewBox="0 0 20 17"
        >
          <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
        </svg>{" "}
        <span>Choose a file…</span>
      </label>
      {eventData.images.length !== 0 && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "20px",
            marginBottom: "15px",
          }}
        >
          {eventData.images.map((img, index) => {
            return (
              <div
                className="add_event_form-cover_pcture"
                key={index}
                onClick={() => onRemoveImg(img)}
              >
                <img src={URL.createObjectURL(img)} alt={img} />
                <div>Remove</div>
              </div>
            );
          })}
        </div>
      )}

      <div onClick={onSendEventData}>Create the Event</div>
    </form>
  );
};

export default AddEventForm;
