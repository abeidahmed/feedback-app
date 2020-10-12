json.colors @colors do |color|
  json.id color[:id]
  json.color_name color[:color_name]
  json.text_color color[:contrast]
  json.bg_color color[:accent]
end