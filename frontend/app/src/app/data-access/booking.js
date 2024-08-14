import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export async function getBookings() {
  const res = await fetch("http://host.docker.internal:5000/api/bookings", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const getBooking = async (bookingId) => {
  const res = await fetch(
    `http://host.docker.internal:5000/api/bookings/${bookingId}`,
    { cache: "no-store", mode: "no-cors" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch booking");
  }

  return res.json();
};

export const submitBooking = async (bookingData) => {
  try {
    const response = await fetch(
      "http://host.docker.internal:5000/api/bookings",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      }
    );

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Failed to create booking: ${text}`);
    }

    toast.success("Booking Added Successfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

    return response.json();
  } catch (error) {
    console.error("Error submitting the form:", error);
    toast.error("Unable To Add Booking", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }
};
