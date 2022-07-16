import Image from "next/image";
import { parseDaysInTheQueue, parseLengthOfTheQueue } from "../utilities";

interface ClinicStatisticsProps {
  queue: number;
  days: number;
}

const ClinicStatistics = (props: ClinicStatisticsProps) => {
  return (
    <div className="clinicsStatistics">
      <div>
        <div>
          <Image
            src={"/tileIcons/queue.png"}
            alt="queue"
            width={24}
            height={24}
          />
        </div>
        <p>{parseLengthOfTheQueue(props.queue)}</p>
      </div>
      <div>
        <div>
          <Image src={"/clock.png"} alt="queue" width={24} height={24} />
        </div>
        <p>{parseDaysInTheQueue(props.days)}</p>
      </div>
    </div>
  );
};

export default ClinicStatistics;
