import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';

const GET_EMPLOYEES = gql`
{
    employees {
        id
        firstname
        lastname
        email
        phone
        company {
            id
            name
        }
    }
}`;

const DELETE_EMPLOYEE = gql`
 mutation DeleteEmployee($id: ID){
     deleteEmployee(input: {id: $id}){
         employee { 
             firstname }
         errors
     }
 }`;

const Employees = () => {
    const { loading, error, data } = useQuery(GET_EMPLOYEES);
    const [deleteEmployee] = useMutation(DELETE_EMPLOYEE);

    if (loading) return <p>Loading ...</p>;
    if (error) return `Error ${error.message}`;
    
    return (
        <React.Fragment>
            <div className="m-3">
                <Link to='/addemployee' className="btn btn-lg btn-dark font-weight-bold">Add Employee</Link>
            </div>

            <div className="container-fluid">
                <table className="table table-bordered table-dark col-md-12">
                    <tr>
                        <th className="text-center">Company name</th>
                        <th className="text-center">Firstname</th>
                        <th className="text-center">LastName</th>
                        <th className="text-center">Email</th>
                        <th className="text-center">Phone number</th>
                        <th className="text-center">
                            <svg className="bi bi-eye-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5 8a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                <path fill-rule="evenodd" d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" clip-rule="evenodd" />
                            </svg>
                        </th>
                        <th className="text-center">
                            <svg className="bi bi-tools" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M0 1l1-1 3.081 2.2a1 1 0 01.419.815v.07a1 1 0 00.293.708L10.5 9.5l.914-.305a1 1 0 011.023.242l3.356 3.356a1 1 0 010 1.414l-1.586 1.586a1 1 0 01-1.414 0l-3.356-3.356a1 1 0 01-.242-1.023L9.5 10.5 3.793 4.793a1 1 0 00-.707-.293h-.071a1 1 0 01-.814-.419L0 1zm11.354 9.646a.5.5 0 00-.708.708l3 3a.5.5 0 00.708-.708l-3-3z" clip-rule="evenodd" />
                                <path fill-rule="evenodd" d="M15.898 2.223a3.003 3.003 0 01-3.679 3.674L5.878 12.15a3 3 0 11-2.027-2.027l6.252-6.341A3 3 0 0113.778.1l-2.142 2.142L12 4l1.757.364 2.141-2.141zm-13.37 9.019L3.001 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z" clip-rule="evenodd" />
                            </svg>
                        </th>
                        <th className="text-center">
                            <svg className="bi bi-trash-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M2.5 1a1 1 0 00-1 1v1a1 1 0 001 1H3v9a2 2 0 002 2h6a2 2 0 002-2V4h.5a1 1 0 001-1V2a1 1 0 00-1-1H10a1 1 0 00-1-1H7a1 1 0 00-1 1H2.5zm3 4a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zM8 5a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7A.5.5 0 018 5zm3 .5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7z" clip-rule="evenodd" />
                            </svg>
                        </th>
                    </tr>
                    {data.employees.map(employee => {
                        return <tr key={employee.id} >
                            <td class="text-center align-middle">{employee.company.name}</td>
                            <td class="text-center align-middle">{employee.firstname}</td>
                            <td class="text-center align-middle">{employee.lastname}</td>
                            <td class="text-center align-middle">{employee.email}</td>
                            <td class="text-center align-middle">{employee.phone}</td>
                            <td class="text-center align-middle"><Link to='/employees/show'>Show</Link></td>
                            <td class="text-center align-middle">Edit</td>
                            <td class="text-center align-middle"><button onClick={()=> {
                                if (window.confirm("Are you sure")) {
                                    deleteEmployee({variables: {id: employee.id}});
                                }
                                window.location.reload();
                            }}>Delete</button></td>
                        </tr>
                    })}
                    
                </table>
            </div>
        </React.Fragment>
    )
};

export default Employees;
