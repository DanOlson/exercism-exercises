import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class DNA {
    static final ArrayList<Character> NUCLEOTIDES;
    static {
        ArrayList<Character> list = new ArrayList<>();
        list.add('G');
        list.add('A');
        list.add('T');
        list.add('C');
        NUCLEOTIDES = list;
    }

    String nucleotides;

    public DNA(String nucleotides) {
        this.nucleotides = nucleotides;
    }

    public int count(Character nucleotide) {
        validateInput(nucleotide);
        int matches = 0;
        for(String x : charactersArray()) {
            if (x.equals(Character.toString(nucleotide))) {
                matches++;
            }
        }
        return matches;
    }

    public Map<Character, Integer> nucleotideCounts() {
        Map counts = new HashMap<>();
        NUCLEOTIDES.forEach(n -> {
            counts.put(n, count(n));
        });
        return counts;
    }

    private String[] charactersArray() {
        return nucleotides.toUpperCase().split("");
    }

    private void validateInput(Character nucleotide) {
        if (!NUCLEOTIDES.contains(nucleotide)) {
            throw new IllegalArgumentException();
        }
    }
}
