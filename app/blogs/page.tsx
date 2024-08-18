import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr. Abhay Yadav, MS - Orthopaedic & Spine Surgeon | blogs",
  description:
    "Dr. Abhay Yadav, MS - Senior Consultant Orthopaedic & Spine Surgeon with expertise in Minimally Invasive Spine Surgery, Arthroplasty, Trauma Care. Serving Kathmandu and Nepal.",
};

const BlogPage = () => {
  return (
    <div className="min-h-screen p-6">
      <section className="border-b p-4">
        <h1 className="mb-4 text-2xl font-semibold bg-orange-400 p-2">
          YouTube Videos
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/mLEVkOZPmcw?si=1V0TN4jpUTs5qMfT"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Ynwab9YpDCU?si=Zbh2aq80tjFmE8ec"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/SUkm7qIXKss?si=sG19Eb_Daz_4nQPO"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
