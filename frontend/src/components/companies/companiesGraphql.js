import gql from 'graphql-tag';

export const GET_COMPANIES = gql`
{
    companies {
        id
        logo
        name
        email
        website
    }
}`;


export const COMPANY = gql`
query Company($id: ID!){
    company(id: $id){
        id
        logo
        name
        email
        website
    }
}`;

export const DELETE_COMPANY = gql`
 mutation DeleteCompany($id: ID){
     deleteCompany(input: {id: $id}){  
         company
         { 
             id
         }
         errors
     }
 }`;

 export const CREATE_COMPANY = gql`
 mutation CreateCompany($logo: String, $name: String, $email: String, $website: String){
     createCompany(input:{logo: $logo, name: $name, email: $email, website: $website}){
        company
        {
            id
        }
        errors
     }
 }`;

export const UPDATE_COMPANY = gql`
mutation UpdateCompany($id: ID, $logo: String, $name: String, $email: String, $website: String){
    updateCompany(input:{id: $id, logo: $logo, name: $name, email: $email, website: $website}){
       company
       {
           id
       }
       errors
    }
}`;