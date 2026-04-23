import { useInView } from '../hooks/useInView';

/**
 * FadeUp — wraps children in an element that fades/slides up on scroll.
 * The actual animation is defined in index.css (.fade-up and .fade-up.visible).
 *
 * The `as` prop lets callers render a different HTML tag (div by default).
 * This is a common React pattern called "polymorphic components."
 */
export default function FadeUp({ children, as: Tag = 'div', className = '', ...rest }) {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      className={`fade-up ${inView ? 'visible' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
