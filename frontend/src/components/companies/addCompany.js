import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';

const CREATE_COMPANY = gql`
 mutation CreateCompany($logo: String, $name: String, $email: String, $website: String){
     createCompany(input:{logo: $logo, name: $name, email: $email, website: $website}){
        company
        {
            id
        }
        errors
     }
 }`;

const AddCompany = () => {
    let name, email, website;
    const [createCompany] = useMutation(CREATE_COMPANY);

    return (
        <React.Fragment>
            <div class="container-fluid d-flex justify-content-center mt-5">
            <form onSubmit={e => {
                                e.preventDefault();
                                createCompany({ variables: {name: name.value, email: email.value, website: website.value}});
                                name.value='';
                                email.value='';
                                website.value='';
                                window.location.replace("/companies");
                                }
                            }>
                
                <h3 className="text-center mb-3 font-italic font-weight-bold">Add Company</h3>

                <div className="form-group">
                    <input type="text" className="form-control" name="name" ref={node => {name = node;}} placeholder="name" />
                </div>

                <div className="form-group">
                    <input type="emial" className="form-control" name="email" ref={node => {email = node;}} placeholder="email" />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" name="website" ref={node => {website = node;}} placeholder="website" />
                </div>

                <button type="submit" className="btn btn-lg btn btn-dark font-weight-bold btn-block">Add Company</button>
                <Link to='/companies' className="btn btn-lg btn btn-dark font-weight-bold btn-block">Back</Link>
            </form>
            </div>
        </React.Fragment>
    )
}
                                            
export default AddCompany;