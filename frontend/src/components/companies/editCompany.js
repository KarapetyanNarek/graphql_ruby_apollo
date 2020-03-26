import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';

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

const UPDATE_COMPANY = gql`
mutation UpdateCompany($id: ID, $logo: String, $name: String, $email: String, $website: String){
    updateCompany(input:{id: $id, logo: $logo, name: $name, email: $email, website: $website}){
       company
       {
           id
       }
       errors
    }
}`;


const EditCompany = (props) => {
    let id, name, email, website;
    const [updateCompany] = useMutation(UPDATE_COMPANY);
    const { loading, error, data } = useQuery(
        COMPANY,
        {
            variables: {id: props.match.params.id}
        });

    if (loading) return <p>Loading ...</p>;
    if (error) return `Error ${error.message}`;

    
    
    return (
        <React.Fragment>
            <div class="container-fluid d-flex justify-content-center mt-5">
            <form onSubmit={e => {
                                e.preventDefault();
                                updateCompany({ variables: {id: props.match.params.id, name: name.value || data.company.name, email: email.value || data.company.email, website: website.value || data.company.website}});
                                name.value='';
                                email.value='';
                                website.value='';
                                window.location.replace("/companies");
                                }
                            }>
                
                <h3 className="text-center mb-3 font-italic font-weight-bold">EDIT COMPANY DATA</h3>

                <div className="form-group">
                    <input type="text" className="form-control" name="name" ref={node => {name = node;}} placeholder={data.company.name}/>
                </div>

                <div className="form-group">
                    <input type="emial" className="form-control" name="email" ref={node => {email = node;}} placeholder={data.company.email} />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" name="website" ref={node => {website = node;}} placeholder={data.company.website} />
                </div>

                <button type="submit" className="btn btn-lg btn btn-dark font-weight-bold btn-block">Edit Company</button>
                <Link to='/companies' className="btn btn-lg btn btn-dark font-weight-bold btn-block">Back</Link>
            </form>
            </div>
        </React.Fragment>
    )
}
                                            
export default EditCompany;