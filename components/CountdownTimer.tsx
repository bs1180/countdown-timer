import useTimer from "../hooks/useTimer";
import { Flex } from "@rebass/emotion";
import Digit from "./Digit";
import { useI18n } from "../hooks/useI18n";

const CountdownTimer: React.SFC<{ endAt: string }> = ({ endAt }) => {
  const { days, hours, minutes, seconds } = useTimer(() => new Date(endAt).getTime());

  return (
    <Flex m={2} flexDirection={["column", "row"]}>
      <Digit value={days} label={useI18n("days")} />
      <Digit value={hours} label={useI18n("hours")} />
      <Digit value={minutes} label={useI18n("minutes")} />
      <Digit value={seconds} label={useI18n("seconds")} />
    </Flex>
  );
};

export default CountdownTimer;
