import React from 'react';
import {useForm} from 'react-hook-form';
import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export default function AddCompany() {
    const { register, handleSubmit, errors } = useForm();

    return(
        <form>
            <input type="text" placeholder="Logo" name="email" ref={register} />
        </form>
    )
}