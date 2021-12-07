class PosterSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :phone, :location, :password

 has_many :posted_jobs
 has_many :taken_jobs 
 
end
