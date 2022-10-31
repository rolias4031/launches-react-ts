import React, { Dispatch, SetStateAction } from 'react';
import { DetailMode } from './LaunchCard';
import { Launch } from './LaunchDisplay';

interface CompProps {
  launch: Launch;
  raiseMode: Dispatch<SetStateAction<DetailMode>>;
}

function LaunchDetail({ launch, raiseMode }: CompProps) {
  return (
    <>
      <button
        type="button"
        className="bg-gray-600 m-5 px-2 py-1 rounded-sm text-white"
        onClick={() => raiseMode(() => ({ active: false, id: '' }))}
      >
        Back
      </button>
      <div className="text-white m-5 bg-gray-600 p-5 rounded-sm">
        <p>{launch.mission_name}</p>
        <p>{launch.id}</p>
        <p>{launch.launch_site.site_name_long}</p>
        <p>{launch.launch_date_local}</p>
      </div>
    </>
  );
}

export default LaunchDetail;
