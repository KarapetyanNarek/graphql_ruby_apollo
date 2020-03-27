import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import Select from 'react-select';

const CREATE_EMPLOYEE = gql`
 mutation CreateEmployee($companyId: Integer, $firstname: String, $lastname: String, $email: String, $phone: String){
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
    let companyId, firstname, lastname, email, phone, selectedOption;
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
                                alert(e.selectedOption)                          
                                createEmployee({ variables: {firstname: firstname.value, lastname: lastname.value, email: email.value, phone: phone.value}});
                                firstname.value='';
                                lastname.value='';
                                email.value='';
                                phone.value='';
                                window.location.replace("/employees");
                                }
                            }>
                
                <h3 className="text-center mb-3 font-italic font-weight-bold">Add Employee</h3>
                
                <div className="form-group">
                    <Select options={companies} value={selectedOption}/>      
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" name="firstname" ref={node => {firstname = node;}} placeholder="firstname" />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" name="lastname" ref={node => {lastname = node;}} placeholder="lastname" />
                </div>

                <div className="form-group">
                    <input type="emial" className="form-control" name="email" ref={node => {email = node;}} placeholder="email" />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" name="phone" ref={node => {phone = node;}} placeholder="phone" />
                </div>

                <button type="submit" className="btn btn-lg btn btn-dark font-weight-bold btn-block">Add Employee</button>
                <Link to='/employees' className="btn btn-lg btn btn-dark font-weight-bold btn-block">Back</Link>
            </form>
            </div>
        </React.Fragment>
    )
}
                                            
export default AddEmployee;