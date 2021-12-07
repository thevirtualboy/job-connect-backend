class PosterSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :phone, :location

 has_many :posted_jobs
 has_many :taken_jobs 
 
end
