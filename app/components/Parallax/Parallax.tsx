import Image from "next/image";
import quotes from "./data";
import dumbell from "/public/Dumbell.svg";
import Style from "./Parallax.module.css";

/**
 * @component A reusable Infinite Moving Component.
 * @param {string} [props.duration=20] - Duration in Seconds and the default value is 20s.
 */

const Parallax = ({
  direction,
  duration,
  variant,
  ...props
}: ParallaxPropsType) => {
  return (
    <div
      className={`container-start h-12 max-md:h-11 max-w-screen overflow-hidden gap-10 ${
        variant == "primary" ? "bg-primary" : "bg-secondary"
      }`}
      {...props}
    >
      <Quotes direction={direction} duration={duration} />
      <Quotes direction={direction} duration={duration} />
    </div>
  );
};

const Quotes = ({ direction, duration = 20 }: QuotesPropsType) => (
  <div
    className={`container-center min-w-max overflow-hidden gap-10 ${
      direction == "right" ? Style.quoteRight : Style.quoteLeft
    }`}
    style={{ animationDuration: `${duration}s` }}
  >
    {quotes.map((quote, key) => (
      <Quote key={key} quote={quote} />
    ))}
  </div>
);

const Quote = ({ quote }: QuotePropsType) => (
  <>
    <span className="text-xl max-md:text-lg text-dark whitespace-nowrap">
      {quote}
    </span>
    <Image src={dumbell} alt="dumbell" width={20} height={20} />
  </>
);

// types definitions starts here
type duration = number;
type QuotePropsType = { quote: string };
type QuotesPropsType = {
  direction: "right" | "left";
  duration?: duration;
};
type ParallaxPropsType = React.ComponentProps<"div"> &
  QuotesPropsType & {
    variant: "primary" | "secondary";
  };

export default Parallax;
