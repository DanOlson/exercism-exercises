class Phrase
  attr_reader :content

  def initialize(content)
    @content = content
  end

  def word_count
    Hash[words.group_by(&:downcase).map { |w, ary| [w, ary.size] }]
  end

  private

  def words
    content.scan(/\w+'\w+|\w+/)
  end
end
