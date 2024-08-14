"use client";

import BookingListings from "@/components/BookingListings";
import Link from "next/link";
import { getBookings } from "./data-access/booking";
import { useEffect, useState } from "react";

const Home = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const get = await getBookings();
      setBookings(get);
    };

    fetchBookings();
  }, []);

  return (
    <div className="mx-3">
      <Link
        href={`/addBooking`}
        className="inline-block my-4 px-4 py-2 text-white bg-purple-500 rounded hover:bg-purple-600 transition duration-300"
      >
        Add Booking
      </Link>
      <div className="flex justify-center flex-wrap gap-3">
        {bookings.map((booking) => (
          <BookingListings key={booking.id} booking={booking} />
        ))}
      </div>
    </div>
  );
};

export default Home;
