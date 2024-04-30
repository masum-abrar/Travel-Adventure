import PropTypes from 'prop-types'

const Table = ({ place }) => {
    const { tourists_spot_name, location, average_cost, seasonality } = place;
    return (
                    <tr>
                        <th>{tourists_spot_name}</th>
                        <td>{location}</td>
                        <td>{seasonality}</td>
                        <td>{average_cost}</td>
                        <td><button className="btn btn-info">Update</button></td>
                        <td><button className="btn btn-error">Delete</button></td>
                    </tr>
    );
};

Table.propTypes = {
    place: PropTypes.object
};

export default Table;