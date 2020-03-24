module Types
  class CompanyType < Types::BaseObject
    field :id, ID, null: false
    field :logo, String, null: true
    field :name, String, null: true
    field :email, String, null: true
    field :website, String, null: true
    field :employees, [Types::EmployeeType], null: true
    field :employees_count, Integer, null: true

    def employees_count
      object.employees.size
    end
  end
end
