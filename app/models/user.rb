class User < ApplicationRecord
    has_many :posted_jobs, class_name: "Job", foreign_key: 'poster_id', dependent: :destroy
    has_many :taken_jobs, class_name: "Job", foreign_key: 'taker_id', dependent: :nullify

    has_secure_password
end
