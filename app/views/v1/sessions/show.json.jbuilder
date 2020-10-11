json.current_user do
  json.partial! 'v1/users/user', user: @current_user
end

json.token @token