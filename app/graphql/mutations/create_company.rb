class Mutations::CreateCompany < Mutations::BaseMutation
    argument :logo, String, required: true
    argument :name, String, required: true
    argument :email, String, required: true
    argument :website, String, required: true

    field :company, Types::CompanyType, null: false
    field :errors, [String], null: true

    def resolve(logo:, name:, email:, website:)
        company = Company.new(logo: logo, name: name, email: email, website: website)

        if company.save
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