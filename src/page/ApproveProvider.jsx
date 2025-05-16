import React from 'react';

function ApproveProvider() {
  return (
    <div
      className="min-h-screen bg-cover bg-center p-5"
      style={{ backgroundImage: "url('image.jpg')" }}
    >
      <div className="bg-gray-700 bg-opacity-90 rounded-xl p-6 shadow-xl">
        <div className="mt-2 mb-4">
          <h2 className="text-2xl font-bold text-white">Approve Providers</h2>
        </div>

        <table className="w-full bg-white rounded shadow-md">
          <thead>
            <tr className="bg-blue-950 text-white">
              <th className="py-2 px-4 text-center">Provider Name</th>
              <th className="py-2 px-4 text-center">Email</th>
              <th className="py-2 px-4 text-center">Service Type</th>
              <th className="py-2 px-4 text-center">Service Area</th>
              <th className="py-2 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* First row */}
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 text-center">VENDER</td>
              <td className="py-2 px-4 text-center">Vender@gmail.com</td>
              <td className="py-2 px-4 text-center">Lalaki</td>
              <td className="py-2 px-4 text-center">
                <div className="text-black">Babag2</div>
              </td>
              <td className="py-2 px-4 text-center">
                <div className="flex justify-center space-x-2">
                  <button className="bg-green-600 text-white rounded-full w-28 h-8">Approve</button>
                  <button className="bg-red-600 text-white rounded-full w-28 h-8">Reject</button>
                </div>
              </td>
            </tr>

            {/* Second row */}
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 text-center">ARSUA</td>
              <td className="py-2 px-4 text-center">Arsua@gmail.com</td>
              <td className="py-2 px-4 text-center">Provider</td>
              <td className="py-2 px-4 text-center">
                <div className="text-black">Babag2</div>
              </td>
              <td className="py-2 px-4 text-center">
                <div className="flex justify-center space-x-2">
                  <button className="bg-green-600 text-white rounded-full w-28 h-8">Approve</button>
                  <button className="bg-red-600 text-white rounded-full w-28 h-8">Reject</button>
                </div>
              </td>
            </tr>

            {/* Third row */}
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 text-center">NOQUANNA</td>
              <td className="py-2 px-4 text-center">Noquanna@gmail.com</td>
              <td className="py-2 px-4 text-center">Provider</td>
              <td className="py-2 px-4 text-center">
                <div className="text-black">Babag2</div>
              </td>
              <td className="py-2 px-4 text-center">
                <div className="flex justify-center space-x-2">
                  <button className="bg-green-600 text-white rounded-full w-28 h-8">Approve</button>
                  <button className="bg-red-600 text-white rounded-full w-28 h-8">Reject</button>
                </div>
              </td>
            </tr>

            {/* Fourth row */}
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 text-center">AYUMAN</td>
              <td className="py-2 px-4 text-center">Ayuman@gmail.com</td>
              <td className="py-2 px-4 text-center">Provider</td>
              <td className="py-2 px-4 text-center">
                <div className="text-black">Babag2</div>
              </td>
              <td className="py-2 px-4 text-center">
                <div className="flex justify-center space-x-2">
                  <button className="bg-green-600 text-white rounded-full w-28 h-8">Approve</button>
                  <button className="bg-red-600 text-white rounded-full w-28 h-8">Reject</button>
                </div>
              </td>
            </tr>

            {/* Fifth row */}
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 text-center">ABELLA</td>
              <td className="py-2 px-4 text-center">Abella@gmail.com</td>
              <td className="py-2 px-4 text-center">Bakla</td>
              <td className="py-2 px-4 text-center">
                <div className="text-black">Babag2</div>
              </td>
              <td className="py-2 px-4 text-center">
                <div className="flex justify-center space-x-2">
                  <button className="bg-green-600 text-white rounded-full w-28 h-8">Approve</button>
                  <button className="bg-red-600 text-white rounded-full w-28 h-8">Reject</button>
                </div>
              </td>
            </tr>

            {/* Sixth row */}
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 text-center">LORENZO</td>
              <td className="py-2 px-4 text-center">Lorenzo@gmail.com</td>
              <td className="py-2 px-4 text-center">Bayot</td>
              <td className="py-2 px-4 text-center">
                <div className="text-black">Babag2</div>
              </td>
              <td className="py-2 px-4 text-center">
                <div className="flex justify-center space-x-2">
                  <button className="bg-green-600 text-white rounded-full w-28 h-8">Approve</button>
                  <button className="bg-red-600 text-white rounded-full w-28 h-8">Reject</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ApproveProvider;