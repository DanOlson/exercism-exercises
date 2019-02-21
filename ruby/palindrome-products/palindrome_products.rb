require 'set'

class Product
  attr_reader :value

  def initialize(value)
    @value = value
    @factors = Set.new
  end

  def add_factor(factor)
    @factors << factor
  end

  def factors
    Array(@factors)
  end
end

class Palindromes
  def initialize(max_factor:, min_factor: 1)
    @max_factor = max_factor
    @min_factor = min_factor
    @range = min_factor..max_factor
  end

  def generate
    factors_by_product = all_factors.reduce({}) do |acc, factor|
      product = factor[0] * factor[1]
      if palindrome?(product)
        acc[product] ||= Product.new(product)
        acc[product].add_factor(factor)
      end
      acc
    end
    @products = factors_by_product.values
  end

  def largest
    @products.max_by(&:value)
  end

  def smallest
    @products.min_by(&:value)
  end

  private

  def palindrome?(candidate)
    String(candidate) == String(candidate).reverse
  end

  def all_factors
    Array(@range).repeated_combination(2)
  end
end
