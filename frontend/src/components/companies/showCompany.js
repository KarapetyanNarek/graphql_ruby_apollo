import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {Link} from 'react-router-dom';

const COMPANY = gql`
query Company($id: ID!){
    company(id: $id){
        id
        logo
        name
        email
        website
    }
}`;

const ShowCompany = (props) => { 
    const { loading, error, data } = useQuery(
        COMPANY,
        {
            variables:{id: props.match.params.id},
        });

    if (loading) return <p>Loading ...</p>;
    if (error) return `Error ${error.message}`;

    return (
        <div className="w-50 container mt-5">
            <table className="table table-bordered table-dark">
                <tr>
                    <th className="text-center">
                        <svg class="bi bi-list-ul" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M5 11.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm-3 1a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>
                        </svg>
                    </th>
                    <th className="text-center">
                        <svg class="bi bi-dash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>
                        </svg>
                    </th>
                </tr>
                <tr>
                    <td className="text-center">Company name:</td>
                    <td className="text-center">{data.company.name}</td>
                </tr>
                <tr>
                    <td className="text-center">Company email:</td>
                    <td className="text-center">{data.company.email}</td>
                </tr>
                <tr>
                    <td className="text-center">Company website:</td>
                    <td className="text-center">{data.company.website}</td>
                </tr>
            </table>
            <Link to="/companies" className="btn btn-lg container btn-dark font-weight-bold w-100">Back</Link>
        </div>

    )
}

export default ShowCompany;