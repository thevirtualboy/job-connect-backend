class CreateJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :jobs do |t|
      t.string :title
      t.string :description
      t.integer :payout
      t.string :location
      t.integer :poster_id
      t.integer :taker_id
      t.timestamps
    end
  end
end
