class CreateInputs < ActiveRecord::Migration[5.1]
  def change
    create_table :inputs do |t|
      t.integer :page_views
      t.integer :unique_visitors
      t.integer :impressions

      t.timestamps
    end
  end
end
