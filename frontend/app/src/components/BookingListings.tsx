import Link from "next/link";

const BookingListings = ({ booking }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-4 border border-gray-200">
      <p className="text-lg font-semibold text-gray-800 mb-2">
        A booking on {formatDate(booking.date)}
      </p>
      <p className="text-sm text-gray-600">
        Starting at{" "}
        <span className="font-medium text-gray-900">{booking.start_time}</span>
      </p>
      <Link
        href={`/bookings/${booking.id}`}
        className="inline-block mt-4 py-1 w-full text-center text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-300"
      >
        View Details
      </Link>
    </div>
  );
};

export default BookingListings;
