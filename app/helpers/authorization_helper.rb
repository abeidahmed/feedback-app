module AuthorizationHelper
  MESSAGE = {
    bad_request: 'Sorry, we cannot process your request!',
    unauthorized: 'Please signup or login to continue!'
  }

  def error(type)
    error_message = MESSAGE[type.to_sym]
    render json: { message: error_message }, status: MESSAGE.key(error_message)
  end
end