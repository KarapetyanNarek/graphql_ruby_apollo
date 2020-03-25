module Types
  class EmployeeType < Types::BaseObject
    field :id, Integer, null: false
    field :firstname, String, null: false
    field :lastname, String, null: true
    field :email, String, null: true
    field :phone, String, null: true
    field :company, Types::CompanyType, null: true
  end
end
