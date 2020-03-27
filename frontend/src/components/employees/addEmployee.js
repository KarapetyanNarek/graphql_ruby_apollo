import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import Select from 'react-select';

const CREATE_EMPLOYEE = gql`
 mutation CreateEmployee($companyId: ID, $firstname: String, $lastname: String, $email: String, $phone: String){
     createEmployee(input:{companyId: $companyId, firstname: $firstname, lastname: $lastname, email: $email, phone: $phone}){
        employee
        {
            id
        }
        errors
     }
 }`;

const GET_COMPANIES = gql`
{
    companies {
        id
        logo
        name
        email
        website
    }
}`;


const AddEmployee = () => {
    const [createEmployee] = useMutation(CREATE_EMPLOYEE);

    const { loading, error, data } = useQuery(GET_COMPANIES);

    if (loading) return <p>Loading ...</p>;
    if (error) return `Error ${error.message}`;

    let companies = data.companies.map(company => {
        return {label: company.name, value: company.id}
    }) 

    return (
        <React.Fragment>
            <div class="container-fluid d-flex justify-content-center mt-5">
            <form onSubmit={e => {
                                e.preventDefault();
                               
                                console.log(typeof e.target.phone.value)
                                createEmployee({ variables: {companyId: parseInt(e.target.selected.value, 10), firstname: e.target.firstname.value, lastname: e.target.lastname.value, email: e.target.email.value, phone: e.target.phone.value}});
                                window.location.replace("/employees");
                                }
                            }>
                
                <h3 className="text-center mb-3 font-italic font-weight-bold">Add Employee</h3>
                
                <div className="form-group">
                    <Select options={companies} name="selected"/>      
                </div>
                            

                <div className="form-group">
                    <input type="text" className="form-control" name="firstname" placeholder="firstname" />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" name="lastname" placeholder="lastname" />
                </div>

                <div className="form-group">
                    <input type="emial" className="form-control" name="email" placeholder="email" />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" name="phone" placeholder="phone" />
                </div>

                <button type="submit" className="btn btn-lg btn btn-dark font-weight-bold btn-block">Add Employee</button>
                <Link to='/employees' className="btn btn-lg btn btn-dark font-weight-bold btn-block">Back</Link>
            </form>
            </div>
        </React.Fragment>
    )
}
                                            
export default AddEmployee;