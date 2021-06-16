/* eslint-disable react/prop-types */
import RequestReset from '../components/RequestReset';
import Reset from '../components/Reset';

const ResetPage = ({ query }) => {
  const { token } = query;
  if (!query?.token) {
    return (
      <div>
        <p>No Token Provided</p>
        <RequestReset />
      </div>
    );
  }
  return (
    <div>
      <Reset token={token} />
    </div>
  );
};

export default ResetPage;
