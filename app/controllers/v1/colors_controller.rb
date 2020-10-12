class V1::ColorsController < ApplicationController
  def index
    @colors = Color::COLORS
  end
end
