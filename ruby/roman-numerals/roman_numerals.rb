class FixnumToRomanNumeralConverter
  ROMAN_DEFINITIONS = {
    'I' => 1,
    'V' => 5,
    'X' => 10,
    'L' => 50,
    'C' => 100,
    'D' => 500,
    'M' => 1000
  }

  class << self
    def convert(num)
      new(num).call
    end
  end

  attr_reader :num

  def initialize(num)
    @num = num
  end

  def call
    expanded_places.inject('') do |acc, place|
      converted = convert place
      if apply_subtractive_principle? converted
        converted = apply_subtractive_principle place
      end
      acc + converted
    end
  end

  private

  ###
  # Expand +num+ to an array of place values
  #   ex: 123 => ['100', '20', '3']
  def expanded_places
    digits = num.to_s.split('')
    acc = []
    digits.each_with_index do |digit, idx|
      padding = '0' * (digits.size - (idx + 1))
      acc << digit + padding
    end
    acc.map(&:to_i).reject &:zero?
  end

  def convert(n)
    lower_neighbor = find_lower_neighbor n
    if lower_neighbor == n
      letters_by_int[n]
    else
      [lower_neighbor, n - lower_neighbor].inject('') do |acc, i|
        acc + convert(i)
      end
    end
  end

  def find_lower_neighbor(int)
    descending_mapped_ints.find { |i| i <= int }
  end

  ###
  # Do we have a character repeated 4 or more times?
  def apply_subtractive_principle?(roman_numeral)
    roman_numeral =~ /([A-Z])\1{3,}/
  end

  def apply_subtractive_principle(int)
    minuend = mapped_ints.find { |i| i > int }
    subtrahend = descending_mapped_ints.find { |i| power_of_ten?(i) && i < int }
    letters_by_int[subtrahend] + letters_by_int[minuend]
  end

  def power_of_ten?(int)
    int == 1 or int % 10 == 0 && power_of_ten?(int / 10)
  end

  def letters_by_int
    ROMAN_DEFINITIONS.invert
  end

  def descending_mapped_ints
    mapped_ints.reverse
  end

  def mapped_ints
    ROMAN_DEFINITIONS.values
  end
end

module RomanNumeralMonkeyPatch
  VERSION = 1

  def to_roman
    FixnumToRomanNumeralConverter.convert self
  end
end

Fixnum.send :include, RomanNumeralMonkeyPatch
