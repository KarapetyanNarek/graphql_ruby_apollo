class Mutations::UpdateCompany < Mutations::BaseMutation
    argument :id, ID, required: true
    argument :logo, String, required: false
    argument :name, String, required: false
    argument :email, String, required: false
    argument :website, String, required: false

    field :company, Types::CompanyType, null: false
    field :errors, [String], null: true

    def resolve(**args)
        company = Company.find(args[:id])
        if company.update(logo: args[:logo] || company[:logo], name: args[:name] || company[:name], email: args[:email] || company[:email], website: args[:website] || company[:website])
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