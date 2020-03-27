class Mutations::CreateEmployee < Mutations::BaseMutation
    argument :company_id, ID, required: true
    argument :firstname, String, required: true
    argument :lastname, String, required: true
    argument :email, String, required: true
    argument :phone, String, required: true

    field :employee, Types::EmployeeType, null: true
    field :errors, [String], null: true

    def resolve(**args)
        company = Company.find(args[:company_id])
        employee = company.employees.build(firstname: args[:firstname], lastname: args[:lastname], email: args[:email], phone: args[:phone])

        if employee.save
            {
                employee: employee,
                errors: []           
            }
        else
            {
                employee: nil,
                errors: employee.errors.full_messages            
            }
        end
    end
end