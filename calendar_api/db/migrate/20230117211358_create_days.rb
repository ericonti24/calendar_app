class CreateDays < ActiveRecord::Migration[7.0]
  def change
    create_table :days do |t|
      t.string :reminder

      t.timestamps
    end
  end
end
