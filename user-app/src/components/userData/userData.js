import React, { useState, useEffect } from 'react';
import ItemsList from "./../itemsList/itemsList";
import DemographicTable from "./../demographicTable/demographicTable"
import { getUsersAge, getUsersData } from '../../service/service';

function UserData() {

    const [userData, setUserData] = useState([]);
    const [usersAge, setUsersAge] = useState([]);

    useEffect(() => {
        getUsersAge().then(data => setUsersAge(data));
        getUsersData().then(data => setUserData(data));
    }, []);

    return (
        <>
            <ItemsList userData={userData}/>
            <DemographicTable userData={userData} usersAge={usersAge} />
        </>
    );
}

export default UserData;

