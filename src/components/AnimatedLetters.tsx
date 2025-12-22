import { FC } from "react";

interface AnimatedLettersProps {
  letterClass: string;
  strArray: string[];
  idx: number;
                isHollow :boolean

}

const AnimatedLetters: FC<AnimatedLettersProps> = ({
  letterClass,
  strArray,
  idx,
  isHollow
}) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx} ${isHollow && "stroke text-white"}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
