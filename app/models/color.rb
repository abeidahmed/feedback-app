class Color
  def pick_by_id(id)
    COLORS.find { |color| color[:id] == id }
  end

  def pick_by_name(color_name)
    COLORS.find { |color| color[:color_name] == color_name }
  end

  COLORS = [
    {
      id: 1,
      color_name: 'gray',
      accent: '#f4f5f7',
      contrast: '#374151',
    },
    {
      id: 2,
      color_name: 'red',
      accent: '#fde8e8',
      contrast: '#c81e1e',
    },
    {
      id: 3,
      color_name: 'orange',
      accent: '#feecdc',
      contrast: '#b43403',
    },
    {
      id: 4,
      color_name: 'yellow',
      accent: '#fdf6b2',
      contrast: '#8e4b10',
    },
    {
      id: 5,
      color_name: 'green',
      accent: '#def7ec',
      contrast: '#046c4e',
    },
    {
      id: 6,
      color_name: 'teal',
      accent: '#d5f5f6',
      contrast: '#036672',
    },
    {
      id: 7,
      color_name: 'blue',
      accent: '#e1effe',
      contrast: '#1a56db',
    },
    {
      id: 8,
      color_name: 'indigo',
      accent: '#e5edff',
      contrast: '#5145cd',
    },
    {
      id: 9,
      color_name: 'purple',
      accent: '#edebfe',
      contrast: '#6c2bd9',
    },
    {
      id: 10,
      color_name: 'pink',
      accent: '#fce8f3',
      contrast: '#bf125d',
    },
  ]
end