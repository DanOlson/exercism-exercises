class Hamming
  class << self
    def compute(first, second)
      a = Polymer.new first
      b = Polymer.new second
      Strand.new(a).calculate_hamming Strand.new(b)
    end
  end

  class Polymer
    def initialize(gattaca)
      @gattaca = gattaca
    end

    def to_str
      @gattaca
    end
  end

  class Strand
    include Enumerable

    attr_reader :nucleotides

    def initialize(polymer)
      @nucleotides = String(polymer).chars
    end

    def each(&blk)
      nucleotides.each &blk
    end

    def calculate_hamming(other)
      zip(other).count { |pair| pair.first != pair.last }
    end
  end
end
