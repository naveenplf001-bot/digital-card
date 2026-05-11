import { useState } from "react";

export default function InfluencerCard() {
  const [currentVideo, setCurrentVideo] = useState(0);

  const profile = {
    name: "Creative atti",
    handle: "@creative_atti",
    niche: "Digital Creator • Branding • Media",
    followers: "248K",
    engagement: "6.9%",
    location: "Chennai, India",
    email: "hello@creativeatti.com",
    phone: "+91 82200 88524",
    bio: "This is Bharani Dharan — your one-stop solution for all digital needs.",
    about:
      "Creating content from text to visuals is my Daily meal. From ideation to promotion, I handle the complete creative process with expertise and dedication.",
    highlights: ["Branding", "Creative Media", "Influencer Content"],
    stats: [
      { label: "Followers", value: "192" },
      { label: "Avg Reach", value: "100K" },
      { label: "Collabs", value: "120+" },
    ],
    links: [
      {
        label: "Instagram",
        value: "@creative_atti",
        url: "https://www.instagram.com/creative_atti?igsh=eWNteXNwbGc5dWw2",
      },

      {
        label: "WhatsApp",
        value: "+91 82200 88524",
        url: "https://wa.me/918220088524",
      },
    ],
    accounts: [
      {
        type: "Personal Account",
        handle: "@mad_bharani",
        followers: "28.7k",
        following: "877",
        url: "https://www.instagram.com/mad_bharani?igsh=MWQ0OHFyZDJyb28yaA==",
        accent: "text-[#2b1a12]",
        bg: "bg-[#fff3e8]",
      },
      {
        type: "Creative atti",
        handle: "@creative_atti",
        followers: "192",
        following: "11",
        url: "https://www.instagram.com/creative_atti?igsh=eWNteXNwbGc5dWw2",
        accent: "text-[#d94b1a]",
        bg: "bg-[#fff0e3]",
      },
    ],
    videos: [
      { title: "Work Video 1", src: "/1.mp4" },
      { title: "Work Video 2", src: "/2.mp4" },
    ],
  };

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % profile.videos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) =>
      prev === 0 ? profile.videos.length - 1 : prev - 1
    );
  };

  return (
    <div className="w-full max-w-sm rounded-[32px] bg-white shadow-2xl border border-orange-200 overflow-hidden">
      {/* Header */}
      <div className="relative h-32 bg-gradient-to-b from-[#d94b1a] via-[#e67806] to-[#f08a0c]">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute -bottom-14 left-1/2 -translate-x-1/2">
          <div className="w-28 h-28 rounded-full bg-[#e67806] border-4 border-white shadow-lg flex items-center justify-center overflow-hidden">
            <img
              src="/logo.jpg"
              alt="Creative Atti Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="pt-16 px-5 pb-5 text-center bg-[#fffaf5]">
        {/* Name */}
        <h1 className="text-2xl font-bold text-[#2b1a12]">{profile.name}</h1>
        <p className="text-[#d94b1a] font-semibold mt-1">{profile.handle}</p>
        <p className="text-sm text-[#6b4a3a] mt-1">{profile.niche}</p>
        <p className="text-sm text-[#6b4a3a]">{profile.location}</p>

        {/* About */}
        <div className="mt-5 rounded-2xl bg-white border border-[#f2c38b] p-4 text-left shadow-sm">

          <h2 className="text-sm font-bold text-[#2b1a12] mb-3">About</h2>
          {/* Bio */}
          <p className="text-sm text-[#5a3a2c] mt-4 leading-6">{profile.bio}</p>
          <div className="flex items-start gap-3">
            <div className="w-14 h-14 rounded-full bg-[#e67806] flex items-center justify-center overflow-hidden border border-[#d94b1a] shrink-0">
              <img
                src="/mad.jpg"
                alt="About profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <p className="text-sm text-[#5a3a2c] leading-5">
              {profile.about}
            </p>
          </div>
        </div>
        {/* Skills & Experience */}
        <div className="mt-5 rounded-2xl bg-white border border-[#f2c38b] p-4 text-left shadow-sm">
          <h2 className="text-sm font-bold text-[#2b1a12] mb-3">
            What I Do
          </h2>

          <ul className="space-y-3 text-sm text-[#5a3a2c] leading-6">
            <li>
              <span className="font-semibold text-[#d94b1a]">• I Write – </span>
              Worked as a writer for a TV show on Sun Network for over 4 years.
            </li>

            <li>
              <span className="font-semibold text-[#d94b1a]">• I Direct – </span>
              Currently working as an Assistant Director in a feature film project.
            </li>

            <li>
              <span className="font-semibold text-[#d94b1a]">• I Shoot – </span>
              Equipped with professional Sony camera gear and experienced in creating
              stunning visual content.
            </li>

            <li>
              <span className="font-semibold text-[#d94b1a]">• I Edit – </span>
              Skilled in industry-standard tools like Adobe Photoshop, Premiere Pro,
              After Effects, and DaVinci Resolve to craft high-quality content.
            </li>

            <li>
              <span className="font-semibold text-[#d94b1a]">• I Upload – </span>
              Experienced in content uploading, audience engagement, and understanding
              social media algorithms.
            </li>

            <li>
              <span className="font-semibold text-[#d94b1a]">• I Promote – </span>
              Worked on multiple brand and movie promotions under the team
              <a
                href="https://www.instagram.com/thebrandmax?igsh=MXB5aWRhYmxjYmVueg=="
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#d94b1a] hover:underline"
              >
                @thebrandmax
              </a>
            </li>
          </ul>

          <p className="mt-4 text-sm text-[#6b4a3a] leading-6 border-t border-[#f2c38b] pt-4">
            From scripting to screen, and from creation to promotion — I provide
            complete digital and creative solutions under one roof.
          </p>
        </div>

        {/* Our Works Section */}
        <div className="mt-5">

          {/* Section Title */}
          <h2 className="text-sm font-bold text-[#2b1a12] mb-3 text-left">
            Our Works
          </h2>

          <div className="relative">
            <div className="w-full aspect-[9/16] max-h-[500px] mx-auto overflow-hidden rounded-2xl bg-black relative">

              {/* LEFT ARROW */}
              <button
                onClick={prevVideo}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm z-10"
              >
                ‹
              </button>

              {/* VIDEO */}
              <video
                key={profile.videos[currentVideo].src}
                controls
                className="w-full h-full object-cover"
              >
                <source
                  src={profile.videos[currentVideo].src}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              {/* RIGHT ARROW */}
              <button
                onClick={nextVideo}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm z-10"
              >
                ›
              </button>

            </div>

            {/* Video Title */}
            <p className="text-sm font-medium text-[#2b1a12] mt-3 text-center">
              {profile.videos[currentVideo].title}
            </p>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-3">
              {profile.videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentVideo(index)}
                  className={`w-2.5 h-2.5 rounded-full ${currentVideo === index
                    ? "bg-[#d94b1a]"
                    : "bg-[#f2c38b]"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>



        {/* Highlights */}
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {profile.highlights.map((item) => (
            <span
              key={item}
              className="px-3 py-1 rounded-full text-xs font-semibold bg-[#fff0e3] text-[#d94b1a] border border-[#f2c38b]"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Accounts Overview */}
        <div className="mt-5 rounded-2xl bg-white border border-[#f2c38b] p-4 text-left shadow-sm">
          <h2 className="text-sm font-bold text-[#2b1a12] mb-3">
            Accounts Overview
          </h2>

          <div className="space-y-4">
            {profile.accounts.map((account) => (
              <a
                key={account.handle}
                href={account.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between ${account.bg} p-3 rounded-xl border border-[#f2c38b] hover:shadow-md transition`}
              >
                <div>
                  <p className="text-xs text-[#a07a63]">{account.type}</p>
                  <p className={`font-semibold ${account.accent}`}>
                    {account.handle}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm font-bold text-[#2b1a12]">
                    {account.followers}
                  </p>
                  <p className="text-[10px] text-[#7a5a48]">Followers</p>
                </div>

                <div className="text-right">
                  <p className="text-sm font-bold text-[#2b1a12]">
                    {account.following}
                  </p>
                  <p className="text-[10px] text-[#7a5a48]">Following</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mt-5">
          {profile.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-white border border-[#f2c38b] p-3 shadow-sm"
            >
              <div className="text-lg font-bold text-[#2b1a12]">
                {stat.value}
              </div>
              <div className="text-[11px] text-[#7a5a48] mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-5 rounded-2xl bg-gradient-to-b from-white to-[#fff3e8] border border-[#f2c38b] p-4 text-left shadow-sm">
          <h2 className="text-sm font-bold text-[#2b1a12] mb-3">
            Contact & Links
          </h2>

          <div className="space-y-3 text-sm">
            <div>
              <div className="text-[#a07a63] text-xs">Email</div>
              <a
                href={`mailto:${profile.email}`}
                className="font-medium text-[#2b1a12] hover:text-[#d94b1a] transition break-all"
              >
                {profile.email}
              </a>
            </div>

            <div>
              <div className="text-[#a07a63] text-xs">Phone</div>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="font-medium text-[#2b1a12] hover:text-[#d94b1a] transition"
              >
                {profile.phone}
              </a>
            </div>

            {profile.links.map((link) => (
              <div key={link.label}>
                <div className="text-[#a07a63] text-xs">{link.label}</div>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#2b1a12] hover:text-[#d94b1a] transition break-all"
                >
                  {link.value}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-5 flex gap-3">
          <a
            href="https://wa.me/918220088524"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-2xl bg-[#d94b1a] text-white font-semibold py-3 shadow-md hover:opacity-95 transition text-center"
          >
            Collaborate
          </a>

          <a
            href="https://www.instagram.com/creative_atti?igsh=eWNteXNwbGc5dWw2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-2xl bg-[#2b1a12] text-white font-semibold py-3 shadow-md hover:opacity-95 transition text-center"
          >
            Instagram
          </a>
        </div>

        <p className="text-[11px] text-[#8a6a58] mt-4">
          One call can clear all your doubts!
        </p>
      </div>
    </div>
  );
}