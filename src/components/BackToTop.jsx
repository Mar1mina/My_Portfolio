import { useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      className="back-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
      aria-label="Back to top"
    >
      <FaChevronUp />
    </button>
  );
}
