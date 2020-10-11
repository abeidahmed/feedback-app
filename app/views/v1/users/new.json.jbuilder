json.current_user do
  json.partial! 'user', user: @user
end

json.token @token