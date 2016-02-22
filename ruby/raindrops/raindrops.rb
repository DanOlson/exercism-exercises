class Raindrops
  VERSION = 1

  PLING = 'Pling'
  PLANG = 'Plang'
  PLONG = 'Plong'

  ONOMATOPOEIA_BY_PRIME = {
    3 => PLING,
    5 => PLANG,
    7 => PLONG
  }

  class << self
    def convert(num)
      phrase = build_phrase num
      String(phrase.empty? ? num : phrase)
    end

    private

    def build_phrase(num)
      onomatopoeia_by_prime.inject('') do |output, (prime, sound)|
        (num % prime).zero? ? output + sound : output
      end
    end

    def onomatopoeia_by_prime
      ONOMATOPOEIA_BY_PRIME
    end
  end
end
