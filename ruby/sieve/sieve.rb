require 'set'

class Sieve
  attr_reader :limit, :sequence

  def initialize(limit)
    @limit = limit
    @sequence = 2.. limit
  end

  def primes
    sequence.reject { |n| composites.include? n }
  end

  private

  def composites
    @composites ||= begin
      sequence.inject(Set.new) do |marked, num|
        mark_composites! num, marked
        marked
      end
    end
  end

  def mark_composites!(num, marked)
    (num..limit).each do |n|
      composite = num * n
      break if composite > limit

      marked << composite
    end
  end
end
