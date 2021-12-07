class CreateJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :jobs do |t|
      t.string :title
      t.string :description
      t.integer :payout
      t.string :location
      t.references :poster_id, foreign_key: {to_table: 'users'}
      t.references :taker_id, foreign_key: {to_table: 'users'}
      t.timestamps
    end
  end
end
