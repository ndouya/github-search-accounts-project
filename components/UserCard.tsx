"use client";

import { MapPin, Link as LinkIcon, Building2 } from "lucide-react";
import { GithubUser } from "@/types/github";

interface UserCardProps {
  user: GithubUser;
}

export default function UserCard({ user }: UserCardProps) {
  const joinedDate = new Date(user.created_at).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="mt-6 rounded-2xl bg-white dark:bg-[#1F2A48] p-6 md:p-10 shadow-xl transition-colors duration-200">
      
      {/* Outer Flex Container splitting Avatar from Content on Desktop */}
      <div className="flex items-start gap-9">
        
        {/* Desktop Avatar (Hidden on Mobile/Tablet) */}
        <div className="hidden lg:block shrink-0">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="h-28 w-28 rounded-full"
          />
        </div>

        {/* Main Content Column */}
        <div className="flex-1 min-w-0">
          
          {/* Header Block */}
          <div className="flex gap-4 sm:gap-6 items-center lg:items-start">
            {/* Mobile/Tablet Avatar (Hidden on Desktop) */}
            <div className="lg:hidden shrink-0">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="h-20 w-20 sm:h-24 sm:w-24 rounded-full"
              />
            </div>

            {/* Name and Handle Identity Context */}
            <div className="flex-1 min-w-0 lg:flex lg:justify-between lg:items-start">
              <div>
                <h2 className="text-[20px] sm:text-2xl font-bold text-[#2B3442] dark:text-white truncate">
                  {user.name || user.login}
                </h2>
                <p className="text-[#0079FF] text-sm sm:text-base mt-1">
                  @{user.login}
                </p>
              </div>
              
              <p className="text-[#697C9A] dark:text-[#90A4AE] text-sm sm:text-base mt-2 lg:mt-1">
                Joined {joinedDate}
              </p>
            </div>
          </div>

          {/* Biography Text Wrapper */}
          <p className="mt-6 lg:mt-4 text-[#4B567A] dark:text-[#C4D4E3] text-sm sm:text-base leading-relaxed">
            {user.bio || "This profile has no bio"}
          </p>

          {/* Core Repos / Followers Stats Block */}
          <div className="mt-8 flex justify-between rounded-xl bg-[#F6F8FF] dark:bg-[#141D2F] px-6 py-5 text-left transition-colors duration-200">
            <div>
              <p className="text-xs sm:text-sm text-[#697C9A] dark:text-[#90A4AE]">Repos</p>
              <h3 className="text-base sm:text-[22px] font-bold text-[#2B3442] dark:text-white mt-1">
                {user.public_repos}
              </h3>
            </div>
            
            <div>
              <p className="text-xs sm:text-sm text-[#697C9A] dark:text-[#90A4AE]">Followers</p>
              <h3 className="text-base sm:text-[22px] font-bold text-[#2B3442] dark:text-white mt-1">
                {user.followers}
              </h3>
            </div>
            
            <div>
              <p className="text-xs sm:text-sm text-[#697C9A] dark:text-[#90A4AE]">Following</p>
              <h3 className="text-base sm:text-[22px] font-bold text-[#2B3442] dark:text-white mt-1">
                {user.following}
              </h3>
            </div>
          </div>

          {/* Social Meta Links Grid Area */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 text-sm text-[#4B567A] dark:text-[#C4D4E3]">
            
            {/* Location */}
            <div className={`flex items-center gap-4 ${!user.location && 'opacity-50'}`}>
              <MapPin size={20} className="shrink-0 text-[#4B567A] dark:text-white" />
              <span className="truncate">{user.location || "Not Available"}</span>
            </div>

            {/* Website URL */}
            <div className={`flex items-center gap-4 ${!user.blog && 'opacity-50'}`}>
              <LinkIcon size={20} className="shrink-0 text-[#4B567A] dark:text-white" />
              {user.blog ? (
                <a 
                  href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:underline truncate text-[#4B567A] dark:text-white"
                >
                  {user.blog}
                </a>
              ) : (
                <span>Not Available</span>
              )}
            </div>

            {/* Twitter/X Vector Icon */}
            <div className={`flex items-center gap-4 ${!user.twitter_username && 'opacity-50'}`}>
              <svg 
                viewBox="0 0 24 24" 
                width="20" 
                height="20" 
                stroke="currentColor" 
                strokeWidth="2" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="shrink-0 text-[#4B567A] dark:text-white"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
              {user.twitter_username ? (
                <a 
                  href={`https://twitter.com/${user.twitter_username}`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:underline truncate text-[#4B567A] dark:text-white"
                >
                  @{user.twitter_username}
                </a>
              ) : (
                <span>Not Available</span>
              )}
            </div>

            {/* Company Organization */}
            <div className={`flex items-center gap-4 ${!user.company && 'opacity-50'}`}>
              <Building2 size={20} className="shrink-0 text-[#4B567A] dark:text-white" />
              <span className="truncate">{user.company || "Not Available"}</span>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}