class Mutations::UpdateEmployee < Mutations::BaseMutation
    argument :id, ID, required: true
    argument :company_id, ID, required: false
    argument :firstname, String, required: false
    argument :lastname, String, required: false
    argument :email, String, required: false
    argument :phone, String, required: false

    field :employee, Types::EmployeeType, null: true
    field :errors, [String], null: true

    def resolve(**args)
        employee = Employee.find(args[:id])
        if employee.update(company_id: args[:company_id] || employee[:company_id], firstname: args[:firstname] || employee[:firstname], lastname: args[:lastname] || employee[:lastname], email: args[:email] || employee[:email], phone: args[:phone] || employee[:phone])
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