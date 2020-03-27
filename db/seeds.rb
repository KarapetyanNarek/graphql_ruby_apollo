# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

5.times do
    company = Company.create(logo: Faker::Name.name, name: Faker::Name.name, email: Faker::Internet.email, website: Faker::Internet.url)
    5.times do
        company.employees.create(firstname: Faker::Name.name, lastname: Faker::Name.name, email: Faker::Name.name, phone: Faker::PhoneNumber.cell_phone)
    end
end