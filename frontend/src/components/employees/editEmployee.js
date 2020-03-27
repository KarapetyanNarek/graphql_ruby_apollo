import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import Select from 'react-select';
import { Query } from 'react-apollo';

const UPDATE_EMPLOYEE = gql`
 mutation UpdateEmployee($id: ID, $companyId: ID, $firstname: String, $lastname: String, $email: String, $phone: String){
     updateEmployee(input:{id: $id, companyId: $companyId, firstname: $firstname, lastname: $lastname, email: $email, phone: $phone}){
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

const EMPLOYEE = gql`
query Employee($id: Int!){
    employee(id: $id){
        id
        firstname
        lastname
        companyId
        phone
        email
    }
}`;

const EditEmployee = (props) => {
    let queryId = parseInt(props.match.params.id, 10);
    const [updateEmployee] = useMutation(UPDATE_EMPLOYEE);
    const { loading, error, data } = useQuery(
        EMPLOYEE,
        {
            variables:{id: queryId},
        });

        if (loading) return <p>Loading ...</p>;
        if (error) return `Error ${error.message}`;

    return (
        <React.Fragment>
            <div class="container-fluid d-flex justify-content-center mt-5">
            <form onSubmit={e => {
                                e.preventDefault();
                                updateEmployee({ variables: {id: queryId, companyId: parseInt(e.target.selected.value, 10) || data.employee.companyId, firstname: e.target.firstname.value || data.employee.firstname, lastname: e.target.lastname.value || data.employee.lastname, email: e.target.email.value || data.employee.email, phone: e.target.phone.value || data.employee.phone}});
                                window.location.replace("/employees");
                                }
                            }>
                
                <h3 className="text-center mb-3 font-italic font-weight-bold">Add Employee</h3>
                
                <div className="form-group">
                    <Query query={GET_COMPANIES}>
                        {({loading, error, data})=> {
                            if (loading) return "Loading ...";
                            if (error) return `Error: ${error.message}`;

                            let companies = data.companies.map(company => {
                                return {label: company.name, value: company.id}
                            })

                            return <Select options={companies} name="selected"/>
                        }}
                        
                    </Query>      
                </div>
                            

                <div className="form-group">
                    <input type="text" className="form-control" name="firstname" placeholder={data.employee.firstname} />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" name="lastname" placeholder={data.employee.lastname} />
                </div>

                <div className="form-group">
                    <input type="emial" className="form-control" name="email" placeholder={data.employee.email} />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" name="phone" placeholder={data.employee.phone} />
                </div>

                <button type="submit" className="btn btn-lg btn btn-dark font-weight-bold btn-block">Add Employee</button>
                <Link to='/employees' className="btn btn-lg btn btn-dark font-weight-bold btn-block">Back</Link>
            </form>
            </div>
        </React.Fragment>
    )
}
                                            
export default EditEmployee;