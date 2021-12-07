class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :phone, :location, :password

  has_many :jobs
end
