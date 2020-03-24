class Mutations::DeleteEmployee < Mutations::BaseMutation
    argument :id, ID, required: true

    field :employee, Types::EmployeeType, null: false
    field :errors, [String], null: true

    def resolve(**args)
        employee = Employee.find(args[:id])

        if employee.destroy
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
