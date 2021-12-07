class JobSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :payout, :location, :poster_id, :taker_id

  belongs_to :poster, class_name: "User"
    belongs_to :taker, class_name: "User" 
end
