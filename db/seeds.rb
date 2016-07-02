ActiveRecord::Base.transaction do
  User.destroy_all
  Post.destroy_all
  Comment.destroy_all

  10.times do |i|
    user = User.create!(
      name: Faker::Name.name,
      password: 'password',
      email: "test#{i}@example.com"
    )

    100.times do |index|
      post = Post.create!(
        title: Faker::Lorem.sentence,
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, incidunt! Voluptatibus quasi asperiores veritatis nesciunt vitae aliquid, praesentium ratione. Repudiandae, dolor, incidunt. \nAmet corporis porro eveniet rem, eligendi vero, quae.\nScience cuts two ways, of course; its products can be used for both good and evil. But there's no turning back from science. The early warnings about technological dangers also come from science.\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quo autem nisi nobis nemo labore explicabo repellat deserunt harum sequi amet odit, alias reiciendis quia, incidunt vel ullam totam rem?",
        user: user
      )
      10.times do |comment_index|
        Comment.create!(
          body: "Comment for post #{index} Lorem ipsum dolor sit amet, consectetur adipisicing",
          post: post,
          user: user
        )
      end
    end
  end
end
