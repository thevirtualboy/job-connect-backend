class Job < ApplicationRecord
   
    belongs_to :poster, class_name: "User", foreign_key: "poster_id"
    belongs_to :taker, class_name: "User", foreign_key: "taker_id", optional: true
end
