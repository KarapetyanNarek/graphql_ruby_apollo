class Mutations::DeleteCompany < Mutations::BaseMutation
    argument :id, ID, required: true

    field :company, Types::CompanyType, null: false
    field :errors, [String], null: true
    

    def resolve(**args)
        company = Company.find(args[:id])
        if company.destroy
            {
                company: company,
                errors: []
            }
        else
            {
                company: nil,
                errors: company.errors.full_messages
            }
        end
    end
end