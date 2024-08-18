import Image from "next/image";
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full pt-4 lg:py-6">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div className="h-full flex items-center flex-col justify-center md:space-y-4">
                <h1 className="lg:leading-tighter text-lg md:text-4xl font-bold tracking-tighte">
                  Dr. Abhay Yadav, MS
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl text-center">
                  Senior Consultant - Orthopaedic & Spine Surgeon
                </p>
              </div>
              <div className="hidden md:block">
                <Image
                  src="/Dr-Abhay-Yadav-2.jpg"
                  width={500}
                  height={300}
                  alt="Doctor and patient"
                  className="rounded-xl object-cover"
                  style={{ aspectRatio: "600/400", objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-16 my-6">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Professional Journey
            </h2>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Professional Journey */}
              <section className="mb-8">
                {/* Work Experience */}
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Work Experience
                  </h3>
                  <ul className="list-disc pl-6 text-lg text-gray-600">
                    <li>
                      Head of Department, Nepal Korea Friendship Hospital. (2011
                      – Present)
                    </li>
                    <li>
                      Head of Department, Vayodha Hospital. (2011 – Present)
                    </li>
                    <li>
                      Consultant, Scheer Memorial Hospital, Banepa. (2009 –
                      2011)
                    </li>
                  </ul>
                </div>

                {/* Achievements */}
                <div className="mt-4">
                  <p className="text-lg text-gray-600">
                    With 16 years of experience in Orthopaedics, has performed
                    more than 11,000 surgical cases including Trauma, Spine,
                    Arthroplasty, Arthroscopy, and Tumour Surgeries.
                  </p>
                </div>
              </section>

              {/* Education & Training */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Education & Training
                </h2>
                <ul className="list-disc pl-6 text-lg text-gray-600">
                  <li>
                    Minimally Invasive Spine Surgery, New York Presbyterian
                    Hospital, New York, USA.
                  </li>
                  <li>
                    Endoscopic Spine Surgery Training, Desert Institute for
                    Spine Care (DISC), Phoenix, USA.
                  </li>
                  <li>
                    Fellowship in Spine Surgery, Indian Spinal Injuries Centre
                    (ISIC), Delhi, India, 2011.
                  </li>
                  <li>
                    MS, Orthopaedics Banaras Hindu University (BHU), India,
                    2009.
                  </li>
                  <li>MBBS, Banaras Hindu University (BHU), India, 2005.</li>
                </ul>
              </section>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
