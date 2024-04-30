import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Table = ({ place }) => {
    const { _id, tourists_spot_name, location, average_cost, seasonality } = place;
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/newspot/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deleteCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Tourist Spot has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
                    <tr>
                        <th>{tourists_spot_name}</th>
                        <td>{location}</td>
                        <td>{seasonality}</td>
                        <td>{average_cost}</td>
                        <td><Link to={`/update/${_id}`} ><button className='btn btn-md btn-success border-white text-white'>Update</button></Link></td>
                        <td><button onClick={() => handleDelete(_id)} className="btn btn-error">Delete</button></td>
                    </tr>
                
    );
};

Table.propTypes = {
    place: PropTypes.object
};

export default Table;