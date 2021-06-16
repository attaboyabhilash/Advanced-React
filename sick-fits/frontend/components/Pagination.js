import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Link from 'next/link';
import PaginationStyles from './styles/PaginationStyles';
import { perPage } from '../config';

export const PAGINATION_QUERY = gql`
  query {
    _allProductsMeta {
      count
    }
  }
`;

// eslint-disable-next-line react/prop-types
const Pagination = ({ page }) => {
  const { data, error, loading } = useQuery(PAGINATION_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { count } = data._allProductsMeta;
  const pageCount = Math.ceil(count / perPage);
  return (
    <PaginationStyles>
      <Link href={`/products/${page - 1}`}>
        <a aria-disabled={page <= 1}>🠐 Prev</a>
      </Link>
      <p>
        Page {page} of {pageCount}
      </p>
      <p> {count} Items Total</p>
      <Link href={`/products/${page + 1}`}>
        <a aria-disabled={page >= pageCount}>Next 🠒</a>
      </Link>
    </PaginationStyles>
  );
};

export default Pagination;
