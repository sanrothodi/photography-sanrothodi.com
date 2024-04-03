import React from "react";

const username = "sanrothodi";
const socials = [
    {
    name: "X",
    viewBox: `0 1.2 29 10`,
    svgPath: `M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z`,
    },
    {
    name: "LinkedIn",
    viewBox: `-60 -150 1000 1000`,
    svgPath: `M195 349v553H11V349h184zm12-171q0 41-29 68t-75 27h-1q-46 0-74-27T0 178t29-68 75-27 74 27 29 68zm650 407v317H674V606q0-59-23-92t-71-33q-35 0-58 19t-36 48q-6 17-6 45v309H296q1-223 1-361V376l-1-27h184v80h-1q11-18 23-31t31-29 49-24 64-9q95 0 153 63t58 186z`,
    },
    {
    name: "Facebook",
    viewBox: `0 -150 1000 1000`,
    svgPath: `M570.5 310h144l-17 159h-127v460h-190V469h-95V310h95v-95c0-68 16-119.3 48-154s84.7-52 158-52h126v158h-79c-14.7 0-26.3 1.3-35 4s-15 7-19 13-6.3 12.3-7 19-1.3 16-2 28v79z`,
    },
    {
    name: "Instagram",
    viewBox: `-70 -150 1000 1000`,
    svgPath: `M571 500q0-59-41-101t-101-42-101 42-42 101 42 101 101 42 101-42 41-101zm77 0q0 91-64 156t-155 64-156-64-64-156 64-156 156-64 155 64 64 156zm61-229q0 21-15 36t-37 15-36-15-15-36 15-36 36-15 37 15 15 36zM429 148H327l-54 2-57 5-40 11q-28 11-49 32t-33 49q-6 16-10 40t-6 58-1 53 0 59 0 43 0 43 0 59 1 53 6 58l10 40q12 28 33 49t49 32q16 6 40 11t57 5 54 2 59 0 43 0 42 0 59 0 54-2 58-5 39-11q28-11 50-32t32-49q6-16 10-40t6-58 1-53 0-59 0-43 0-43 0-59-1-53-6-58l-10-40q-11-28-32-49t-50-32q-16-6-39-11t-58-5-54-2-59 0-42 0zm428 352q0 128-3 177-5 116-69 180t-179 69q-50 3-177 3t-177-3q-116-6-180-69T3 677q-3-49-3-177t3-177q5-116 69-180t180-69q49-3 177-3t177 3q116 6 179 69t69 180q3 49 3 177z`,
    },
    // Add more social media

];

const SocialMedia = () => {
  return (
    <div className="social-media">
      <ul>
        {socials.map((socials, index) => (
          <label key={index} className={`${socials.name.toLowerCase()}-circle`}>
            <li>
            <a className="social-icon-link" href= {`https://${socials.name.toLowerCase()}.com/${username}`} target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox={socials.viewBox} className={`social-icon ${socials.name.toLowerCase()}`}>
                <path fill="currentColor" d={socials.svgPath} />
              </svg>
            </a>
            </li>
          </label>
        ))}
      </ul>
    </div>
  );
};

export default SocialMedia;
