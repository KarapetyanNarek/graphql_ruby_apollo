class CreateEmployees < ActiveRecord::Migration[6.0]
  def change
    create_table :employees do |t|
      t.string :firstname
      t.string :lastname
      t.string :email
      t.integer :phone
      t.belongs_to :company, null: false, foreign_key: true, on_delete: :cascade

      t.timestamps
    end
  end
end
