class Proverb
  def initialize(*nouns, qualifier: nil)
    @nouns = nouns
    @qualifier = qualifier
  end

  def to_s
    lines = @nouns.each_cons(2).map { |(desired, lost)| line(desired, lost) }
    lines << closing_line
    lines.join("\n")
  end

  private

  def line(desired, lost)
    "For want of a #{desired} the #{lost} was lost."
  end

  def closing_line
    "And all for the want of a #{initial_desire}."
  end

  def initial_desire
    [@qualifier, @nouns[0]].compact.join(' ')
  end
end
