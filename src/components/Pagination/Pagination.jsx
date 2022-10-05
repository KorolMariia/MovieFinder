import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './Pagination.scss';
import PropTypes from 'prop-types';

export default function MoviePagination({ count, page, changePage }) {

  return (
    <div className="pagination_wrapper">
      <Stack spacing={2}>
        <Pagination
          count={count}
          page={page}
          onChange={changePage}
        />
      </Stack>
    </div>
  );
}

MoviePagination.propTypes = {
  count: PropTypes.number,
  page: PropTypes.number,
  changePage: PropTypes.func,
};
