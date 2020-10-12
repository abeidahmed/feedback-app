class Color
  def initialize(index)
    @index = index
  end

  def pick(id)
    COLORS.find { |color| color[:id] == id }.except(:id)
  end

  COLORS = [
    {
      id: 1,
      contrast: '#f4f5f7',
      accent: '#374151',
    },
    {
      id: 2,
      contrast: '#fde8e8',
      accent: '#c81e1e',
    },
    {
      id: 3,
      contrast: '#feecdc',
      accent: '#b43403',
    },
    {
      id: 4,
      contrast: '#fdf6b2',
      accent: '#8e4b10',
    },
    {
      id: 5,
      contrast: '#def7ec',
      accent: '#046c4e',
    },
    {
      id: 6,
      contrast: '#d5f5f6',
      accent: '#036672',
    },
    {
      id: 7,
      contrast: '#e1effe',
      accent: '#1a56db',
    },
    {
      id: 8,
      contrast: '#e5edff',
      accent: '#5145cd',
    },
    {
      id: 9,
      contrast: '#edebfe',
      accent: '#6c2bd9',
    },
    {
      id: 10,
      contrast: '#fce8f3',
      accent: '#bf125d',
    },
  ]
end