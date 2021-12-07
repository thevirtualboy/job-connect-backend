class JobSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :payout, :location, :Job_poster_id, :Job_taker_id
end
