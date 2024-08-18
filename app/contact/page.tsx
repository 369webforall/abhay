import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr. Abhay Yadav, MS - Orthopaedic & Spine Surgeon | appointment",
  description:
    "Dr. Abhay Yadav, MS - Senior Consultant Orthopaedic & Spine Surgeon with expertise in Minimally Invasive Spine Surgery, Arthroplasty, Trauma Care. Serving Kathmandu and Nepal.",
};

const hospitals = [
  {
    name: "Nepal Korea Friendship Hospital",
    role1: "Senior Consultant",
    role2: "Orthopedic Surgeon",
    address: "Madhyapur Thimi - 5, Bhaktapur, Nepal",
    appointmentLink: "https://nkfmh.org.np/contact/",
  },
  {
    name: "Vayodha Hospital",
    role1: "Orthopedic Department",
    role2: " Orthopedic and spine surgeons",
    address: "Kathmandu, Nepal",
    appointmentLink:
      "https://www.linkedin.com/posts/vayodha-hospital-1382961a2_bestprivatehospitalinkathmandu-besthealthcarecenter-activity-6633676050498977792-OuH2/",
  },
  {
    name: "NORVIC Hospital",
    role1: "Senior Consultant",
    role2: "Orthopaedic & Spine Surgeon",
    address: "Thapathali, Kathmandu, Nepal.",
    appointmentLink: "https://norvichospital.com/doctor/dr-abhay-yadav-ms/",
  },
];

const AppointmentCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-orange-100 p-6">
      {hospitals.map((hospital, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-6 space-y-2"
        >
          <h3 className="text-xl font-semibold text-gray-800">
            {hospital.name}
          </h3>
          <p className="text-md text-gray-600">{hospital.role1}</p>
          <p className="text-md text-gray-600">{hospital.role2}</p>
          <p className="text-md text-gray-600">{hospital.address}</p>
          <a
            href={hospital.appointmentLink}
            target="_blank"
            className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Book Appointment
          </a>
        </div>
      ))}
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="min-h-screen container mx-auto py-6">
      <AppointmentCards />
    </div>
  );
};

export default ContactPage;
