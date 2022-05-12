import React, {useEffect, useState} from 'react';
import db from "../firebase";
import CompanyItem from "./CompanyItem";

function CompanyList() {

    const [companys,setCompanys] = useState([])

    useEffect(() => {
        db.collection('companys')
            .onSnapshot(snapshot => setCompanys(snapshot.docs.map((doc) => (({
                id: doc.id,
                ...doc.data()
            })))))
    }, [])

    return (
        <div className="companyList">

            <h2> 목록 </h2>

            {companys.map((company) => (
                <CompanyItem company={company} />
                ))}
        </div>
    );
}

export default CompanyList;