class RootController < ActionController::Base
  def root
    render file: "public/index.html"
  end
end
