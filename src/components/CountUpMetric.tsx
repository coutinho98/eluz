import { useState, useEffect, useRef } from 'react';

interface CountUpMetricProps {
  end: number;
  duration?: number;
  suffix?: string;
  label?: string;
}

const CountUpMetric = ({ end, duration = 2000, suffix = '', label = '' }: CountUpMetricProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isIntersecting) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number | null) => {
      if (!startTimestamp) startTimestamp = timestamp;
      if (timestamp === null || startTimestamp === null) return;
      const progress = timestamp - startTimestamp;
      const percentage = Math.min(progress / duration, 1);

      const finalValue = suffix === '+' ? Math.round(percentage * end) : Math.floor(percentage * end);

      setCount(finalValue);

      if (percentage < 1) {
        window.requestAnimationFrame(step);
      } else if (suffix === '+') {
        setCount(end);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration, isIntersecting, suffix]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <p className="text-6xl font-bold text-black font-[ranade]">
        {count}
        {suffix}
      </p>
      <p className="text-xl text-gray-700 mt-2 whitespace-nowrap">{label}</p>
    </div>
  );
};

export default CountUpMetric;