import IconRandomizer from './IconRandomizer';
import TitleRotator from './TitleRotator';

export default function HelmetComponent() {
  return (
    <>
      <TitleRotator interval={1} />
      <IconRandomizer interval={5} />
    </>
  );
}
