// import useTimeout from '@mui/utils/useTimeout';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AVAILABLE_ICONS = ['react.svg', 'skull.svg'];

export default function HelmetComponent() {
  const documentDefined = typeof document !== 'undefined';
  const [title, setTitle] = React.useState<string>('Thomas Caron ');
  const titleIntervalId = React.useRef<NodeJS.Timeout | undefined>(undefined);
  const [icon, setIcon] = React.useState<string>(AVAILABLE_ICONS[0]);
  const iconIntervalId = React.useRef<NodeJS.Timeout | undefined>(undefined);

  const rotate = (arr: string[], reverse: boolean = false) => {
    if (reverse) arr.unshift(arr.pop() as string);
    else arr.push(arr.shift() as string);
    return arr;
  };

  React.useEffect(() => {
    if (!documentDefined) return () => undefined;

    titleIntervalId.current = setInterval(() => {
      setTitle((prevTitle) => {
        const newTitle = rotate(prevTitle.split('')).join('');
        return newTitle;
      });
    }, 800);

    iconIntervalId.current = setInterval(() => {
      if (!documentDefined) return;

      setIcon(AVAILABLE_ICONS[Math.floor(Math.random() * AVAILABLE_ICONS.length)]);
    }, 5000);

    return () => {
      clearInterval(titleIntervalId.current);
      clearInterval(iconIntervalId.current);
    };
  }, [documentDefined]);

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="icon" type="image/svg+xml" href={`/${icon}`} />
    </Helmet>
  );
}
