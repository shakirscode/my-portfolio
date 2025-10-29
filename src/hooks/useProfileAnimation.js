// hooks/useProfileAnimation.js
import { useEffect, useRef } from 'react';

export const useProfileAnimation = () => {
  const profileRef = useRef(null);

  useEffect(() => {
    const profileElement = profileRef.current;
    if (!profileElement) return;

    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      const aboutAnchor = document.getElementById('about-profile-anchor');
      
      if (!aboutSection || !aboutAnchor) return;

      const scrollPosition = window.scrollY;
      const aboutPosition = aboutSection.offsetTop;
      const aboutHeight = aboutSection.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate when to start and end the transition
      const transitionStart = aboutPosition - windowHeight * 0.3;
      const transitionEnd = aboutPosition + aboutHeight * 0.3;

      if (scrollPosition >= transitionStart && scrollPosition <= transitionEnd) {
        // During transition
        profileElement.classList.add('transition-to-about');
        profileElement.classList.remove('in-about-position');
      } else if (scrollPosition > transitionEnd) {
        // After transition
        profileElement.classList.remove('transition-to-about');
        profileElement.classList.add('in-about-position');
      } else {
        // Before transition
        profileElement.classList.remove('transition-to-about', 'in-about-position');
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return profileRef;
};