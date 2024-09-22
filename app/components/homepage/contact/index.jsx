// @flow strict
import Image from "next/image";
import { BiLogoLinkedin } from "react-icons/bi";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import GlowCard from "../../helper/glow-card";
import { personalData } from "@/utils/data/personal-data";

function ContactSection() {
  return (
    <div id="contact" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      {/* Background Image */}
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      
      {/* Section Title: Get In Touch */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Get In Touch
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Contact Information with Glow Cards */}
      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 justify-center">
          {/* Email Glow Card */}
          <GlowCard identifier="contact-email">
            <div className="p-3 relative text-white">
              <div className="flex items-center gap-x-6 px-3 py-5">
                <MdAlternateEmail className="text-violet-500 transition-all duration-300 hover:scale-125" size={36} />
                <div>
                  <p className="text-base sm:text-xl mb-2 font-medium">Email</p>
                  <p className="text-sm sm:text-base">{personalData.email}</p>
                </div>
              </div>
            </div>
          </GlowCard>

          {/* Phone Glow Card */}
          <GlowCard identifier="contact-phone">
            <div className="p-3 relative text-white">
              <div className="flex items-center gap-x-6 px-3 py-5">
                <IoMdCall className="text-violet-500 transition-all duration-300 hover:scale-125" size={36} />
                <div>
                  <p className="text-base sm:text-xl mb-2 font-medium">Phone</p>
                  <p className="text-sm sm:text-base">{personalData.phone}</p>
                </div>
              </div>
            </div>
          </GlowCard>

          {/* Location Glow Card */}
          <GlowCard identifier="contact-location">
            <div className="p-3 relative text-white">
              <div className="flex items-center gap-x-6 px-3 py-5">
                <CiLocationOn className="text-violet-500 transition-all duration-300 hover:scale-125" size={36} />
                <div>
                  <p className="text-base sm:text-xl mb-2 font-medium">Location</p>
                  <p className="text-sm sm:text-base">{personalData.address}</p>
                </div>
              </div>
            </div>
          </GlowCard>

          {/* Social Links Glow Card */}
          <GlowCard identifier="contact-social">
            <div className="p-3 relative text-white">
              <div className="flex items-center gap-x-8 px-3 py-5">
                {/* GitHub Icon */}
                <a href={personalData.github} target="_blank" rel="noopener noreferrer">
                  <IoLogoGithub className="text-violet-500 transition-all duration-300 hover:scale-125" size={48} />
                </a>
                {/* LinkedIn Icon */}
                <a href={personalData.linkedIn} target="_blank" rel="noopener noreferrer">
                  <BiLogoLinkedin className="text-violet-500 transition-all duration-300 hover:scale-125" size={48} />
                </a>
              </div>
            </div>
          </GlowCard>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
