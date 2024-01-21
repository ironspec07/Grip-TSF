/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";

function DonationForm() {
  const [donationAmount, setDonationAmount] = useState(0);
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");

  const handleDonation = async () => {
    try {
      const orderUrl = "http://localhost:8080/api/donation/orders";
      const { data } = await axios.post(orderUrl, {
        amount: donationAmount,
      });
      console.log(data);
      const options = {
        key: "rzp_test_EAGAiE3GJTuf8W",
        amount: data.data.amount,
        currency: data.data.currency,
        name: "NGO Donation",
        description: "Donation for a good cause",
        order_id: data.id,
        handler: async (response) => {
          try {
            const verifyUrl = "http://localhost:8080/api/donation/verify";
            const verifyResponse = await axios.post(verifyUrl, response);
            console.log(verifyResponse.data);
            // Handle success
          } catch (error) {
            console.log(error);
            // Handle error
          }
        },
        theme: {
          color: "#FF5733",
        },
      };

      const rzp = new Razorpay(options);
      rzp.open();
    } catch (error) {
      console.log(error);
      // Handle error
    }
  };

  return (
    <section className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Make a Donation</h2>
      <form>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="donorName"
          >
            Full Name:
          </label>
          <input
            type="text"
            id="donorName"
            name="donorName"
            value={donorName}
            onChange={(e) => setDonorName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="donorEmail"
          >
            Email:
          </label>
          <input
            type="email"
            id="donorEmail"
            name="donorEmail"
            value={donorEmail}
            onChange={(e) => setDonorEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="donationAmount"
          >
            Donation Amount (INR):
          </label>
          <input
            type="number"
            id="donationAmount"
            name="donationAmount"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button
          type="button"
          onClick={handleDonation}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Donate
        </button>
      </form>
    </section>
  );
}

export default DonationForm;
