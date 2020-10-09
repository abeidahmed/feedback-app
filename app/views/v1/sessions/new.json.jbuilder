json.user do
  json.partial! 'v1/users/user', user: @user
end

json.token @token