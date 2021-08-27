import React, { useEffect } from 'react';

const Detail = (props) => {
  useEffect(() => {
    const { location, history } = props;
    if (location.state === undefined) {
      history.push('/');
    }
  });

  const { location } = props;
  console.log(props);

  return (
    <>
      {location.state && <span>{location.state.title}</span>}
    </>
  );
};

export default Detail;
