import { useContext, useEffect, useState } from "react";
import { AuthContext } from '../providers/AuthProviders';
import Table from "./table";
import { Footer } from "../components/Footer";


 export const Mylist = () => {

    const { user, loading } = useContext(AuthContext) || {};
    //  console.log(user);
    const [place, setPlace] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/mylist/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setPlace(data);
                //    console.log(data);
            });
    }, [user]);

    if (loading) {
        return <span className="loading loading-infinity loading-lg"></span>
    }
    console.log(place);
    return (
        <div className=" gadgetContainer pt-10">
            <table className="table table-zebra relative mt-16">
                <thead>
                    <tr>
                        <th>Tourist Spot</th>
                        <th>Location</th>
                        <th>Seasonality</th>
                        <th>Average Cost</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {
                    place.map(place => <Table key={place._id} place={place}></Table>)
                }
            </tbody>
        </table>
        <Footer></Footer>
        </div >
    );
};

