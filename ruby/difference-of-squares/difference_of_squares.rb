class Squares
  attr_reader :number_count

  VERSION = 2
  SQUARE = ->(n) { n ** 2 }

  def initialize(number_count)
    @number_count = number_count
  end

  def square_of_sum
    square[sum (1..number_count)]
  end

  def sum_of_squares
    sum (1..number_count).map(&square)
  end

  def difference
    square_of_sum - sum_of_squares
  end

  private

  def sum(enum)
    enum.reduce 0, :+
  end

  def square
    SQUARE
  end
end
