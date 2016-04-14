ActiveRecord::Base.transaction do
  10.times do |i|
    User.create!(
      name: Faker::Name.name,
      password: 'password',
      email: "test#{i}@example.com"
    )
  end

  100.times do
    Post.create!(
      title: Faker::Lorem.sentence,
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, incidunt! Voluptatibus quasi asperiores veritatis nesciunt vitae aliquid, praesentium ratione. Repudiandae, dolor, incidunt. \nAmet corporis porro eveniet rem, eligendi vero, quae.\nScience cuts two ways, of course; its products can be used for both good and evil. But there's no turning back from science. The early warnings about technological dangers also come from science.\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quo autem nisi nobis nemo labore explicabo repellat deserunt harum sequi amet odit, alias reiciendis quia, incidunt vel ullam totam rem?
      ",
      user_id: (1..10).to_a.sample
    )
  end
end
