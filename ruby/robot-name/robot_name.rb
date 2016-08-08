class Robot
  ALPHA_POOL = ('A'..'Z').to_a

  class << self
    def robot_names
      @robot_names ||= []
    end
  end

  attr_reader :name

  def initialize
    reset
  end

  def reset
    @name = generate_name
    names_used << name
  end

  private

  def generate_name
    new_name = alpha_prefix + numeric_suffix
    if names_used.include? new_name
      generate_name
    else
      new_name
    end
  end

  def names_used
    self.class.robot_names
  end

  def alpha_prefix
    2.times.inject('') do |prefix, _|
      prefix + alpha_pool[rand(alpha_pool.size)]
    end
  end

  def numeric_suffix
    loop do
      suffix = rand(999)
      break suffix.to_s if suffix > 99
    end
  end

  def alpha_pool
    ALPHA_POOL
  end
end

module BookKeeping
  VERSION = 2
end
