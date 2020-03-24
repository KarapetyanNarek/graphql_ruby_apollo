module Types
  class MutationType < Types::BaseObject
    field :create_company, mutation: Mutations::CreateCompany
    field :delete_company, mutation: Mutations::DeleteCompany
    field :update_company, mutation: Mutations::UpdateCompany
    field :create_employee, mutation: Mutations::CreateEmployee
    field :delete_employee, mutation: Mutations::DeleteEmployee
    field :update_employee, mutation: Mutations::UpdateEmployee
  end
end
