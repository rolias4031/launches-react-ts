import React, { useState } from 'react';
import LaunchCard from './LaunchCard';
import LaunchDetail from './LaunchDetail';

// * interface exported for use in LaunchCard.
export interface Launch {
  mission_name: string;
  launch_site: {
    site_name_long: string;
  };
  details: string;
  id: string;
  launch_date_local: string;
}

// * Launch => ComponentProps & placeholder
interface ComponentProps {
  launches?: Launch[];
  contState: string;
}

interface DetailMode {
  active: boolean;
  id: string;
}

// * placeholder is a bit of a hack. TS says you must have data supplied, even though its copied from props.children and the props are overridden. You're using this method of props passing because it looks nice to have a Container over a Display component.

const placeholder: Launch[] = [
  {
    mission_name: '',
    launch_site: {
      site_name_long: '',
    },
    details: '',
    id: '',
    launch_date_local: '',
  },
];

function LaunchDisplay({ launches, contState }: ComponentProps) {
  const [detailMode, setDetailMode] = useState<DetailMode>({
    active: false,
    id: '',
  });

  // * detail mode renders individual card
  if (detailMode.active && launches) {
    const match: Launch[] = launches?.filter((launch: Launch): boolean => {
      return launch.id === detailMode.id;
    });
    return <LaunchDetail raiseMode={setDetailMode} launch={match[0]} />;
  }
  // * filter and map using contState
  const filteredLaunches = launches?.filter((launch) => {
    const regex = new RegExp(`${contState.toUpperCase()}`);
    return regex.test(launch.mission_name.toUpperCase());
  });
  const launchCards = filteredLaunches?.map((launch: Launch) => {
    return (
      <LaunchCard
        key={launch.mission_name}
        launch={launch}
        raiseMode={setDetailMode}
      />
    );
  });
  return <>{launchCards}</>;
}

LaunchDisplay.defaultProps = {
  launches: placeholder,
};

export default LaunchDisplay;
