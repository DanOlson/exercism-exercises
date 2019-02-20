class Phrase
  attr_reader :content

  def initialize(content)
    @content = content
  end

  def word_count
    Hash[content.scan(/\w+'\w+|\w+/).group_by(&:downcase).map { |w, ary| [w, ary.size] }]
  end
end
