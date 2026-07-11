import { useInView } from '../hooks/useInView';

function Reveal({ children, delay = 0, className = '' }) {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  );
}

export default Reveal;