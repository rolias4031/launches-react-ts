import React, { Dispatch, SetStateAction } from 'react';
import { Launch } from './LaunchDisplay';

/*
 * when you click this component, should take you to individual page with more information.
 */

export interface DetailMode {
  active: boolean;
  id: string;
}

interface CompProps {
  launch: Launch;
  raiseMode: Dispatch<SetStateAction<DetailMode>>;
}

function LaunchCard({ launch, raiseMode }: CompProps) {
  function clickHandler(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    console.log(event);
    raiseMode(() => ({ active: true, id: launch.id }));
  }

  return (
    <>
      <div onClick={clickHandler} className="m-5 space-x-2 flex cursor-pointer bg-gray-600 p-2 rounded-sm">
        <p className="text-white">{launch.mission_name}</p>
        <p className="text-yellow-300 ">{launch.id}</p>
      </div>
    </>
  );
}

export default LaunchCard;
