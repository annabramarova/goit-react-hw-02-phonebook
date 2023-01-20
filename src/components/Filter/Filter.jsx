import propTypes from 'prop-types';
import { Fragment } from 'react';
import { FilterName, Label} from './Filter.styled'

const Filter = ({ filter, handleChange }) => (
  <Fragment>
    <Label>Find contact by Name </Label>
    <FilterName
      type="text"
      name="filter"
      placeholder="Find a person"
      value={filter}
      onChange={handleChange}
    />
  </Fragment>
);

Filter.propTypes = {
  filter: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
};

export default Filter;