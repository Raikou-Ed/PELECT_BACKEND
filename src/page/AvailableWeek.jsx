import React from 'react';

function AvailableWeek() {
  return (
    <div className="relative w-full min-h-screen p-5">
      {/* Background Image */}
      <img 
        src="image.jpg" 
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />

      <div className="p-4  bg-blue-700 text-white ">
        <div className="flex items-center">
          <div className="w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center">
            <span className="text-2xl">S</span>
          </div>
          <div className="ml-4">
            <h1 className="text-xl font-semibold">Home Service (Profile)</h1>
            <p>#xxxx-xxx-xxxx</p>
            <p>Jane Doe S.</p>
            <p>Service Type</p>
            <p>Rate</p>
            <p>Service area</p>
          </div>
        </div>
      </div>

      <div className="p-6 text-white">
        <h2 className="text-2xl font-bold">Availability for this Week</h2>

        <table className="mt-4 w-full bg-white rounded shadow-md text-black">
          <thead>
            <tr className="bg-blue-950 text-white">
              <th className="py-2 px-4 text-center">Day</th>
              <th className="py-2 px-4 text-center">Available</th>
              <th className="py-2 px-4 text-center">From</th>
              <th className="py-2 px-4 text-center">To</th>
            </tr>
          </thead>
          <tbody>
            {/* MONDAY */}
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 text-center">MONDAY</td>
              <td className="py-2 px-4 text-center">
                <input type="checkbox" className="w-5 h-5" />
              </td>
              <td className="py-2 px-4 text-center ">
                <select className="py-2 px-4 bg-green-500">
                  <option value="08:00 AM">08:00 AM</option>
                  <option value="09:00 AM">09:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                </select>
              </td>
              <td className="py-2 px-4 text-center">
                <select className="py-2 px-4 bg-red-500">
                  <option value="05:00 PM">5:00 PM</option>
                  <option value="06:00 PM">6:00 PM</option>
                  <option value="07:00 PM">7:00 PM</option>
                  <option value="08:00 PM">8:00 PM</option>
                  <option value="09:00 PM">9:00 PM</option>
                  <option value="10:00 PM">10:00 PM</option>
                </select>
              </td>
            </tr>

            {/* TUESDAY */}
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 text-center">TUESDAY</td>
              <td className="py-2 px-4 text-center">
                <input type="checkbox" className="w-5 h-5" />
              </td>
              <td className="py-2 px-4 text-center">
                <select className="py-2 px-4 bg-green-500">
                  <option value="08:00 AM">08:00 AM</option>
                  <option value="09:00 AM">09:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                </select>
              </td>
              <td className="py-2 px-4 text-center">
                <select className="py-2 px-4 bg-red-500">
                  <option value="05:00 PM">5:00 PM</option>
                  <option value="06:00 PM">6:00 PM</option>
                  <option value="07:00 PM">7:00 PM</option>
                  <option value="08:00 PM">8:00 PM</option>
                  <option value="09:00 PM">9:00 PM</option>
                  <option value="10:00 PM">10:00 PM</option>
                </select>
              </td>
            </tr>

            {/* WEDNESDAY */}
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 text-center">WEDNESDAY</td>
              <td className="py-2 px-4 text-center">
                <input type="checkbox" className="w-5 h-5" />
              </td>
              <td className="py-2 px-4 text-center">
                <select className="py-2 px-4 bg-green-500">
                  <option value="08:00 AM">08:00 AM</option>
                  <option value="09:00 AM">09:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                </select>
              </td>
              <td className="py-2 px-4 text-center">
                <select className="py-2 px-4 bg-red-500">
                  <option value="05:00 PM">5:00 PM</option>
                  <option value="06:00 PM">6:00 PM</option>
                  <option value="07:00 PM">7:00 PM</option>
                  <option value="08:00 PM">8:00 PM</option>
                  <option value="09:00 PM">9:00 PM</option>
                  <option value="10:00 PM">10:00 PM</option>
                </select>
              </td>
            </tr>

            {/* THURSDAY */}
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 text-center">THURSDAY</td>
              <td className="py-2 px-4 text-center">
                <input type="checkbox" className="w-5 h-5" />
              </td>
              <td className="py-2 px-4 text-center">
                <select className="py-2 px-4 bg-green-500">
                  <option value="08:00 AM">08:00 AM</option>
                  <option value="09:00 AM">09:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                </select>
              </td>
              <td className="py-2 px-4 text-center">
                <select className="py-2 px-4 bg-red-500">
                  <option value="05:00 PM">5:00 PM</option>
                  <option value="06:00 PM">6:00 PM</option>
                  <option value="07:00 PM">7:00 PM</option>
                  <option value="08:00 PM">8:00 PM</option>
                  <option value="09:00 PM">9:00 PM</option>
                  <option value="10:00 PM">10:00 PM</option>
                </select>
              </td>
            </tr>

            {/* FRIDAY */}
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 text-center">FRIDAY</td>
              <td className="py-2 px-4 text-center">
                <input type="checkbox" className="w-5 h-5" />
              </td>
              <td className="py-2 px-4 text-center">
                <select className="py-2 px-4 bg-green-500">
                  <option value="08:00 AM">08:00 AM</option>
                  <option value="09:00 AM">09:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                </select>
              </td>
              <td className="py-2 px-4 text-center">
                <select className="py-2 px-4 bg-red-500">
                  <option value="05:00 PM">5:00 PM</option>
                  <option value="06:00 PM">6:00 PM</option>
                  <option value="07:00 PM">7:00 PM</option>
                  <option value="08:00 PM">8:00 PM</option>
                  <option value="09:00 PM">9:00 PM</option>
                  <option value="10:00 PM">10:00 PM</option>
                </select>
              </td>
            </tr>

            {/* SATURDAY */}
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 text-center">SATURDAY</td>
              <td className="py-2 px-4 text-center">
                <input type="checkbox" className="w-5 h-5" />
              </td>
              <td className="py-2 px-4 text-center">
                <select className="py-2 px-4 bg-green-500">
                  <option value="08:00 AM">08:00 AM</option>
                  <option value="09:00 AM">09:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                </select>
              </td>
              <td className="py-2 px-4 text-center">
                <select className="py-2 px-4 bg-red-500">
                  <option value="05:00 PM">5:00 PM</option>
                  <option value="06:00 PM">6:00 PM</option>
                  <option value="07:00 PM">7:00 PM</option>
                  <option value="08:00 PM">8:00 PM</option>
                  <option value="09:00 PM">9:00 PM</option>
                  <option value="10:00 PM">10:00 PM</option>
                </select>
              </td>
            </tr> 
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AvailableWeek;