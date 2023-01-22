import React from "react";
import EventCardApplied from "./components/event_card_applied";
import { Carousel } from "flowbite";
import { useEffect, useState, useContext } from "react";
import EventCard from "./components/event_card";
import EventForm from "./components/event_form";
import CarouselAuto from "./components/carousel";
import eventModel from "../models/eventBaseModel";
import { userContext } from "../global_components/authenticator";

const AppliedEvent = () => {
  const [data, setdata] = useState(eventModel);
  const { user } = useContext(userContext);

  const checkValid = (event) => {
    // if (event.authorID == user.userID) return false;
    if (event.approvedUsers.find((u) => u == user.userID) !== undefined)
      return true;
    if (event.appliedUsers.find((u) => u == user.userID) !== undefined)
      return true;
    return false;
  };

  //console.log(user);
  //console.log(eventModel.filter(checkValid));
  useEffect(() => {
    console.log("useEffect");
    console.log(eventModel);
    console.log(eventModel.filter(checkValid));
    setdata(eventModel.filter(checkValid));
  }, [user]);
  return (
    <div className="flex flex-col items-center justify-center">
        {data.map((event) => (
            <EventCardApplied event={event} />
          ))}
      {/* <EventCardApplied /> */}
    </div>
  );
};

export default AppliedEvent;
