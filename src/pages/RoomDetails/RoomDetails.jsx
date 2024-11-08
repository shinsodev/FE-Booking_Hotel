// import React from 'react'
import { useContext } from "react";
import AdultsDropdown from "../../components/AdultsDropdown/AdultsDropdown";
import KidsDropdown from "../../components/KidsDropdown/KidsDropdown";
import CheckIn from "../../components/CheckIn/CheckIn";
import CheckOut from "../../components/CheckOut/CheckOut";

// import ScrollToTop from "../../components/ScrollToTop/ScrollToTop"

import { RoomContext } from "../../context/RoomContext";

import { FaCheck } from "react-icons/fa";
import { useParams } from "react-router-dom";

import {
  FaWifi,
  FaCoffee,
  FaBath,
  FaParking,
  FaSwimmingPool,
  FaHotdog,
  FaStopwatch,
  FaCocktail,
} from "react-icons/fa";

const RoomDetails = () => {
  const { rooms } = useContext(RoomContext);

  const { id } = useParams();

  const room = rooms.find((room) => {
    return room.id === Number(id);
  });

  console.log(room);

  // const { name, description, facilities, image, price } = room;

  return (
    <section>
      {/* <ScrollToTop/> */}
      {/* banner */}
      {/* <div className="bg-room bg-cover bg-center h-[560px] relative flex
      justify-center items-center">
        
        overlay
        <div className="absolute w-full h-full bg-black/70">

        </div>

        title 
        <h1 className="text-6xl text-white z-20 font-primary text-center">
          {name} Details
        </h1>
      </div> */}

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full pb-24 pt-32">
          {/* left  */}
          <div className="w-full h-full lg:w-[60%] px-6">
            <h2 className="h2">{room?.roomType}</h2>
            <p className="mb-8">{room?.roomDescription}</p>
            <img className="mb-8" src={room?.roomPhotoUrl} alt="" />

            {/* facilities */}
            <div className="mt-12">
              <h3 className="h3 mb-3">Room Facilities</h3>
              <p className="mb-12">
                You are welcome to see the rooms, whose luxury and comfort will
                help you rest and relax after a whole day of sightseeing and
                admiring the capital city of Wielkopolska.
              </p>
            </div>

            {/* grid */}

            <div className="flex flex-wrap">
              {room?.facility ? (
                <>
                  {room.facility.drinkInfo && (
                    <div className="flex items-center justify-center w-1/4 mb-8">
                      <FaCocktail
                        className="text-yellow-500 text-3xl"
                        title="Drink Available"
                      />
                    </div>
                  )}
                  {room.facility.gymInfo && (
                    <div className="flex items-center justify-center w-1/4 mb-8">
                      <FaStopwatch
                        className="text-yellow-500 text-3xl"
                        title="Gym Available"
                      />
                    </div>
                  )}
                  {room.facility.breakfastInfo && (
                    <div className="flex items-center justify-center w-1/4 mb-8">
                      <FaHotdog
                        className="text-yellow-500 text-3xl"
                        title="Breakfast Included"
                      />
                    </div>
                  )}
                  {room.facility.poolInfo && (
                    <div className="flex items-center justify-center w-1/4 mb-8">
                      <FaSwimmingPool
                        className="text-yellow-500 text-3xl"
                        title="Pool Access"
                      />
                    </div>
                  )}
                  {room.facility.parkingInfo && (
                    <div className="flex items-center justify-center w-1/4 mb-8">
                      <FaParking
                        className="text-yellow-500 text-3xl"
                        title="Parking Available"
                      />
                    </div>
                  )}
                  {room.facility.bathInfo && (
                    <div className="flex items-center justify-center w-1/4 mb-8">
                      <FaBath
                        className="text-yellow-500 text-3xl"
                        title="Bath Included"
                      />
                    </div>
                  )}
                  {room.facility.coffeeInfo && (
                    <div className="flex items-center justify-center w-1/4 mb-8">
                      <FaCoffee
                        className="text-yellow-500 text-3xl"
                        title="Coffee Available"
                      />
                    </div>
                  )}
                  {room.facility.wifiInfo && (
                    <div className="flex items-center justify-center w-1/4 mb-8">
                      <FaWifi
                        className="text-yellow-500 text-3xl"
                        title="WiFi Included"
                      />
                    </div>
                  )}
                </>
              ) : (
                <span>No facilities</span>
              )}
            </div>
          </div>

          {/* right  */}
          <div className="w-full h-full lg:w-[40%]">
            {/* reservation  */}
            <div className="py-8 px-6 bg-accent/20 mb-12">
              <div className="flex flex-col space-y-4 mb-4">
                <h3>Your Reservation</h3>
                <div className="h-[60px]">
                  {" "}
                  <CheckIn />{" "}
                </div>
                <div className="h-[60px]">
                  {" "}
                  <CheckOut />{" "}
                </div>
                <div className="h-[60px]">
                  {" "}
                  <AdultsDropdown />{" "}
                </div>
                <div className="h-[60px]">
                  {" "}
                  <KidsDropdown />{" "}
                </div>
              </div>
              <button className="btn btn-lg btn-primary w-full">
                book now for {room?.roomPrice}$
              </button>
            </div>

            {/* rules */}
            <div>
              <h3 className="h3">Hotel Rules</h3>
              <p className="mb-6">
                Hotel management will highly appreciate your collaboration in
                abiding by these rules and regulations, whose aim is to ensure
                peaceful and safe stay for our Guests.
              </p>

              <ul className="flex flex-col gap-y-4">
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  Check-in: 3:00 PM - 9:00 PM
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  Check-out: 10:30 AM
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  No Pets
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  No Smoking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
