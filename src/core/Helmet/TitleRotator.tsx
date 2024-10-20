// import useTimeout from '@mui/utils/useTimeout';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface TitleRotatorProps {
  interval: number;
}

export default function TitleRotator(props: TitleRotatorProps) {
  const { interval } = props;
  const documentDefined = typeof document !== 'undefined';

  const [title, setTitle] = React.useState<string>('Thomas Caron ');
  const titleIntervalId = React.useRef<NodeJS.Timeout | undefined>(undefined);

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
    }, interval * 1000);

    return () => {
      clearInterval(titleIntervalId.current);
    };
  }, [documentDefined]);

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}
