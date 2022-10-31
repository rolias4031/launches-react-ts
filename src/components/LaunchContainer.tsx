import React, { cloneElement } from 'react';
import { useQuery, gql } from '@apollo/client';

interface CompProps {
  children: JSX.Element;
}

const GET_LAUNCHES = gql`
  query GetLaunches {
    launchesPast(limit: 25) {
      mission_name
      launch_site {
        site_name_long
      }
      ships {
        name
        home_port
        image
      }
      details
      id
      launch_date_local
    }
  }
`;

function LaunchContainer({ children }: CompProps) {
  const { loading, data } = useQuery(GET_LAUNCHES);

  if (loading) return <p>Loading</p>;

  const proppedChildren = cloneElement(children, {
    launches: data.launchesPast,
  });
  return <div>{proppedChildren}</div>;
}

export default LaunchContainer;
