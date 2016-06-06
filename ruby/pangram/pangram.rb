module BookKeeping
  VERSION = 2
end

class Pangram  
  class << self
    def is_pangram?(phrase)
      phrase.downcase.scan(/[a-z]/).uniq.size == 26
    end
  end
end
