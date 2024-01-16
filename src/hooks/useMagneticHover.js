import { useEffect } from 'react';

const useMagneticHover = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const magneticItems = document.querySelectorAll('.magnetic-item');

      magneticItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        const offsetX = event.clientX - x;
        const offsetY = event.clientY - y;

        if (Math.abs(offsetX) <= rect.width / 3 && Math.abs(offsetY) <= rect.height / 3) {
          item.style.transform = `translate3d(${offsetX * 0.05}px, ${offsetY * 0.05}px, 0)`;
          item.style.transition = 'transform 0.3s ease';
        } else {
          item.style.transform = 'translate3d(0, 0, 0)';
          item.style.transition = 'transform 0.3s ease';
        }
      });
    };

    const handleMouseEnter = (event) => {
      const item = document.querySelector('.magnetic-item');

      if (item) {
        item.style.transition = 'transform 0.3s ease';
      }
    };

    const handleMouseLeave = (event) => {
      const item = document.querySelector('.magnetic-item');

      if (item) {
        item.style.transform = 'translate3d(0, 0, 0)';
        item.style.transition = 'transform 0.3s ease';
        setTimeout(() => {
          item.style.transition = 'none';
        }, 300);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
};

export default useMagneticHover;