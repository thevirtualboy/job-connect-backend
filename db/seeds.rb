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

    u6 = User.create(name: "Jane Mano", email: "Mano34j@consultus.com", phone: "305-655-2287", location: "Vermont", password: "Halloweentobe876#")

    u7 = User.create(name: "Brendan Tyson", email: "Brendt36L@gmail.com", phone: "877-986-8796", location: "New Jersey", password: "JulietteistheBest$$")




    Job.create(title:"Caregiver", description:"Duration: 1 month contract. Seeking a caregiver with some basic training or experience working with people who cannot do a whole lot on their own (assist with bathing, light housekeeping and organization, meal prep, ambulation, transferring, feeding, laundry, assistance with Dr appts and errands). Caregiver licence is required", payout: 1200, location:"Dallas,Tx", poster_id:u1.id )

    Job.create(title: "Mechanic Specialist for BMW 2021 X5 ", description: "Duration: 10 Days. Inspecting the vehicle's mechanical components and its engine, diagnosing problems with vehicles and performing maintenance and repair work. 3 Years of experience with BMW model is required", payout: 12500, location: "Arlington, VA", poster_id: u6.id )

    Job.create(title: "CPR Instructor ", description: "Duration: 4 month. Need someone to Lead the class and provides program about how to perform CPR in the case of an emergency. S/he should teaches the exact procedure to bring back the consciousness in the person who has suffered a cardiac attack. His/her job is to coordinate classes, evaluate the performance of the students, keep a check on equipment and other things.. 2 Years of experience is required for this contract", payout: 8500, location: "Boston, MA ", poster_id: u7.id )

    Job.create(title:"Travel Nurse", description:"Duration: 2 month contract. Seeking a travel nurse who will be responsible to  administer care, medications, and vaccines to patients of all ages; communicate with physicians and other healthcare professionals; collaborate to create a plan of patient care; create and contribute to medical records; and respond to patient inquiries and concerns. 2 years of experience is required along with 3 references.", payout: 20000, location:"Columbus,OH", poster_id: u5.id )

    Job.create(title: "Plumber Specialist", description: "Duration: 1 month. Need someone to Install, repair, and maintain pipes, valves, fittings, drainage systems, and fixtures in a commercial and residential structures. 5 years of experience is required", payout: 24000, location: "Houston, TX", poster_id: u2.id )

    Job.create(title: "Technical Recruiter for IT Firm ", description: "Duration: 3 Month Contract. Need someone with experience recruiting the proper staffing of technical positions within an IT organization. 3 Years of experience with IT firm is required", payout: 14600, location: "Washignton, DC", poster_id: u6.id )

    Job.create(title:"Babysitter", description:"Duration: 1 month contract. Seeking a babysitter for 3 year old for 3 days a week from 10am to 5pm, 1 year of experience is required along with 2 references.", payout: 500, location:"New York, NY", poster_id: u2.id )

    Job.create(title:"Software Developer", description:"Duration: 3 month contract. The Software Engineer will provide technical expertise and execution for various software and firmware projects supporting the assessment, design, implementation, and support phases of multi-year, complex computing products. This role will require executing software and firmware projects in coordination with electrical, mechanical, and systems engineering within the organization to complete projects on-time and within budget. Minimum of 1 year of experience is required", payout:60000 , location:"Atlanta,GA", poster_id: u3.id)

    Job.create(title: "Dog Walker", description: "Duration: 2 weeks .Walk my dog around the block 5 times a day and watch over him. 3 days/week from 11am to 6pm. No experience required", payout: 1000, location: "Baltimore,MD", poster_id: u2.id)

    Job.create(title: "Accountant", description: "Duration: 3 month. Provides monthly financial statement and bank reconciliation worth of 3 months for a small business. 2 years of experience is required", payout: 15000, location: "Chesterbrook, PA", poster_id: u1.id )


    
