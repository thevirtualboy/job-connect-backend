class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :phone, :location, :password

 
end
