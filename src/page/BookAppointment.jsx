import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BookAppointment() {
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState("");

  // Function to open the review modal
  const openReviewModal = (customerName) => {
    setSelectedCustomer(customerName);
    setShowReviewModal(true);
  };

  // Function to open the book appointment modal
  const openBookingModal = (customerName) => {
    setSelectedCustomer(customerName);
    setShowBookingModal(true);
  };

  // Function to close the modals
  const closeModal = () => {
    setShowReviewModal(false);
    setShowBookingModal(false);
    setSelectedCustomer("");
  };

  return (
    <div
      className="p-4"
      style={{
        backgroundImage: "url('image.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh'
      }}
    >
      <div className="p-4 bg-blue-700 text-white">
        <div className="flex items-center">
          <div className="w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center">
            <span className="text-2xl">S</span>
          </div>
          <div className="ml-4">
            <h1 className="text-xl font-semibold">Home Service (Profile)</h1>
            <p>#xxxx-xxx-xxxx</p>
            <p>Jane Doe S.</p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Booking Request</h2>
        <div className="flex items-center gap-2">
          <div className=" flex items-center justify-between">
            <span className="text-white font-medium mr-2">Service Type:</span>
            <select
              className="border border-gray-300 rounded-full px-4 py-1 w-60"
              defaultValue=""
            >
              <option value="" disabled>Select service type</option>
              <option value="house-cleaning">House Cleaning</option>
              <option value="deep-cleaning">Deep Cleaning</option>
              <option value="carpet-cleaning">Carpet & Upholstery Cleaning</option>
              <option value="window-cleaning">Window Cleaning</option>
              <option value="kitchen-cleaning">Kitchen Cleaning</option>
              <option value="bathroom-cleaning">Bathroom Cleaning</option>
              <option value="post-renovation-cleaning">Post-Renovation Cleaning</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-between">
            <span className="text-white font-medium mr-2">Location:</span>
            <select
              className="border border-gray-300 rounded-full px-4 py-1 w-60"
              defaultValue=""
            >
              <option value="" disabled>Location</option>
              <option value="house-cleaning">House Cleaning</option>
              <option value="deep-cleaning">Deep Cleaning</option>
              <option value="carpet-cleaning">Carpet & Upholstery Cleaning</option>
              <option value="window-cleaning">Window Cleaning</option>
              <option value="kitchen-cleaning">Kitchen Cleaning</option>
              <option value="bathroom-cleaning">Bathroom Cleaning</option>
              <option value="post-renovation-cleaning">Post-Renovation Cleaning</option>
            </select>
          </div>
        </div>
      </div>

      <table className="mt-4 w-full bg-white rounded shadow-md border">
        <thead>
          <tr className="bg-blue-950 text-white">
            <th className="py-2 px-4 text-center">Customer Name</th>
            <th className="py-2 px-4 text-center">Book Appointment</th>
            <th className="py-2 px-4 text-center">Review</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(6)].map((_, index) => {
            const name = ['VENDER', 'ARSUA', 'NOQUANNA', 'AYUMAN', 'ABELLA', 'LORENZO'][index];
            return (
              <tr key={name} className="hover:bg-gray-100">
                <td className="py-2 px-4 text-center">
                  <div className="flex flex-col items-center">
                    <span>{name} <Link to="/ServiceProfile" className="text-blue-600 hover:underline">(View Profile)</Link></span>
                  </div>
                </td>
                <td className="py-2 px-4 text-center">
                  <button className="bg-green-600 rounded-full w-44 h-8" onClick={() => openBookingModal(name)}>
                    Book Appointment
                  </button>
                </td>
                <td className="py-2 px-4 text-center">
                  <button
                    className="bg-green-600 rounded-full w-28 h-8"
                    onClick={() => openReviewModal(name)}
                  >
                    Review
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Modal for Review */}
      {showReviewModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Write a Review for {selectedCustomer}</h2>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
              placeholder="Write your review here..."
            ></textarea>
            <div className="flex justify-between">
              <button
                className="bg-blue-500 text-white rounded-md px-4 py-2"
                onClick={closeModal}
              >
                Close
              </button>
              <button className="bg-green-500 text-white rounded-md px-4 py-2">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Booking Appointment */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg shadow-lg w-[1100px] h-[500px] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Book Appointment for {selectedCustomer}</h2>

            {/* First Row */}
            <div className="flex gap-6 mb-4">
              {/* Firstname */}
              <div className="flex flex-col">
                <label className="mb-1 font-semibold">Firstname</label>
                <input
                  type="text"
                  placeholder="Firstname"
                  className="w-60 p-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Lastname */}
              <div className="flex flex-col">
                <label className="mb-1 font-semibold">Lastname</label>
                <input
                  type="text"
                  placeholder="Lastname"
                  className="w-60 p-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Date of Birth */}
              <div className="flex flex-col">
                <label className="mb-1 font-semibold">Date of Birth</label>
                <input
                  type="date"
                  className="w-60 p-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Sex */}
              <div className="flex flex-col">
                <label className="mb-1 font-semibold">Sex</label>
                <select className="w-60 p-2 border border-gray-300 rounded-md" defaultValue="">
                  <option value="" disabled>Select sex</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            {/* Second Row */}
            <div className="flex gap-6 mb-4">
              {/* Gmail */}
              <div className="flex flex-col">
                <label className="mb-1 font-semibold">Gmail</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-60 p-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col">
                <label className="mb-1 font-semibold">Phone Number</label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-60 p-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Service Type and Day Row */}
              <div className="flex gap-6 mb-4">
                {/* Service Type */}
                <div className="flex flex-col w-full">
                  <label className="mb-1 font-semibold">Service Type</label>
                  <select
                    className="border border-gray-300 rounded-full px-4 py-1 w-full"
                    defaultValue=""
                  >
                    <option value="" disabled>Select service type</option>
                    <option value="house-cleaning">House Cleaning</option>
                    <option value="deep-cleaning">Deep Cleaning</option>
                    <option value="carpet-cleaning">Carpet & Upholstery Cleaning</option>
                    <option value="window-cleaning">Window Cleaning</option>
                    <option value="kitchen-cleaning">Kitchen Cleaning</option>
                    <option value="bathroom-cleaning">Bathroom Cleaning</option>
                    <option value="post-renovation-cleaning">Post-Renovation Cleaning</option>
                  </select>
                </div>

                {/* Day (Positioned next to Service Type) */}
                <div className="flex flex-col w-full">
                  <label className="mb-1 font-semibold">Day</label>
                  <select
                    className="border border-gray-300 rounded-full px-4 py-1 w-full"
                    defaultValue=""
                  >
                    <option value="" disabled>Select day</option>
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                    <option value="saturday">Saturday</option>
                    <option value="sunday">Sunday</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Time Row */}
            <div className="flex gap-6 mb-4">
              {/* Time Start */}
              <div className="flex flex-col">
                <label className="mb-1 font-semibold">Time Start</label>
                <select className="w-60 p-2 border border-gray-300 rounded-md" defaultValue="">
                  <option value="08:00 AM">08:00 AM</option>
                  <option value="09:00 AM">09:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                </select>
              </div>

              {/* Time End */}
              <div className="flex flex-col">
                <label className="mb-1 font-semibold">Time End</label>
                <select className="w-60 p-2 border border-gray-300 rounded-md" defaultValue="">
                  <option value="05:00 PM">5:00 PM</option>
                  <option value="06:00 PM">6:00 PM</option>
                  <option value="07:00 PM">7:00 PM</option>
                  <option value="08:00 PM">8:00 PM</option>
                  <option value="09:00 PM">9:00 PM</option>
                  <option value="10:00 PM">10:00 PM</option>
                </select>
              </div>
            </div>

            {/* Additional Details Textarea */}
            <div className="flex flex-col mb-4">
              <label className="mb-1 font-semibold">Current Address</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Current Address"
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-6">
              <button className="bg-green-500 text-white rounded-md px-6 py-2">
                Submit
              </button>
              <button
                className="bg-blue-500 text-white rounded-md px-6 py-2"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookAppointment;