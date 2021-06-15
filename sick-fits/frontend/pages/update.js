import UpdateProduct from '../components/UpdateProduct';

const Update = ({ query }) => (
  <div>
    <UpdateProduct id={query.id} />
  </div>
);

export default Update;
