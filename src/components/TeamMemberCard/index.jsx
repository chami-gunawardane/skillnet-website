import React from 'react';
import LinkedInIcon from '../../components/LinkedInIcon';
import EmailIcon from '../../components/EmailIcon';

const TeamMemberCard = ({ name, role, imageUrl, linkedinUrl, email }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 duration-300 ease-in-out flex flex-col">
      {/* Image Container: This div controls the image's visible area and aspect ratio */}
      <div className="w-full h-96 bg-gray-200"> {/* Added bg-gray-200 as fallback */}
        <img
          className="w-full h-full object-cover object-center" // object-cover is key!
          src={imageUrl} 
          alt={name || 'Team member photo'}
          onError={(e) => { e.target.src = 'https://placehold.co/400x400/EBF4FF/777?text=Image+Not+Found'; }} 
        />
      </div>

      {/* Content Area */}
      <div className="p-5 text-center flex-grow flex flex-col"> {/* flex-grow allows this to take remaining space */}
        <div className="mb-auto"> {/* Pushes content down if name/role is short */}
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">{name}</h3>
          <p className="text-sm text-blue-600 font-medium mb-3">{role}</p>
        </div>

        {/* Social Icons - mt-auto helps push them to the bottom if content above is variable */}
        <div className="flex justify-center space-x-3 pt-2">
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name}'s LinkedIn Profile`}
              className="text-gray-500 hover:text-blue-700 transition-colors duration-200"
            >
              <LinkedInIcon className="w-5 h-5" />
            </a>
          )}
          {email && (
            <a
              href={email}
              aria-label={`Email ${name}`}
              className="text-gray-500 hover:text-blue-700 transition-colors duration-200"
            >
              <EmailIcon className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;