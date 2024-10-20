import React from 'react';
import { Helmet } from 'react-helmet-async';

const AVAILABLE_ICONS = ['react.svg', 'skull.svg'];

export interface IconRandomizerProps {
  // Interval in seconds
  interval: number;
}

export default function IconRandomizer(props: IconRandomizerProps) {
  const { interval } = props;

  const documentDefined = typeof document !== 'undefined';
  const [icon, setIcon] = React.useState<string>('');
  const intervalId = React.useRef<NodeJS.Timeout | undefined>(undefined);

  React.useEffect(() => {
    if (!documentDefined) return () => undefined;

    intervalId.current = setInterval(() => {
      setIcon(AVAILABLE_ICONS[Math.floor(Math.random() * AVAILABLE_ICONS.length)]);
    }, interval * 1000);

    return () => {
      clearInterval(intervalId.current);
    };
  }, [documentDefined]);

  return (
    <Helmet>
      <link rel="icon" type="image/svg+xml" href={`/${icon}`} />
    </Helmet>
  );
}
