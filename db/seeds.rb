# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
    User.destroy_all
    Job.destroy_all

    u1 = User.create(name: "John V", email: "johnvynde@yahoo.com", phone: "443-852-7720", location: "Baltimore", password: "Kdate12876!")

    u2 = User.create(name: "Aurion Howard", email: "howardgenesis@gmail.com", phone: "805-356-7743", location: "San Francisco", password: "ThatladyisSmart2$")

    u3 = User.create(name: "Alex Gore", email: "Galex347t@gmail.com", phone: "202-588-9634", location: "Houston", password: "Goodheart2be%")

    u4 = User.create(name: "Amy Johns", email: "GiftedAmy@microsoft.com", phone: "773-659-2214", location: "LA", password: "$Amythebestmum$")

    u5 = User.create(name: "Yasmine Taylor", email: "Ytaykor77@yahoo.com", phone: "404-586-8922", location: "Seattle", password: "Hthegangdollars$")



    Job.create(title:"Caregiver", description:"Duration: 1 month contract. Seeking a caregiver with You need to have some basic training or experience working with people who cannot do a whole lot on their own (help bathing, light housekeeping and organization, meal prep, ambulation, transferring, feeding, laundry, assistance with Dr appts and errands, etc).", payout: 1200, location:"Dallas,Tx", poster_id:u1.id )

    Job.create(title:"Babysitter", description:"Duration: 1 month contract. Seeking a babysitter for 3 year old from Monday-Friday 8am-5pm).", payout: 500, location:"New York,Ny", poster_id: u2.id )

    Job.create(title:"Software Developer", description:"Duration: 3 month contract. The Software Engineer will provide technical expertise and execution for various software and firmware projects supporting the assessment, design, implementation, and support phases of multi-year, complex computing products. This role will require executing software and firmware projects in coordination with electrical, mechanical, and systems engineering within the organization to complete projects on-time and within budget.", payout:60000 , location:"Atlanta,Ga", poster_id: u3.id)

    Job.create(title: "Dog Walker", description: "Duration: 2 weeks .Walk my dog around the block 5 times", payout: 20, location: "123 Dog St., New York,Ny", poster_id: u2.id)

    Job.create(title: "Accountant", description: "Duration: 1 month. Provides monthly financial statement and bank reconciliation.", payout: 55000, location: "123 Dog St., New York", poster_id: u1.id )


    
