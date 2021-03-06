class GraphqlController < ApplicationController
  before_action :set_current_user

  def create
    schema = GraphQL::Schema.new(query: QueryType)
    result = schema.execute(
      params[:query],
      variables: params[:variables],
      context: {
        current_user: set_current_user
      }
    )
    render json: result
  end

  private

  def set_current_user
    if verified_user = User.find_by(id: cookies.signed['user.id'])
      verified_user
    else
      nil
    end
  end
end
