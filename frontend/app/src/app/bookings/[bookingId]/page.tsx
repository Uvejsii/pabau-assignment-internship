import Link from "next/link";
import { getBooking } from "@/app/data-access/booking";

export default async function Booking({ params }) {
  const booking = await getBooking(params.bookingId);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10 px-5">
      <Link
        href={"/"}
        className="absolute top-1 start-3 inline-block px-6 py-3 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out"
      >
        Go Back
      </Link>
      <div className="text-center bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg p-8 max-w-3xl w-full">
        <p className="text-lg text-gray-700 dark:text-gray-300">
          This booking is with <strong>{booking.doctor_name}</strong> For{" "}
          <strong>{booking.service}</strong> and it ends on{" "}
          <strong>{booking.end_time}</strong>
        </p>
      </div>
    </div>
  );
}
