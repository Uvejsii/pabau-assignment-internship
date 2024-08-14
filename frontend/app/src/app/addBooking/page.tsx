"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getBookings, submitBooking } from "@/app/data-access/booking";

export default function AddBooking() {
  const [newBooking, setNewBooking] = useState({
    service: "",
    doctor_name: "",
    start_time: "",
    end_time: "",
    date: "",
  });
  const [isInputBlank, setIsInputBlank] = useState({
    service: false,
    doctor_name: false,
    start_time: false,
    end_time: false,
    date: false,
  });
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const today = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewBooking({
      ...newBooking,
      [name]: value,
    });

    setIsInputBlank((prev) => ({
      ...prev,
      [name]: value.trim() === "",
    }));
  };

  const validateInputs = () => {
    const errors = {
      service: newBooking.service.trim() === "",
      doctor_name: newBooking.doctor_name.trim() === "",
      start_time: newBooking.start_time.trim() === "",
      end_time: newBooking.end_time.trim() === "",
      date: newBooking.date.trim() === "",
    };

    setIsInputBlank(errors);

    return Object.values(errors).includes(true);
  };

  const handleSubmitBooking = async (e) => {
    e.preventDefault();

    if (validateInputs()) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setErrorMessage("");

    try {
      const response = await submitBooking(newBooking);

      if (response?.message === "Booking inserted successfully") {
        await getBookings();
        router.push("/");
      }
    } catch (error) {
      console.error("Failed to create booking:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 py-10 px-4 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="absolute top-1 start-3 inline-block px-6 py-3 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out"
      >
        Go Back
      </Link>
      <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg p-6 max-w-md w-full sm:p-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
          Add Booking
        </h1>
        <form onSubmit={handleSubmitBooking}>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <div className="flex-1">
              <label
                htmlFor="service"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Service
              </label>
              <input
                type="text"
                id="service"
                name="service"
                placeholder="Service"
                className={`shadow-sm rounded-md w-full px-3 py-2 border ${
                  isInputBlank.service ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                value={newBooking.service}
                onChange={handleChange}
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="doctor_name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Dr. Name
              </label>
              <input
                type="text"
                id="doctor_name"
                name="doctor_name"
                placeholder="Dr Name"
                className={`shadow-sm rounded-md w-full px-3 py-2 border ${
                  isInputBlank.doctor_name
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                value={newBooking.doctor_name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 my-4">
            <div className="flex-1">
              <label
                htmlFor="start_time"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Start time
              </label>
              <input
                type="text"
                id="start_time"
                name="start_time"
                placeholder="Start time"
                className={`shadow-sm rounded-md w-full px-3 py-2 border ${
                  isInputBlank.start_time ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                value={newBooking.start_time}
                onChange={handleChange}
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="end_time"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                End time
              </label>
              <input
                type="text"
                id="end_time"
                name="end_time"
                placeholder="End time"
                className={`shadow-sm rounded-md w-full px-3 py-2 border ${
                  isInputBlank.end_time ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                value={newBooking.end_time}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              placeholder="Date"
              className={`shadow-sm rounded-md w-full px-3 py-2 border ${
                isInputBlank.date ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              min={today}
              value={newBooking.date}
              onChange={handleChange}
            />
          </div>
          {errorMessage && (
            <p className="text-red-500 text-center mt-4">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="inline-block mt-7 w-full px-4 py-2 text-white bg-purple-500 font-medium rounded-lg hover:bg-purple-600 transition duration-300"
          >
            Add Booking
          </button>
        </form>
      </div>
    </div>
  );
}
